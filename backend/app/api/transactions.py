from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from ..state import store

router = APIRouter()

@router.get("/transactions")
async def list_transactions(
    min_amount: Optional[float] = Query(None),
    search: Optional[str] = Query(None),
    limit: int = 50
):
    results = []
    for r in store.records:
        txid = r["txid"]
        tx_meta = store.entities["transactions"].get(txid, {})
        item = {
            **r,
            "risk_score": tx_meta.get("risk_score", 0),
            "confidence": tx_meta.get("confidence", 0.0)
        }
        if min_amount is not None and item.get("output_amounts", 0) < min_amount:
            continue
        if search:
            s = search.lower()
            if not (s in txid.lower() or s in str(r.get("src_ip")).lower() or s in str(r.get("dst_ip")).lower()):
                continue
        results.append(item)

    results.sort(key=lambda x: x.get("risk_score", 0), reverse=True)
    return results[:limit]

@router.get("/transactions/{txid}")
async def get_transaction(txid: str):
    tx_meta = store.entities["transactions"].get(txid)
    if not tx_meta:
        raise HTTPException(status_code=404, detail="Transaction not found")

    rec = tx_meta.get("record", {})
    return {
        "txid": txid,
        "timestamp": rec.get("timestamp"),
        "fee": rec.get("fee"),
        "script_type": rec.get("script_type"),
        "input_addresses": rec.get("input_addresses", []),
        "output_addresses": rec.get("output_addresses", []),
        "input_amount": rec.get("input_amounts"),
        "output_amount": rec.get("output_amounts"),
        "src_ip": rec.get("src_ip"),
        "dst_ip": rec.get("dst_ip"),
        "src_port": rec.get("src_port"),
        "dst_port": rec.get("dst_port"),
        "country": rec.get("geo_country"),
        "asn": rec.get("asn"),
        "risk_score": tx_meta.get("risk_score", 0),
        "confidence": tx_meta.get("confidence", 0.0)
    }
