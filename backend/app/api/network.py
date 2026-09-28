from fastapi import APIRouter
from collections import Counter
from ..state import store

router = APIRouter()

@router.get("/network")
async def network_intelligence():
    src_ips = [r["src_ip"] for r in store.records if r.get("src_ip")]
    dst_ips = [r["dst_ip"] for r in store.records if r.get("dst_ip")]
    countries = [r["geo_country"] for r in store.records if r.get("geo_country")]
    asns = [r["asn"] for r in store.records if r.get("asn")]
    ports = [r["src_port"] for r in store.records if r.get("src_port")]

    return {
        "top_source_ips": [{"ip": k, "count": v} for k, v in Counter(src_ips).most_common(10)],
        "top_destination_ips": [{"ip": k, "count": v} for k, v in Counter(dst_ips).most_common(10)],
        "country_distribution": [{"country": k, "count": v} for k, v in Counter(countries).most_common(10)],
        "asn_distribution": [{"asn": str(k), "count": v} for k, v in Counter(asns).most_common(10)],
        "port_patterns": [{"port": k, "count": v} for k, v in Counter(ports).most_common(10)]
    }
