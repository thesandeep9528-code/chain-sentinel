from fastapi import APIRouter
from ..state import store

router = APIRouter()

@router.get("/dataset/status")
async def status():
    if not store.is_loaded:
        return {
            "is_loaded": False,
            "status": "NO DATASET LOADED",
            "message": "System ready. Awaiting cross-layer metadata ingestion."
        }
    return {
        "is_loaded": True,
        "status": "ACTIVE",
        "filename": store.filename,
        "format": store.format,
        "transactions_analyzed": len(store.records),
        "entities_resolved": len(store.entities["wallets"]) + len(store.entities["ips"]) + len(store.entities["transactions"]),
        "suspicious_entities": sum(1 for e in list(store.entities["wallets"].values()) + list(store.entities["ips"].values()) if e.get("risk_score", 0) >= 60),
        "high_risk_alerts": sum(1 for a in store.alerts if a.get("severity") in ["HIGH", "CRITICAL"]),
        "graph_nodes": store.graph_data["total_nodes"],
        "graph_relationships": store.graph_data["total_edges"],
        "communities_count": len(store.communities)
    }
