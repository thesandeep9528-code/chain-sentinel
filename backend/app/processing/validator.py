import pandas as pd
import io
from typing import List, Dict

REQUIRED_FIELDS = [
    "timestamp",
    "src_ip",
    "dst_ip",
    "src_port",
    "dst_port",
    "txid",
    "input_addresses",
    "output_addresses",
    "input_amounts",
    "output_amounts",
    "geo_country",
    "asn",
]

OPTIONAL_FIELDS = ["fee", "script_type"]

def _check_columns(df: pd.DataFrame) -> None:
    missing = [col for col in REQUIRED_FIELDS if col not in df.columns]
    if missing:
        raise ValueError(f"Missing required columns: {', '.join(missing)}")

def _detect_duplicates(df: pd.DataFrame) -> pd.DataFrame:
    # Duplicate detection based on txid (primary key)
    dup_mask = df.duplicated(subset=["txid"], keep=False)
    return df[dup_mask]

async def validate_records(raw_bytes: bytes, ext: str) -> List[Dict]:
    """Parse CSV/JSON/XML (CSV fully implemented) and validate.

    Returns a list of record dictionaries ready for downstream processing.
    """
    if ext == ".csv":
        df = pd.read_csv(io.BytesIO(raw_bytes))
    elif ext == ".json":
        df = pd.read_json(io.BytesIO(raw_bytes))
    elif ext == ".xml":
        # Requires lxml; pandas.read_xml will raise if unavailable.
        df = pd.read_xml(io.BytesIO(raw_bytes))
    else:
        raise ValueError("Unsupported file extension")

    # Ensure column names are stripped of whitespace
    df.columns = [c.strip() for c in df.columns]

    # Validate mandatory columns exist
    _check_columns(df)

    # Detect duplicates (for reporting purposes)
    dup_df = _detect_duplicates(df)
    if not dup_df.empty:
        # Keep duplicate rows; callers can use dup_df for metrics.
        pass

    # Populate missing optional fields with None
    for col in OPTIONAL_FIELDS:
        if col not in df.columns:
            df[col] = None

    # Convert to list of dicts
    records = df.to_dict(orient="records")
    return records
