import pathlib
from fastapi import APIRouter, UploadFile, File, HTTPException
from ..processing.validator import validate_records
from ..processing.normalizer import normalize_records
from ..processing.resolver import resolve_entities
from ..processing.graph_builder import build_graph
from ..ml.anomaly_model import extract_features, train_and_predict
from ..alerts.explainability import generate_alerts
from ..graph.pyg_analysis import analyze_communities
from ..state import store

router = APIRouter()

DEMO_FILE = pathlib.Path(__file__).resolve().parents[3] / "data" / "demo" / "synthetic_demo.csv"

@router.post("/ingest")
async def ingest(file: UploadFile = File(...)):
    raw = await file.read()
    ext = pathlib.Path(file.filename).suffix.lower()
    if ext not in {".csv", ".json", ".xml"}:
        raise HTTPException(status_code=400, detail="Unsupported file format. Please upload CSV, JSON, or XML.")

    try:
        records = await validate_records(raw, ext)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Validation error: {str(e)}")

    normalized = normalize_records(records)
    entities = resolve_entities(normalized)
    graph_res = build_graph(entities, normalized)

    features_df, _ = extract_features(normalized, graph_res["nx_graph"])
    risk_scores, confidences, evidence_list = train_and_predict(features_df)

    alerts = generate_alerts(normalized, risk_scores, confidences, evidence_list, entities)
    communities = analyze_communities(graph_res["nx_graph"])

    store.is_loaded = True
    store.filename = file.filename
    store.format = ext.replace(".", "").upper()
    store.records = normalized
    store.entities = entities
    store.graph_data = {
        "elements": graph_res["elements"],
        "nodes": graph_res["nodes"],
        "edges": graph_res["edges"],
        "total_nodes": graph_res["total_nodes"],
        "total_edges": graph_res["total_edges"]
    }
    store.alerts = alerts
    store.communities = communities

    return {
        "status": "success",
        "filename": file.filename,
        "format": store.format,
        "records_count": len(normalized),
        "validation_status": "PASSED",
        "duplicates": store.duplicates_count,
        "missing_values": store.missing_count,
        "normalization_status": "COMPLETED",
        "total_entities": len(entities["wallets"]) + len(entities["ips"]) + len(entities["transactions"]),
        "total_alerts": len(alerts)
    }

@router.post("/demo/load")
async def load_demo():
    if not DEMO_FILE.exists():
        from data.demo.generate_demo import generate
        generate()

    with open(DEMO_FILE, "rb") as f:
        raw = f.read()

    records = await validate_records(raw, ".csv")
    normalized = normalize_records(records)
    entities = resolve_entities(normalized)
    graph_res = build_graph(entities, normalized)

    features_df, _ = extract_features(normalized, graph_res["nx_graph"])
    risk_scores, confidences, evidence_list = train_and_predict(features_df)

    alerts = generate_alerts(normalized, risk_scores, confidences, evidence_list, entities)
    communities = analyze_communities(graph_res["nx_graph"])

    store.is_loaded = True
    store.filename = "synthetic_demo.csv"
    store.format = "CSV"
    store.records = normalized
    store.entities = entities
    store.graph_data = {
        "elements": graph_res["elements"],
        "nodes": graph_res["nodes"],
        "edges": graph_res["edges"],
        "total_nodes": graph_res["total_nodes"],
        "total_edges": graph_res["total_edges"]
    }
    store.alerts = alerts
    store.communities = communities

    return {
        "status": "success",
        "message": f"Dataset loaded successfully. {len(normalized):,} transactions analyzed.",
        "records_count": len(normalized),
        "entities_count": len(entities["wallets"]) + len(entities["ips"]) + len(entities["transactions"]),
        "alerts_count": len(alerts)
    }
