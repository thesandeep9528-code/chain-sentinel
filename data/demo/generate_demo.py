import random
import uuid
import pandas as pd
from datetime import datetime, timedelta

NUM_NORMAL = 2500
NUM_SUSPICIOUS = 150

countries = [
    ("US", 15169),
    ("CN", 4134),
    ("RU", 16276),
    ("DE", 3320),
    ("JP", 25133),
]

def _rand_ip():
    return ".".join(str(random.randint(0, 255)) for _ in range(4))

def _wallet():
    # simple bech32‑like address
    prefix = random.choice(["bc1q", "bc1p"]) 
    return prefix + uuid.uuid4().hex[:30]

def _timestamp(start: datetime, delta_seconds: int):
    return (start + timedelta(seconds=delta_seconds)).isoformat() + "Z"

def generate():
    records = []
    start_time = datetime.utcnow() - timedelta(days=30)
    # Normal activity
    for i in range(NUM_NORMAL):
        src_ip = _rand_ip()
        dst_ip = _rand_ip()
        src_port = random.choice([80, 443, 8333])
        dst_port = 8332
        txid = f"tx{1000+i:06d}"
        in_addr = _wallet()
        out_addr = _wallet()
        amount = round(random.uniform(0.001, 0.05), 8)
        fee = round(amount * random.uniform(0.001, 0.005), 8)
        country, asn = random.choice(countries)
        record = {
            "timestamp": _timestamp(start_time, i * random.randint(30, 300)),
            "src_ip": src_ip,
            "dst_ip": dst_ip,
            "src_port": src_port,
            "dst_port": dst_port,
            "txid": txid,
            "input_addresses": in_addr,
            "output_addresses": out_addr,
            "input_amounts": amount,
            "output_amounts": round(amount - fee, 8),
            "geo_country": country,
            "asn": asn,
            "fee": fee,
            "script_type": "P2PKH",
        }
        records.append(record)
    # Suspicious patterns – bursts, high values, repeated IP‑wallet links
    for i in range(NUM_SUSPICIOUS):
        src_ip = random.choice(["203.0.113.9", "198.51.100.23", "192.0.2.45"])
        dst_ip = _rand_ip()
        src_port = 80
        dst_port = 8332
        txid = f"txS{2000+i:06d}"
        in_addr = _wallet()
        out_addr = _wallet()
        # high amount pattern
        amount = round(random.uniform(5, 25), 8)
        fee = round(amount * random.uniform(0.001, 0.005), 8)
        country, asn = random.choice(countries)
        record = {
            "timestamp": _timestamp(start_time, NUM_NORMAL * 300 + i * 10),
            "src_ip": src_ip,
            "dst_ip": dst_ip,
            "src_port": src_port,
            "dst_port": dst_port,
            "txid": txid,
            "input_addresses": in_addr,
            "output_addresses": out_addr,
            "input_amounts": amount,
            "output_amounts": round(amount - fee, 8),
            "geo_country": country,
            "asn": asn,
            "fee": fee,
            "script_type": "P2SH",
        }
        records.append(record)
    df = pd.DataFrame(records)
    df.to_csv("c:/Users/DELL/Desktop/chain project/data/demo/synthetic_demo.csv", index=False)
    print("Synthetic demo dataset generated with", len(df), "records")

if __name__ == "__main__":
    generate()
