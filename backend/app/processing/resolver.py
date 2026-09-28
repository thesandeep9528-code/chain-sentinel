from typing import List, Dict

def resolve_entities(records: List[Dict]) -> Dict[str, Dict]:
    """Extract distinct entities: Wallets, IPs, Transactions, ASNs, Countries.
    Assign internal canonical identifiers and aggregate references.
    """
    entities = {
        "wallets": {},
        "ips": {},
        "transactions": {},
        "asns": {},
        "countries": {}
    }

    for r in records:
        txid = str(r["txid"])
        if txid not in entities["transactions"]:
            entities["transactions"][txid] = {
                "id": txid,
                "type": "TRANSACTION",
                "record": r,
                "risk_score": 0,
                "confidence": 0.0
            }

        # IPs
        for ip_field in ["src_ip", "dst_ip"]:
            ip = str(r.get(ip_field, ""))
            if ip and ip not in entities["ips"]:
                entities["ips"][ip] = {
                    "id": ip,
                    "type": "IP",
                    "tx_count": 0,
                    "risk_score": 0,
                    "confidence": 0.0
                }
            if ip:
                entities["ips"][ip]["tx_count"] += 1

        # Wallets
        for w in r.get("input_addresses", []) + r.get("output_addresses", []):
            if w and w not in entities["wallets"]:
                entities["wallets"][w] = {
                    "id": w,
                    "type": "WALLET",
                    "tx_count": 0,
                    "risk_score": 0,
                    "confidence": 0.0
                }
            if w:
                entities["wallets"][w]["tx_count"] += 1

        # Country / ASN
        country = str(r.get("geo_country", ""))
        if country and country not in entities["countries"]:
            entities["countries"][country] = {"id": country, "type": "COUNTRY"}

        asn = str(r.get("asn", ""))
        if asn and asn not in entities["asns"]:
            entities["asns"][asn] = {"id": asn, "type": "ASN"}

    return entities
