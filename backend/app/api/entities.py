from fastapi import APIRouter, HTTPException, Query
from typing import Optional, List
from ..state import store

router = APIRouter()

@router.get("/entities")
async def list_entities(
    entity_type: Optional[str] = Query(None, description="WALLET, IP, or TRANSACTION"),
    min_risk: Optional[int] = Query(0, description="Minimum risk score"),
    search: Optional[str] = Query(None, description="Search query")
):
    results = []
    types = [entity_type.upper()] if entity_type else ["WALLET", "IP", "TRANSACTION"]

    if "WALLET" in types:
        for w in store.entities["wallets"].values():
            if w.get("risk_score", 0) >= min_risk:
                if not search or search.lower() in w["id"].lower():
                    results.append(w)

    if "IP" in types:
        for ip in store.entities["ips"].values():
            if ip.get("risk_score", 0) >= min_risk:
                if not search or search.lower() in ip["id"].lower():
                    results.append(ip)

    if "TRANSACTION" in types:
        for tx in store.entities["transactions"].values():
            if tx.get("risk_score", 0) >= min_risk:
                if not search or search.lower() in tx["id"].lower():
                    results.append({
                        "id": tx["id"],
                        "type": tx["type"],
                        "risk_score": tx["risk_score"],
                        "confidence": tx["confidence"]
                    })

    results.sort(key=lambda x: x.get("risk_score", 0), reverse=True)
    return results[:100]

@router.get("/entities/{id}")
async def get_entity(id: str):
    if id in store.entities["wallets"]:
        e = dict(store.entities["wallets"][id])
        # Find connected transactions
        connected_txs = [r["txid"] for r in store.records if id in r.get("input_addresses", []) or id in r.get("output_addresses", [])]
        e["connected_transactions"] = len(connected_txs)
        # Find associated IPs
        associated_ips = list(set([r["src_ip"] for r in store.records if id in r.get("input_addresses", []) or id in r.get("output_addresses", []) if r.get("src_ip")]))
        e["connected_ips"] = len(associated_ips)
        e["associated_ips"] = associated_ips[:10]
        return e

    if id in store.entities["ips"]:
        e = dict(store.entities["ips"][id])
        connected_txs = [r["txid"] for r in store.records if r.get("src_ip") == id or r.get("dst_ip") == id]
        e["connected_transactions"] = len(connected_txs)
        return e

    if id in store.entities["transactions"]:
        return store.entities["transactions"][id]

    raise HTTPException(status_code=404, detail="Entity not found")
