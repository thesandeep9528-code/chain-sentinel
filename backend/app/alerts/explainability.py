from typing import List, Dict, Any

def generate_alerts(
    records: List[Dict],
    risk_scores: List[int],
    confidences: List[float],
    evidence_matrix: List[List[str]],
    entities: Dict[str, Dict]
) -> List[Dict[str, Any]]:
    """Synthesize investigative alerts with clear explainability, risk categorization, and evidence."""
    alerts = []
    alert_counter = 1

    for idx, r in enumerate(records):
        score = int(risk_scores[idx])
        conf = float(confidences[idx])
        txid = str(r["txid"])
        evidence = evidence_matrix[idx] if idx < len(evidence_matrix) else []

        # Determine forensic triage level
        if score >= 80:
            level = "CRITICAL"
        elif score >= 60:
            level = "HIGH"
        elif score >= 30:
            level = "MEDIUM"
        else:
            level = "LOW"

        # Update entity risk scores
        if txid in entities["transactions"]:
            entities["transactions"][txid]["risk_score"] = max(entities["transactions"][txid]["risk_score"], score)
            entities["transactions"][txid]["confidence"] = conf

        for ip in [r.get("src_ip"), r.get("dst_ip")]:
            if ip and ip in entities["ips"]:
                entities["ips"][ip]["risk_score"] = max(entities["ips"][ip]["risk_score"], score)
                entities["ips"][ip]["confidence"] = conf

        for w in r.get("input_addresses", []) + r.get("output_addresses", []):
            if w and w in entities["wallets"]:
                entities["wallets"][w]["risk_score"] = max(entities["wallets"][w]["risk_score"], score)
                entities["wallets"][w]["confidence"] = conf

        # Generate priority alerts for HIGH and CRITICAL items (or prominent mediums)
        if score >= 60:
            # Build human-readable investigation summary
            why_flagged = list(evidence)
            if r.get("geo_country"):
                why_flagged.append(f"Network origination jurisdiction: {r.get('geo_country')} (ASN {r.get('asn')})")
            
            alerts.append({
                "alert_id": f"CS-{alert_counter:04d}",
                "txid": txid,
                "entity_type": "TRANSACTION",
                "entity_id": txid,
                "risk_score": score,
                "confidence": conf,
                "severity": level,
                "timestamp": r.get("timestamp"),
                "summary": f"Cross-layer anomaly identified with risk score {score}/100 and confidence {conf}",
                "why_flagged": why_flagged,
                "evidence": why_flagged,
                "network_context": {
                    "src_ip": r.get("src_ip"),
                    "dst_ip": r.get("dst_ip"),
                    "src_port": r.get("src_port"),
                    "dst_port": r.get("dst_port"),
                    "country": r.get("geo_country"),
                    "asn": r.get("asn")
                },
                "blockchain_context": {
                    "input_addresses": r.get("input_addresses"),
                    "output_addresses": r.get("output_addresses"),
                    "amount": float(r.get("output_amounts", 0.0) or 0.0),
                    "fee": float(r.get("fee", 0.0) or 0.0),
                    "script_type": r.get("script_type")
                }
            })
            alert_counter += 1

    alerts.sort(key=lambda x: (x["risk_score"], x["confidence"]), reverse=True)
    return alerts
