import asyncio
import pytest
from app.processing.validator import validate_records
from app.processing.normalizer import normalize_records
from app.processing.resolver import resolve_entities
from app.processing.graph_builder import build_graph
from app.ml.anomaly_model import extract_features, train_and_predict
from app.alerts.explainability import generate_alerts

SAMPLE_CSV = b"""timestamp,src_ip,dst_ip,src_port,dst_port,txid,input_addresses,output_addresses,input_amounts,output_amounts,geo_country,asn,fee,script_type
2026-09-20T10:12:03Z,185.12.34.56,52.21.9.8,443,8332,tx001,bc1qnormal1,bc1qnormal2,0.015,0.0145,US,15169,0.0005,P2PKH
2026-09-22T02:45:11Z,203.0.113.9,51.68.22.10,80,8332,tx002,bc1qsuspectA;bc1qsuspectB,bc1qvictimX,15.2,15.18,CN,4134,0.02,P2SH
"""

@pytest.mark.asyncio
async def test_full_pipeline():
    records = await validate_records(SAMPLE_CSV, ".csv")
    assert len(records) == 2
    
    normalized = normalize_records(records)
    assert len(normalized[1]["input_addresses"]) == 2
    
    entities = resolve_entities(normalized)
    assert len(entities["transactions"]) == 2
    assert "185.12.34.56" in entities["ips"]
    
    graph_res = build_graph(entities, normalized)
    assert graph_res["total_nodes"] > 0
    assert graph_res["total_edges"] > 0
    
    features_df, meta = extract_features(normalized, graph_res["nx_graph"])
    assert len(features_df) == 2
    assert meta["features_extracted"] > 0

    risk_scores, conf, evidence_list = train_and_predict(features_df)
    assert len(risk_scores) == 2
    assert len(evidence_list) == 2
    
    alerts = generate_alerts(normalized, risk_scores, conf, evidence_list, entities)
    assert isinstance(alerts, list)
    print("Test pipeline completed successfully!")

if __name__ == "__main__":
    asyncio.run(test_full_pipeline())
