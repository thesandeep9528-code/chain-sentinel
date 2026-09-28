from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from ..state import store

router = APIRouter()

@router.get("/alerts")
async def list_alerts(
    severity: Optional[str] = Query(None),
    min_risk: Optional[int] = Query(None)
):
    results = store.alerts
    if severity:
        results = [a for a in results if a.get("severity") == severity.upper()]
    if min_risk is not None:
        results = [a for a in results if a.get("risk_score", 0) >= min_risk]
    return results

@router.get("/alerts/{alert_id}")
async def get_alert(alert_id: str):
    for a in store.alerts:
        if a["alert_id"] == alert_id:
            return a
    raise HTTPException(status_code=404, detail="Alert not found")
