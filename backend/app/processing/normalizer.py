from typing import List, Dict

def normalize_records(records: List[Dict]) -> List[Dict]:
    """Normalize fields like splitting multiple addresses, standardizing lowercase IPs/wallets."""
    normalized = []
    for r in records:
        rec = dict(r)
        # Handle semicolon or comma separated input/output addresses
        if isinstance(rec.get("input_addresses"), str):
            rec["input_addresses"] = [a.strip() for a in rec["input_addresses"].replace(";", ",").split(",") if a.strip()]
        elif not isinstance(rec.get("input_addresses"), list):
            rec["input_addresses"] = [str(rec.get("input_addresses"))]

        if isinstance(rec.get("output_addresses"), str):
            rec["output_addresses"] = [a.strip() for a in rec["output_addresses"].replace(";", ",").split(",") if a.strip()]
        elif not isinstance(rec.get("output_addresses"), list):
            rec["output_addresses"] = [str(rec.get("output_addresses"))]

        # Numeric conversions
        try:
            rec["input_amounts"] = float(rec.get("input_amounts", 0.0))
        except (ValueError, TypeError):
            rec["input_amounts"] = 0.0

        try:
            rec["output_amounts"] = float(rec.get("output_amounts", 0.0))
        except (ValueError, TypeError):
            rec["output_amounts"] = 0.0

        try:
            rec["fee"] = float(rec.get("fee", 0.0)) if rec.get("fee") is not None else 0.0
        except (ValueError, TypeError):
            rec["fee"] = 0.0

        normalized.append(rec)
    return normalized
