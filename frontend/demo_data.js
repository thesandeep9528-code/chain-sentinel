window.CHAIN_SENTINEL_DEMO_DATA = {
  "status": {
    "is_loaded": true,
    "status": "ACTIVE",
    "filename": "synthetic_demo.csv",
    "format": "CSV",
    "transactions_analyzed": 2650,
    "entities_resolved": 13103,
    "suspicious_entities": 453,
    "high_risk_alerts": 150,
    "graph_nodes": 13103,
    "graph_relationships": 10600,
    "communities_count": 25
  },
  "alerts": [
    {
      "alert_id": "CS-0034",
      "txid": "txS002033",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002033",
      "risk_score": 99,
      "confidence": 0.97,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:48:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 99/100 and confidence 0.97",
      "why_flagged": [
        "High output value: 24.13 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 24.13 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "232.114.1.25",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q9cbe1c1eb68849d1990de06e03f213"
        ],
        "output_addresses": [
          "bc1pdcc029d34a6847ae81c7fe0f973316"
        ],
        "amount": 24.1310138,
        "fee": 0.108653,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0026",
      "txid": "txS002025",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002025",
      "risk_score": 98,
      "confidence": 0.97,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:46:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 98/100 and confidence 0.97",
      "why_flagged": [
        "High output value: 24.63 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 24.63 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "68.122.5.131",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pa5db9d65f7f5411cbc3f69273b2059"
        ],
        "output_addresses": [
          "bc1pe5a7fa926c6a4b47ae60960caccefd"
        ],
        "amount": 24.62521798,
        "fee": 0.09469443,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0009",
      "txid": "txS002008",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002008",
      "risk_score": 97,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:43:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 97/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 20.86 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 20.86 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "127.106.104.11",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q8880c24a5fb04a9cbe8a4eac63f33a"
        ],
        "output_addresses": [
          "bc1p2080c63725a644c6ae5bcaeff4b7bb"
        ],
        "amount": 20.86080209,
        "fee": 0.09655326,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0012",
      "txid": "txS002011",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002011",
      "risk_score": 97,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:44:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 97/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 23.66 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 23.66 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "136.118.142.79",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q645acea907144d5a8d84f290b58843"
        ],
        "output_addresses": [
          "bc1p80781a2c4a11459e9019349fd4c2ba"
        ],
        "amount": 23.66205218,
        "fee": 0.09462242,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0019",
      "txid": "txS002018",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002018",
      "risk_score": 97,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:45:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 97/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 24.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 24.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "19.8.216.124",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p3379b7c4ac534f3293a1d70b0b538e"
        ],
        "output_addresses": [
          "bc1pb52b08c1040d4d55923b08e35e0c27"
        ],
        "amount": 24.52976122,
        "fee": 0.08354303,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0052",
      "txid": "txS002051",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002051",
      "risk_score": 97,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:51:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 97/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 22.42 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 22.42 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "157.116.230.21",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q2dbd91af403f4d4fbd01aa7ca2e08a"
        ],
        "output_addresses": [
          "bc1pc569655a07fa4bbea6ddc1d2ca1262"
        ],
        "amount": 22.41541973,
        "fee": 0.09444319,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0109",
      "txid": "txS002108",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002108",
      "risk_score": 97,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:00:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 97/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 21.92 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 21.92 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "172.176.244.68",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q49913be9c1b44607b979c24aa43c38"
        ],
        "output_addresses": [
          "bc1p93088bd708ef48cbadbcc17fea2b19"
        ],
        "amount": 21.9162628,
        "fee": 0.09288284,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0127",
      "txid": "txS002126",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002126",
      "risk_score": 97,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:03:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 97/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 23.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 23.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "244.83.229.196",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p698e931d13a24cf8857d189177440b"
        ],
        "output_addresses": [
          "bc1p8de546dd22d247acb4eed7727cd32f"
        ],
        "amount": 23.90974385,
        "fee": 0.08802459,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0008",
      "txid": "txS002007",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002007",
      "risk_score": 96,
      "confidence": 0.96,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:43:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 96/100 and confidence 0.96",
      "why_flagged": [
        "High output value: 23.26 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 23.26 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "75.27.177.247",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q3460c60429194d68869520ba315ab7"
        ],
        "output_addresses": [
          "bc1p424b8b716b2a4fb1b0c4afc486ced6"
        ],
        "amount": 23.26375251,
        "fee": 0.08496099,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0073",
      "txid": "txS002072",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002072",
      "risk_score": 95,
      "confidence": 0.95,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:54:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 95/100 and confidence 0.95",
      "why_flagged": [
        "High output value: 19.07 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 19.07 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "117.62.216.2",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p70475613c16547cf9a44877fad031f"
        ],
        "output_addresses": [
          "bc1qafed75d4a88b4bc6873a4faa1c2afd"
        ],
        "amount": 19.07006672,
        "fee": 0.08671461,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0041",
      "txid": "txS002040",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002040",
      "risk_score": 94,
      "confidence": 0.95,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:49:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 94/100 and confidence 0.95",
      "why_flagged": [
        "High output value: 21.68 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 21.68 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "164.221.247.132",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p5caad78fec384433b238d2b24cc66c"
        ],
        "output_addresses": [
          "bc1q13750780306a4fd9bff9d86fdb547f"
        ],
        "amount": 21.68112708,
        "fee": 0.08127531,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0046",
      "txid": "txS002045",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002045",
      "risk_score": 94,
      "confidence": 0.95,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:50:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 94/100 and confidence 0.95",
      "why_flagged": [
        "High output value: 17.03 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 17.03 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "210.208.121.220",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q938a8525c56e4801b2ba96012799bf"
        ],
        "output_addresses": [
          "bc1pd969397382504df78ac2a95e71e458"
        ],
        "amount": 17.026516,
        "fee": 0.08499238,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0076",
      "txid": "txS002075",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002075",
      "risk_score": 94,
      "confidence": 0.95,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:55:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 94/100 and confidence 0.95",
      "why_flagged": [
        "High output value: 21.23 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 21.23 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "201.31.160.44",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qf0bfd47f979a4b56b267114249025d"
        ],
        "output_addresses": [
          "bc1q80dc21da289b4cbe9752de8eb2f5f5"
        ],
        "amount": 21.22516247,
        "fee": 0.08490052,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0089",
      "txid": "txS002088",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002088",
      "risk_score": 93,
      "confidence": 0.95,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:57:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 93/100 and confidence 0.95",
      "why_flagged": [
        "High output value: 22.44 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 22.44 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "225.97.69.220",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pf1807e62a6bd4273a113fc927a37f2"
        ],
        "output_addresses": [
          "bc1qb5dac2e19981495cb5231aeaf03597"
        ],
        "amount": 22.44022995,
        "fee": 0.03064331,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0081",
      "txid": "txS002080",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002080",
      "risk_score": 93,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:55:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 93/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.83 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 23.83 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "89.235.120.27",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qdaf45cbaaf144020b9072702a30380"
        ],
        "output_addresses": [
          "bc1qfd1fc620192440be9c5c4d8c35a03a"
        ],
        "amount": 23.83375259,
        "fee": 0.07466157,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0120",
      "txid": "txS002119",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002119",
      "risk_score": 93,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:02:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 93/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 18.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 18.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "182.164.167.208",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q97842d65129c413fb2514d6bee85eb"
        ],
        "output_addresses": [
          "bc1qa2fe28897a364ab485036c18178048"
        ],
        "amount": 18.71185182,
        "fee": 0.08154017,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0146",
      "txid": "txS002145",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002145",
      "risk_score": 93,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:06:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 93/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 22.89 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 22.89 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "131.211.23.133",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pceb7ef62ed024148bd286e69670219"
        ],
        "output_addresses": [
          "bc1pdbdfc04f395849c0a1a21e0b1c10fc"
        ],
        "amount": 22.89019387,
        "fee": 0.03120908,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0033",
      "txid": "txS002032",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002032",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:47:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 20.84 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 20.84 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "117.195.16.144",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p7a83b3435b394da39fc90c8dc6bb2e"
        ],
        "output_addresses": [
          "bc1qb92947da19904e279ab11ba95577e4"
        ],
        "amount": 20.83737827,
        "fee": 0.02313841,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0066",
      "txid": "txS002065",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002065",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:53:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.57 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 23.57 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "175.80.186.82",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qe02b697629a44758a37d0d5de8f30c"
        ],
        "output_addresses": [
          "bc1qbf020c2532d340e5b1d3cc575880e3"
        ],
        "amount": 23.57379946,
        "fee": 0.05696966,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0068",
      "txid": "txS002067",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002067",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:53:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.25 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 23.25 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "168.62.182.6",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p886f36ab55d84c19b80d9b9b768cdf"
        ],
        "output_addresses": [
          "bc1q23e2f584d6dd469e92fa1aa312f3bc"
        ],
        "amount": 23.24890929,
        "fee": 0.05439904,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0086",
      "txid": "txS002085",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002085",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:56:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.28 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 23.28 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "233.131.2.226",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qc255208ab8614385af0eb2193c9de1"
        ],
        "output_addresses": [
          "bc1pf204750c9bd64f1c80754461305efb"
        ],
        "amount": 23.28420138,
        "fee": 0.04764517,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0092",
      "txid": "txS002091",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002091",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:57:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.34 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 23.34 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "55.79.212.188",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q3619730dde6c47d9b4c8a5b1c77308"
        ],
        "output_addresses": [
          "bc1p45cfa001197f47c69abb161c4984d2"
        ],
        "amount": 23.34371067,
        "fee": 0.06043038,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0096",
      "txid": "txS002095",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002095",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:58:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 20.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 20.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "96.83.184.34",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p8c755ce96aa94f3fb4b3e4e87d688c"
        ],
        "output_addresses": [
          "bc1pf346f7bf75434c9d9b307f09bfd8b9"
        ],
        "amount": 20.6940767,
        "fee": 0.02467929,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0136",
      "txid": "txS002135",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002135",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:05:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 20.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 20.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "101.110.19.250",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pa5b19c8fa02a4ba9b274280edbce46"
        ],
        "output_addresses": [
          "bc1q58d7c1a798b34a92874ec1accb1f93"
        ],
        "amount": 20.64340415,
        "fee": 0.02474665,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0147",
      "txid": "txS002146",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002146",
      "risk_score": 92,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:06:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 92/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 23.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "99.221.66.234",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pa1a7d7521ec543eca8029084382265"
        ],
        "output_addresses": [
          "bc1p50b5641ee1464df89f80783518c989"
        ],
        "amount": 23.02251831,
        "fee": 0.06524027,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0014",
      "txid": "txS002013",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002013",
      "risk_score": 91,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:44:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 91/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 22.29 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 22.29 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "158.183.179.226",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qd8ea811b53a846dca0e4e120cb0b17"
        ],
        "output_addresses": [
          "bc1pf8f61d820d5b4f4ab51647038effec"
        ],
        "amount": 22.28863911,
        "fee": 0.04038528,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0078",
      "txid": "txS002077",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002077",
      "risk_score": 91,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:55:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 91/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 22.08 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 22.08 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "155.18.186.188",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qfc10a56ea2f644dcba6d2755924b0f"
        ],
        "output_addresses": [
          "bc1pd7ca5b0ae8584430a9ef21a5f5c829"
        ],
        "amount": 22.07581633,
        "fee": 0.06174131,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0107",
      "txid": "txS002106",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002106",
      "risk_score": 91,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:00:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 91/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 22.18 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 22.18 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "103.169.151.89",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q772ebeca6c3d4d0e9d612a85b4e0a0"
        ],
        "output_addresses": [
          "bc1q5b9f86b90b6e4124b16fb62589d6bf"
        ],
        "amount": 22.18130767,
        "fee": 0.04250047,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0113",
      "txid": "txS002112",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002112",
      "risk_score": 91,
      "confidence": 0.94,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:01:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 91/100 and confidence 0.94",
      "why_flagged": [
        "High output value: 23.07 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 23.07 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "82.124.153.4",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q42d8ca9b121447258e0cb16216863c"
        ],
        "output_addresses": [
          "bc1q7e07ba0d8b4a4da593dcc0a13c1d8e"
        ],
        "amount": 23.07101512,
        "fee": 0.05006847,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0084",
      "txid": "txS002083",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002083",
      "risk_score": 91,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:56:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 91/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 20.97 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 20.97 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "101.122.59.254",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q41e6747b1f4b4b33bd0c1170029bd3"
        ],
        "output_addresses": [
          "bc1p5f1e4d0c64ec4213b91819e8743160"
        ],
        "amount": 20.96709988,
        "fee": 0.03420442,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0001",
      "txid": "txS002000",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002000",
      "risk_score": 90,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:42:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 90/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 13.31 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 13.31 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "149.86.50.104",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q35cff39dd5e9407d9b2e2f77e54edb"
        ],
        "output_addresses": [
          "bc1q1f9ea07ff3814dce95305f7418431b"
        ],
        "amount": 13.31323577,
        "fee": 0.03518027,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0018",
      "txid": "txS002017",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002017",
      "risk_score": 90,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:45:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 90/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 17.98 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 17.98 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "214.34.238.41",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pb7655e205ba24b41a2ede4faf0034f"
        ],
        "output_addresses": [
          "bc1q6ebf42c0834e46839267081fe5071e"
        ],
        "amount": 17.98125394,
        "fee": 0.07458134,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0059",
      "txid": "txS002058",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002058",
      "risk_score": 90,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:52:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 90/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 20.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 20.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "42.41.213.148",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q9c613ae248d6451b994e385f3c55a7"
        ],
        "output_addresses": [
          "bc1qd31c62e614804cdba22ebc7e4534f2"
        ],
        "amount": 20.21645529,
        "fee": 0.07019426,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0060",
      "txid": "txS002059",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002059",
      "risk_score": 90,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:52:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 90/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 22.01 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 22.01 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "8.226.180.157",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q540ab39399ce4fdba2199daf77c7a7"
        ],
        "output_addresses": [
          "bc1p2657265cb4bb43c9808ba13bf8a96e"
        ],
        "amount": 22.01465681,
        "fee": 0.05007233,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0085",
      "txid": "txS002084",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002084",
      "risk_score": 90,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:56:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 90/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 21.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 21.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "198.33.104.79",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p18de432fa39e4efc8abdbcf7faecfc"
        ],
        "output_addresses": [
          "bc1p5b994e93e3b1436889976e482bc381"
        ],
        "amount": 21.71342932,
        "fee": 0.03846015,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0142",
      "txid": "txS002141",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002141",
      "risk_score": 90,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:06:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 90/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 16.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 16.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "130.189.12.114",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pa540dd6aef1b4c64a3e4f3d80109dd"
        ],
        "output_addresses": [
          "bc1q4bd9331b25504a149f2100fb9549f7"
        ],
        "amount": 16.91490555,
        "fee": 0.07452488,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0035",
      "txid": "txS002034",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002034",
      "risk_score": 89,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:48:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 89/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 17.29 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 17.29 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "125.30.112.253",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pbf1ae76764f141a184a701f237b325"
        ],
        "output_addresses": [
          "bc1pab043d0e2833403dbcf5f27606189d"
        ],
        "amount": 17.28997262,
        "fee": 0.07324318,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0115",
      "txid": "txS002114",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002114",
      "risk_score": 89,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:01:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 89/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 20.59 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 20.59 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "141.177.86.234",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q9b2156a14f314911b52505314216b9"
        ],
        "output_addresses": [
          "bc1q2ffff76ed0d845df8f7be9703f17cf"
        ],
        "amount": 20.58506638,
        "fee": 0.03851998,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0116",
      "txid": "txS002115",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002115",
      "risk_score": 89,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:01:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 89/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 20.61 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 20.61 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "7.56.89.200",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pcffc67edfb694c36a92dc15e23e5ca"
        ],
        "output_addresses": [
          "bc1q200f00c5b7864b4c9909089914b33b"
        ],
        "amount": 20.61266939,
        "fee": 0.05565702,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0140",
      "txid": "txS002139",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002139",
      "risk_score": 89,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:05:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 89/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 17.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 17.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "132.19.78.159",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qa6034c50201e4b36b375def44f2924"
        ],
        "output_addresses": [
          "bc1q932d2e83e27f441b80f7af70d0517a"
        ],
        "amount": 17.64537142,
        "fee": 0.01769594,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0143",
      "txid": "txS002142",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002142",
      "risk_score": 89,
      "confidence": 0.93,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:06:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 89/100 and confidence 0.93",
      "why_flagged": [
        "High output value: 21.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 21.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "211.233.214.67",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pbe0594551b59470c9fe4bef6f479c4"
        ],
        "output_addresses": [
          "bc1p7a49e4cf5c5047d285d0a4e810896c"
        ],
        "amount": 21.65199314,
        "fee": 0.0524928,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0011",
      "txid": "txS002010",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002010",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:44:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 16.85 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 16.85 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "175.10.189.200",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p75ee94a8c6d1492d9264f597d794f9"
        ],
        "output_addresses": [
          "bc1q884b29ee46b54532b419fbb2a82f57"
        ],
        "amount": 16.84841045,
        "fee": 0.07214958,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0025",
      "txid": "txS002024",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002024",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:46:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 19.29 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 19.29 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "98.33.118.6",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p3fd1c4963c414081b08a61813686f5"
        ],
        "output_addresses": [
          "bc1pecfef47973964a67acaf5064d92f4b"
        ],
        "amount": 19.29030101,
        "fee": 0.03246799,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0038",
      "txid": "txS002037",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002037",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:48:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 18.39 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 18.39 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "193.178.206.239",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p2d79a93b8eea4ea9922bf7769b8436"
        ],
        "output_addresses": [
          "bc1q13d78d0965a94689aebd1950e9d577"
        ],
        "amount": 18.38778206,
        "fee": 0.07274858,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0045",
      "txid": "txS002044",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002044",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:49:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 20.09 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 20.09 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "114.47.210.91",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q1071149ae475489ca2441d79697186"
        ],
        "output_addresses": [
          "bc1qfdf72c4d004242068b1619b17c585d"
        ],
        "amount": 20.09199565,
        "fee": 0.03916889,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0058",
      "txid": "txS002057",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002057",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:52:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 18.76 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 18.76 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "132.17.76.67",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q26193ca0682a445bb1d0305f0ce3ee"
        ],
        "output_addresses": [
          "bc1p5310725010ee43559ea41c74377dd3"
        ],
        "amount": 18.76217567,
        "fee": 0.02747768,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0070",
      "txid": "txS002069",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002069",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:54:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 17.03 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 17.03 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "9.35.109.197",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qf32af15430ef44bbbbb66140e95bef"
        ],
        "output_addresses": [
          "bc1qbe41dabfe8c3453eb41f11a947df7c"
        ],
        "amount": 17.02762269,
        "fee": 0.07034554,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0126",
      "txid": "txS002125",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002125",
      "risk_score": 88,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:03:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 88/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 18.36 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 18.36 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "202.204.240.89",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qcf742fa5fc3849dcb1ba0cd3c70242"
        ],
        "output_addresses": [
          "bc1qc2f0abd4647b4b4abfb70a5e3575cb"
        ],
        "amount": 18.3629749,
        "fee": 0.07047878,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0102",
      "txid": "txS002101",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002101",
      "risk_score": 87,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:59:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 87/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 14.96 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 14.96 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "243.66.152.150",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qc99c5dd2059442f4815578b597c1a0"
        ],
        "output_addresses": [
          "bc1q3f37d19efac14ec28550bdca3d96bb"
        ],
        "amount": 14.964615,
        "fee": 0.01553048,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0002",
      "txid": "txS002001",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002001",
      "risk_score": 86,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:42:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 10.57 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 10.57 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "4.84.31.97",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qa5dbd92ff34a4c17a8e3cebb243ab7"
        ],
        "output_addresses": [
          "bc1p480ca9846c7a4355813ef1156895bb"
        ],
        "amount": 10.57327587,
        "fee": 0.05277321,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0071",
      "txid": "txS002070",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002070",
      "risk_score": 86,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:54:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 16.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 16.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "65.56.206.58",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pacb5c41297934bbf8b7075db15a001"
        ],
        "output_addresses": [
          "bc1p79eb8f7185244dc0a02e957c95da38"
        ],
        "amount": 16.19159944,
        "fee": 0.069043,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0077",
      "txid": "txS002076",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002076",
      "risk_score": 86,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:55:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 13.24 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 13.24 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "164.10.122.206",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pc9cedb77fc644c20a618332520818a"
        ],
        "output_addresses": [
          "bc1q953cd7343e7d4063b400410ad9f56a"
        ],
        "amount": 13.24295025,
        "fee": 0.06249389,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0124",
      "txid": "txS002123",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002123",
      "risk_score": 86,
      "confidence": 0.92,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:03:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.92",
      "why_flagged": [
        "High output value: 13.00 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 13.00 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "44.25.248.80",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q2e627b45e11047b2bf2853c2763ac2"
        ],
        "output_addresses": [
          "bc1peeea31fc1af049f782a51720a400ea"
        ],
        "amount": 12.99858964,
        "fee": 0.06197806,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0013",
      "txid": "txS002012",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002012",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:44:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 19.62 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 19.62 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "161.107.22.81",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pffcf6ba74efc497b916fb84afa6ec8"
        ],
        "output_addresses": [
          "bc1p245d2ec2402948be9060ef27c3ca0c"
        ],
        "amount": 19.61993425,
        "fee": 0.06196298,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0021",
      "txid": "txS002020",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002020",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:45:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 8.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 8.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "119.3.133.215",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qcaeab29c7cdd471789378c8c483313"
        ],
        "output_addresses": [
          "bc1p47f1d540ba5f44399cb93b76dc77bb"
        ],
        "amount": 8.7082145,
        "fee": 0.03899426,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0027",
      "txid": "txS002026",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002026",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:46:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 16.43 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 16.43 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "152.6.142.31",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qcb10a79bb16141fb89ac4f7103c8a8"
        ],
        "output_addresses": [
          "bc1qa417f6a5d9aa4571afe412e1a55c5a"
        ],
        "amount": 16.42778784,
        "fee": 0.02424303,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0029",
      "txid": "txS002028",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002028",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:47:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 17.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 17.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "44.41.149.104",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p668df470c788434aa6cdea1c88446c"
        ],
        "output_addresses": [
          "bc1q5d24284dc4ab48708a1f48c86bca64"
        ],
        "amount": 17.02411476,
        "fee": 0.06116106,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0043",
      "txid": "txS002042",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002042",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:49:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 18.10 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 18.10 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "12.123.181.106",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q5cfb76a6508f42a68bcad09752b4ca"
        ],
        "output_addresses": [
          "bc1q9229c6660d0a4703884b90c6d062a8"
        ],
        "amount": 18.09902193,
        "fee": 0.03354868,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0049",
      "txid": "txS002048",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002048",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:50:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 8.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 8.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "173.116.152.6",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p5a64f717b52242e497b012c273a7ec"
        ],
        "output_addresses": [
          "bc1p76f04aa2fc89442b85497d613f14a0"
        ],
        "amount": 8.6493484,
        "fee": 0.00937492,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0053",
      "txid": "txS002052",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002052",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:51:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 14.61 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 14.61 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "72.114.55.120",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qa3fe778cbb184eb09dbda59a61d12f"
        ],
        "output_addresses": [
          "bc1q736df679a1aa43bb812589ec2ed677"
        ],
        "amount": 14.61385222,
        "fee": 0.06692383,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0054",
      "txid": "txS002053",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002053",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:51:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 13.36 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 13.36 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "73.254.53.80",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pb1425dd23ba14264b186844d63cabb"
        ],
        "output_addresses": [
          "bc1q37a0577f429148989517e5b1786b3b"
        ],
        "amount": 13.36109308,
        "fee": 0.01686221,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0088",
      "txid": "txS002087",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002087",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:57:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 6.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 6.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "59.120.66.206",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q6ddb8fa2a50c43129b4b28ffb21287"
        ],
        "output_addresses": [
          "bc1q48f7a97380dd4f278b6cda13d3666c"
        ],
        "amount": 6.18749272,
        "fee": 0.02985746,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0091",
      "txid": "txS002090",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002090",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:57:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 19.34 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 19.34 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "103.203.93.126",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pad886103697640e9b7aa99e8b36795"
        ],
        "output_addresses": [
          "bc1q760965d2d73a4e5bac3ac002864661"
        ],
        "amount": 19.33920741,
        "fee": 0.06091308,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0095",
      "txid": "txS002094",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002094",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:58:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 13.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 13.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "75.235.238.23",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pe799da00827e4c8a9d63b87ae0240f"
        ],
        "output_addresses": [
          "bc1pd3d7d9939c374d4a98aa9974c4be97"
        ],
        "amount": 13.79753693,
        "fee": 0.01491558,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0099",
      "txid": "txS002098",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002098",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:58:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 10.96 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 10.96 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "193.191.155.142",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qb404e460e8844c3ab489a7e00f6930"
        ],
        "output_addresses": [
          "bc1qa8ed995a141a4dfe8a04e6a9d1e058"
        ],
        "amount": 10.95957484,
        "fee": 0.05352292,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0104",
      "txid": "txS002103",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002103",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:59:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 19.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 19.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "154.209.146.112",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q832940e43a1f4eaaad925d519d062f"
        ],
        "output_addresses": [
          "bc1qc6779ceb624a49daba5012444c2e84"
        ],
        "amount": 19.19414206,
        "fee": 0.05356321,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0129",
      "txid": "txS002128",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002128",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:03:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 8.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 8.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "164.114.81.142",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qbfb8048cb6864c69abd2b14f591ef9"
        ],
        "output_addresses": [
          "bc1pb2f7e7807110415294de3339d9a142"
        ],
        "amount": 8.68621539,
        "fee": 0.03891725,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0130",
      "txid": "txS002129",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002129",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:04:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 10.93 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 10.93 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "21.165.43.213",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qf4e5866e1e724db7b7ddb5f89acc4c"
        ],
        "output_addresses": [
          "bc1qcf9eedb4c2d146038d7248657b4a44"
        ],
        "amount": 10.9303312,
        "fee": 0.01128811,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0131",
      "txid": "txS002130",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002130",
      "risk_score": 86,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:04:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 86/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 12.05 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 12.05 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "148.128.83.1",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p68dabe3866974f5b8e3e2ecb61acf1"
        ],
        "output_addresses": [
          "bc1p74cc55c2848c4e849662f0b856ca8b"
        ],
        "amount": 12.04656098,
        "fee": 0.01252026,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0005",
      "txid": "txS002004",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002004",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:43:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 16.79 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 16.79 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "68.55.206.147",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qa3a453361c6c479bacf5b1974fd9dc"
        ],
        "output_addresses": [
          "bc1pf2f3a706fcaa4938b640da733886b1"
        ],
        "amount": 16.78981265,
        "fee": 0.06355771,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0006",
      "txid": "txS002005",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002005",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:43:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 9.55 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 9.55 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "141.1.127.7",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q6c3249c96911413db917016563333f"
        ],
        "output_addresses": [
          "bc1q396d202ae08149a6aa8a23891c8ffb"
        ],
        "amount": 9.54969904,
        "fee": 0.04708544,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0007",
      "txid": "txS002006",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002006",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:43:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 18.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 18.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "52.223.112.229",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q4e1048ecf5324878a4928298a61deb"
        ],
        "output_addresses": [
          "bc1p046f2e642c6f4786bfaf7268e17248"
        ],
        "amount": 18.64024926,
        "fee": 0.03850882,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0040",
      "txid": "txS002039",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002039",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:49:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 13.98 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 13.98 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "233.229.94.192",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qb3437cd859da4e4eae53ea0e5a8f59"
        ],
        "output_addresses": [
          "bc1p3a791543babc465d9c8110030924a9"
        ],
        "amount": 13.97556576,
        "fee": 0.0634343,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0048",
      "txid": "txS002047",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002047",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:50:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 19.08 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 19.08 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "196.23.8.61",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pd3a1ba14d40e44c9b8e6b21e76513f"
        ],
        "output_addresses": [
          "bc1pd5c2da43ed1441ccabc92b0b231248"
        ],
        "amount": 19.07978397,
        "fee": 0.05508933,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0055",
      "txid": "txS002054",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002054",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:51:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 6.96 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 6.96 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "210.214.228.221",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q9a9a28f566004b04b0093922098eac"
        ],
        "output_addresses": [
          "bc1q69d99965f8e748da8097d9991db35a"
        ],
        "amount": 6.96241631,
        "fee": 0.00921344,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0112",
      "txid": "txS002111",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002111",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:01:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 16.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 16.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "208.243.203.223",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q23ba69890d2341968546deda6dda21"
        ],
        "output_addresses": [
          "bc1qf0a347fcc5574e40945c2a85671045"
        ],
        "amount": 16.52631558,
        "fee": 0.0643319,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0128",
      "txid": "txS002127",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002127",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:03:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 10.45 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 10.45 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "81.162.73.109",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qa4dd8917fc274e1e9fcd9b90977771"
        ],
        "output_addresses": [
          "bc1pcc235aab0bf942968d5d69672382ba"
        ],
        "amount": 10.45361013,
        "fee": 0.01307181,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0150",
      "txid": "txS002149",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002149",
      "risk_score": 85,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:07:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 85/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 5.17 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 5.17 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "174.53.230.78",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qb8e003fa3c4840f2993709f4d91945"
        ],
        "output_addresses": [
          "bc1q986a7e136a304cdab7a4187c933890"
        ],
        "amount": 5.17082889,
        "fee": 0.02541279,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0022",
      "txid": "txS002021",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002021",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:46:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 7.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 7.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "30.192.151.100",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q4cfd749aebe3418db75bde3ab27813"
        ],
        "output_addresses": [
          "bc1pbd121845b75d44acb7dbd280f990da"
        ],
        "amount": 7.22361085,
        "fee": 0.03112419,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0024",
      "txid": "txS002023",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002023",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:46:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 7.47 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 7.47 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "57.147.108.110",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q65153d89cb62492bb74bc582c0d5d1"
        ],
        "output_addresses": [
          "bc1q196d5d9762e442d8ac6ef684cb7942"
        ],
        "amount": 7.46938935,
        "fee": 0.01494347,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0063",
      "txid": "txS002062",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002062",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:52:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 9.36 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 9.36 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "55.205.26.118",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p68800332d6ac4b51a5ae978cffbb57"
        ],
        "output_addresses": [
          "bc1p3522e716e8664f8eb86b02f481b42a"
        ],
        "amount": 9.36284135,
        "fee": 0.01303991,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0072",
      "txid": "txS002071",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002071",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:54:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 15.85 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 15.85 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "71.14.160.78",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q58a40e132210433db15c69112bd962"
        ],
        "output_addresses": [
          "bc1q4207bae0e52846ecbca8a9a6434a9d"
        ],
        "amount": 15.85345019,
        "fee": 0.05928916,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0074",
      "txid": "txS002073",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002073",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:54:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 9.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 9.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "139.22.17.202",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pd174aa9e33a444699a34806b4b3fb1"
        ],
        "output_addresses": [
          "bc1q112e961d19284bdf9a27d6c6745856"
        ],
        "amount": 9.6357094,
        "fee": 0.01233075,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0083",
      "txid": "txS002082",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002082",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:56:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 10.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 10.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "200.225.45.153",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p50e38f3b6dfd4d0e818a52f245eca1"
        ],
        "output_addresses": [
          "bc1pe889a24cb991435688a53d597bed80"
        ],
        "amount": 10.22429786,
        "fee": 0.01323495,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0094",
      "txid": "txS002093",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002093",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:58:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 7.70 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 7.70 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "42.211.213.42",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p6321375ac6274ddead244320022395"
        ],
        "output_addresses": [
          "bc1p88776755271e402380fdd8c07a1be6"
        ],
        "amount": 7.69832964,
        "fee": 0.02661835,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0097",
      "txid": "txS002096",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002096",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:58:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 9.09 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 9.09 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "234.87.83.232",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qf845d9c519bb4fb5ad2e5181c13468"
        ],
        "output_addresses": [
          "bc1pb7d59ca9bd624a0389fdee329fccc9"
        ],
        "amount": 9.09073805,
        "fee": 0.03891987,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0106",
      "txid": "txS002105",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002105",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:00:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 5.41 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 5.41 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "46.13.93.249",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p83639e1f05ce4b35b0a45af73b284f"
        ],
        "output_addresses": [
          "bc1qd5d21fae1a28449b81204dbdc5c1ac"
        ],
        "amount": 5.40837008,
        "fee": 0.0223424,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0121",
      "txid": "txS002120",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002120",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:02:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 7.58 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 7.58 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "77.38.233.147",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p10e2bf4bcfcc4d7f9ff032f435e327"
        ],
        "output_addresses": [
          "bc1pa87f3e8dcb314c799154bec3af776b"
        ],
        "amount": 7.57575904,
        "fee": 0.02647153,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0123",
      "txid": "txS002122",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002122",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:02:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 15.83 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 15.83 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "118.158.207.170",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p032b5d9f708d46caa4cb1514a249b3"
        ],
        "output_addresses": [
          "bc1qccc0beb28d9d4feb8ef05b3651d563"
        ],
        "amount": 15.83200384,
        "fee": 0.06168498,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0149",
      "txid": "txS002148",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002148",
      "risk_score": 84,
      "confidence": 0.91,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:07:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.91",
      "why_flagged": [
        "High output value: 8.13 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 8.13 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "108.168.57.128",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p8df809c4318e436e954980311f61de"
        ],
        "output_addresses": [
          "bc1p422a59e7e544405492ede4625fdf77"
        ],
        "amount": 8.12572073,
        "fee": 0.01786184,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0015",
      "txid": "txS002014",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002014",
      "risk_score": 84,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:44:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 5.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 5.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "238.142.168.64",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p6203a0f7430443b68b2ac169b8b478"
        ],
        "output_addresses": [
          "bc1q3da00a9787ea49ff814834e365b3aa"
        ],
        "amount": 5.0154701,
        "fee": 0.01398104,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0042",
      "txid": "txS002041",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002041",
      "risk_score": 84,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:49:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 6.40 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 6.40 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "18.159.231.156",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p2561fbd4a7b540b5870c36014727ee"
        ],
        "output_addresses": [
          "bc1qc6e98ce8f5f54f69b6bfdd79424e9e"
        ],
        "amount": 6.40430481,
        "fee": 0.01602283,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0051",
      "txid": "txS002050",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002050",
      "risk_score": 84,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:50:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 15.07 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 15.07 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "156.161.255.151",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pbd93022d5ff1481cb4a57ab4402cd3"
        ],
        "output_addresses": [
          "bc1q704e244f3fd441e29483dd36c30ba8"
        ],
        "amount": 15.06783565,
        "fee": 0.0243631,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0137",
      "txid": "txS002136",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002136",
      "risk_score": 84,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:05:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 10.17 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 10.17 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "160.207.169.238",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p8c411e714d094e288aa5869d920cb8"
        ],
        "output_addresses": [
          "bc1qdcb2f5be8beb49bbbb7481955f7693"
        ],
        "amount": 10.17472156,
        "fee": 0.04375637,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0139",
      "txid": "txS002138",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002138",
      "risk_score": 84,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:05:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 84/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 17.85 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 17.85 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "139.226.56.88",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p89a45b5ed0d944298ee0673fcde608"
        ],
        "output_addresses": [
          "bc1pd2eccce86f4940188bdcd3c96f9724"
        ],
        "amount": 17.85190184,
        "fee": 0.04171686,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0039",
      "txid": "txS002038",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002038",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:48:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 13.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 13.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "122.143.75.151",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q03f7d8c93a14494db0978c0145921d"
        ],
        "output_addresses": [
          "bc1pad0ff88656ef40e096f34950fc6043"
        ],
        "amount": 13.80048677,
        "fee": 0.05598386,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0047",
      "txid": "txS002046",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002046",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:50:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 8.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 8.19 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "174.248.184.147",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q597da264b87245d5a673361fe7c4b5"
        ],
        "output_addresses": [
          "bc1qa71eca63dc074a88bc729bc87aa667"
        ],
        "amount": 8.18528489,
        "fee": 0.02965356,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0064",
      "txid": "txS002063",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002063",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:53:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 16.66 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 16.66 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "3.76.241.231",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q6c22381586ab4192bb2b23043013b8"
        ],
        "output_addresses": [
          "bc1pe2bb316003724096ba8fa8fa5af0ac"
        ],
        "amount": 16.65581926,
        "fee": 0.03511254,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0069",
      "txid": "txS002068",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002068",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:53:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 14.79 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 14.79 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "45.109.185.45",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pf02196b783ca4beb966dc7ddf04c43"
        ],
        "output_addresses": [
          "bc1q47c9854ef3d442158e99ea4ed98373"
        ],
        "amount": 14.79094155,
        "fee": 0.06107474,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0082",
      "txid": "txS002081",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002081",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:56:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 15.48 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 15.48 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "236.100.42.233",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pd0eef4ad0ba14975aa62f8d22f7aff"
        ],
        "output_addresses": [
          "bc1p05a59ecaf91c4b91aed3f666002f00"
        ],
        "amount": 15.48216853,
        "fee": 0.02744689,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0093",
      "txid": "txS002092",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002092",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:57:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 6.41 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 6.41 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "104.23.194.114",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q4ad3c25125cd4ce8be677871a84241"
        ],
        "output_addresses": [
          "bc1qbb1de62d273f4fd1b609959deaef35"
        ],
        "amount": 6.40995173,
        "fee": 0.01313885,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0098",
      "txid": "txS002097",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002097",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:58:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 8.94 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 8.94 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "5.70.252.26",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pb72f1a81c26643e3b8e919a37f16ad"
        ],
        "output_addresses": [
          "bc1pb781bfdba1344415be6929b6b5b0b6"
        ],
        "amount": 8.93774336,
        "fee": 0.0196256,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0119",
      "txid": "txS002118",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002118",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:02:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 8.59 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 8.59 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "237.8.253.123",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qace154a680e040a6a6b3bd4beb08dc"
        ],
        "output_addresses": [
          "bc1qaa5a18a9eef442beab4f99f642f0a9"
        ],
        "amount": 8.5870227,
        "fee": 0.01603108,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0122",
      "txid": "txS002121",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002121",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:02:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 6.25 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 6.25 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "196.204.71.117",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p9194761b27a44ea08180efee2624b1"
        ],
        "output_addresses": [
          "bc1q86ec0fa01e004899b84dbf47103a6e"
        ],
        "amount": 6.24696867,
        "fee": 0.01066942,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0125",
      "txid": "txS002124",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002124",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:03:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 14.15 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 14.15 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "112.85.166.247",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q7e0e38e26191465d980c41ed8209fc"
        ],
        "output_addresses": [
          "bc1p35b5e26374ce4b4c84103ae23fb849"
        ],
        "amount": 14.15324514,
        "fee": 0.02300645,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0132",
      "txid": "txS002131",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002131",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:04:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 9.67 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 9.67 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "108.136.193.224",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q9dfcd2cead6840358f89579faf3a70"
        ],
        "output_addresses": [
          "bc1q8e1f61b3fa0d489c95f58a4570e4ef"
        ],
        "amount": 9.66757125,
        "fee": 0.01700713,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0148",
      "txid": "txS002147",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002147",
      "risk_score": 83,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:07:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 83/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 5.33 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 5.33 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "164.193.236.200",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pf17da5c1c10d4706b6320a9610e79e"
        ],
        "output_addresses": [
          "bc1pe946bcb5fcb042b5948e8c6d5c6645"
        ],
        "amount": 5.32695647,
        "fee": 0.00756912,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0003",
      "txid": "txS002002",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002002",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:42:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 10.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 10.64 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "241.167.175.198",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p616c4de74f9c494aa1e48e62c573d0"
        ],
        "output_addresses": [
          "bc1p6e314bc3f84f403698fdad20a95603"
        ],
        "amount": 10.6404192,
        "fee": 0.04015349,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0016",
      "txid": "txS002015",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002015",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:45:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 16.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 16.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "75.68.58.216",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pf582e85bbc6d4063bdb69071461b28"
        ],
        "output_addresses": [
          "bc1q92efbc4f90c947bdb28a7d34de7a17"
        ],
        "amount": 16.90649947,
        "fee": 0.05004297,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0017",
      "txid": "txS002016",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002016",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:45:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 9.40 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 9.40 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "84.223.74.235",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q7791559415d84ce1baf5c169a11174"
        ],
        "output_addresses": [
          "bc1qdca14391fbb849de886b185ca0e048"
        ],
        "amount": 9.39877921,
        "fee": 0.02110612,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0030",
      "txid": "txS002029",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002029",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:47:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 6.44 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 6.44 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "158.214.196.49",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qc81df9f6aca144feaa3e78f206e79d"
        ],
        "output_addresses": [
          "bc1p50e34901f1a34d558b4ac7babcfc7c"
        ],
        "amount": 6.44125161,
        "fee": 0.01995603,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0044",
      "txid": "txS002043",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002043",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:49:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 16.46 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 16.46 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "250.90.92.105",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q8f08eec088744016b48c6f6eda5498"
        ],
        "output_addresses": [
          "bc1qe32b7605d6eb4c7bb342ecb3bbef26"
        ],
        "amount": 16.46141003,
        "fee": 0.03799388,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0090",
      "txid": "txS002089",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002089",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:57:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 14.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 14.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "43.102.42.99",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p9dd4b3125c184aa7909600b0c55026"
        ],
        "output_addresses": [
          "bc1p0d2472ad722c4a339ceca9639042e6"
        ],
        "amount": 14.79897021,
        "fee": 0.05818812,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0100",
      "txid": "txS002099",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002099",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:59:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 5.46 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 5.46 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "181.165.233.34",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pc470457f522444c5935404d87462ad"
        ],
        "output_addresses": [
          "bc1p408df8fefff848998bbca9610ff1c0"
        ],
        "amount": 5.45560152,
        "fee": 0.01816939,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0101",
      "txid": "txS002100",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002100",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:59:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 11.83 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 11.83 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "75.32.100.159",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qba28149b40d14f13a186940954cd5e"
        ],
        "output_addresses": [
          "bc1qa087488c04ef4f938c18629ff525a5"
        ],
        "amount": 11.83307366,
        "fee": 0.04809865,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0108",
      "txid": "txS002107",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002107",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:00:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 9.18 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 9.18 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "176.80.76.148",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qd8910770f2114639842135c06f954f"
        ],
        "output_addresses": [
          "bc1p4b04a07a9f0d40caad87c2661d4777"
        ],
        "amount": 9.17655914,
        "fee": 0.02595137,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0135",
      "txid": "txS002134",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002134",
      "risk_score": 82,
      "confidence": 0.9,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:04:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 82/100 and confidence 0.9",
      "why_flagged": [
        "High output value: 9.44 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 9.44 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "123.137.158.215",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qc7cb066d2982439abf876ab10e5e94"
        ],
        "output_addresses": [
          "bc1p51cd4a180d1b4a4a8dfa24c869a140"
        ],
        "amount": 9.44476928,
        "fee": 0.01934991,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0010",
      "txid": "txS002009",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002009",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:44:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.27 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 11.27 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "30.41.91.88",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p826ae75ecf64448990d6d4c747ef92"
        ],
        "output_addresses": [
          "bc1pac2a83d8e5d14fb1a8db944ffb1fa8"
        ],
        "amount": 11.27228773,
        "fee": 0.02523208,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0036",
      "txid": "txS002035",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002035",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:48:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 15.72 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 15.72 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "195.246.219.96",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q8cd348d31bee4423a44890c36fabe2"
        ],
        "output_addresses": [
          "bc1p08de616b9850474ca77d610e760abb"
        ],
        "amount": 15.72076486,
        "fee": 0.05484488,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0061",
      "txid": "txS002060",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002060",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:52:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.38 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 11.38 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "49.5.55.5",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q86e5dae973af4c4d8d54d4c8ff4f1f"
        ],
        "output_addresses": [
          "bc1pdc6c0009104b44368d38d4b546384b"
        ],
        "amount": 11.37801519,
        "fee": 0.04591732,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0110",
      "txid": "txS002109",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002109",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:00:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 10.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 10.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "56.194.45.144",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p1c682127cca34592bf4e24a14e0fe7"
        ],
        "output_addresses": [
          "bc1q7a5da30d512941478f06741e8c5ba8"
        ],
        "amount": 10.68513403,
        "fee": 0.0379819,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0111",
      "txid": "txS002110",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002110",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:00:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.63 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 11.63 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "197.162.55.252",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qbba5bb9db23f4ac3a6adb24ec2ff3c"
        ],
        "output_addresses": [
          "bc1q4722518034144b7dacd3d3405972ef"
        ],
        "amount": 11.63361347,
        "fee": 0.02177237,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0117",
      "txid": "txS002116",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002116",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:01:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.92 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 11.92 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "231.249.213.210",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p4de4bea8ff894c9fb2583a470d2eea"
        ],
        "output_addresses": [
          "bc1q0b1b9e5782a648c18c2157d0f7b732"
        ],
        "amount": 11.91520165,
        "fee": 0.04130242,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0118",
      "txid": "txS002117",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002117",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:02:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 6.09 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 6.09 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "86.195.87.158",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p9ce2f82a22864cb5b1aba2891dc79c"
        ],
        "output_addresses": [
          "bc1q4e5b364adca847de90080fe3b54fec"
        ],
        "amount": 6.0896954,
        "fee": 0.01921166,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0133",
      "txid": "txS002132",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002132",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:04:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 11.02 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "62.219.75.199",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q6490e78dc5c24086b6644d2a47f098"
        ],
        "output_addresses": [
          "bc1p086f9920d1a84ad788baad62ebd47c"
        ],
        "amount": 11.02209861,
        "fee": 0.038889,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0144",
      "txid": "txS002143",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002143",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:06:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 8.37 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 8.37 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "208.185.235.213",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qc6f7190549d5431eba3f2be99d3bd5"
        ],
        "output_addresses": [
          "bc1q7253f68e8bb340b5ac387320629ed6"
        ],
        "amount": 8.37004827,
        "fee": 0.02698678,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0145",
      "txid": "txS002144",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002144",
      "risk_score": 81,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:06:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 81/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 9.87 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 9.87 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "254.96.210.112",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q285833b8a8ca4a819ac60c53bb54c0"
        ],
        "output_addresses": [
          "bc1q2fcdb5fafbce4b6894a78104fdf71d"
        ],
        "amount": 9.87052945,
        "fee": 0.0357997,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0020",
      "txid": "txS002019",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002019",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:45:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 15.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 15.65 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "235.9.105.167",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q36a4427e481f469aac60498ea5405b"
        ],
        "output_addresses": [
          "bc1p61b63a5ef03347b0a93c3bd75cd64b"
        ],
        "amount": 15.65221841,
        "fee": 0.03759024,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0023",
      "txid": "txS002022",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002022",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:46:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 13.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 13.69 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "240.141.135.113",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p7c6d2f7830d846728c281274e364ee"
        ],
        "output_addresses": [
          "bc1qcd26bc2a7a964604992abe0f2cf701"
        ],
        "amount": 13.69440596,
        "fee": 0.04759594,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0028",
      "txid": "txS002027",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002027",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:47:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 14.57 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 14.57 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "209.207.178.8",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q1362fe74bed6474b90014406d13700"
        ],
        "output_addresses": [
          "bc1qd1371633ec8846a1a251e5a722024e"
        ],
        "amount": 14.56950323,
        "fee": 0.0280054,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0031",
      "txid": "txS002030",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002030",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:47:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 13.70 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 13.70 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "0.239.147.61",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qc1c5668c2eec424b95c23126613490"
        ],
        "output_addresses": [
          "bc1pfe215294193a42169e068d39b50705"
        ],
        "amount": 13.70167132,
        "fee": 0.0380733,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0062",
      "txid": "txS002061",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002061",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:52:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.47 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 11.47 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "212.124.221.15",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pf19fb5b1322b41feaf2023550efc45"
        ],
        "output_addresses": [
          "bc1p1bcfe6b17cce46fc8e6bbc802e4c1c"
        ],
        "amount": 11.47331138,
        "fee": 0.03996514,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0065",
      "txid": "txS002064",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002064",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:53:19.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 12.75 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 12.75 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "35.172.125.133",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q37d1da5d174c4af89f95e626cc720e"
        ],
        "output_addresses": [
          "bc1p98e50f08dfa74d81885248824119e3"
        ],
        "amount": 12.74617646,
        "fee": 0.04590546,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0079",
      "txid": "txS002078",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002078",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:55:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 12.82 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 12.82 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "244.183.254.158",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p9dee0fc7b9734d098096bbd2104dde"
        ],
        "output_addresses": [
          "bc1p40456d7505f7403b9387a6c94620c6"
        ],
        "amount": 12.81536182,
        "fee": 0.02821694,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0087",
      "txid": "txS002086",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002086",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T20:56:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 7.52 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 7.52 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "186.97.30.182",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q2aadeb21090146f4ac0f9cf341f4d2"
        ],
        "output_addresses": [
          "bc1q7427d9b8fc534e74bbc014a3995aac"
        ],
        "amount": 7.52159597,
        "fee": 0.02414506,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0114",
      "txid": "txS002113",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002113",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:01:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 12.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 12.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "202.212.193.120",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q03051431c3044ac1ba02bf2c09dad3"
        ],
        "output_addresses": [
          "bc1q81c580760f9d486abdafbee5fa7331"
        ],
        "amount": 12.70888185,
        "fee": 0.0455762,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0134",
      "txid": "txS002133",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002133",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:04:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 7.86 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 7.86 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "10.73.252.150",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p2ba6ddb625ff4a21a7ba2a4f32536a"
        ],
        "output_addresses": [
          "bc1qc78e1ee7b06946d2a8bc974554ba46"
        ],
        "amount": 7.85852986,
        "fee": 0.02369675,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0141",
      "txid": "txS002140",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002140",
      "risk_score": 80,
      "confidence": 0.89,
      "severity": "CRITICAL",
      "timestamp": "2026-09-06T21:05:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 80/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 12.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 12.91 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "162.250.30.181",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p6710474a3eab4e9bbf3acb80a6309b"
        ],
        "output_addresses": [
          "bc1qaab7a5d296504228896b84dcbda96d"
        ],
        "amount": 12.9115207,
        "fee": 0.03499644,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0004",
      "txid": "txS002003",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002003",
      "risk_score": 79,
      "confidence": 0.89,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:43:09.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 11.76 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "evidence": [
        "High output value: 11.76 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: JP (ASN 25133)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "243.96.90.84",
        "src_port": 80,
        "dst_port": 8332,
        "country": "JP",
        "asn": 25133
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qbc37fc157a33468bb035a380c0337b"
        ],
        "output_addresses": [
          "bc1p325d7064025f4f4eae31c39cea1248"
        ],
        "amount": 11.75900353,
        "fee": 0.03297754,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0032",
      "txid": "txS002031",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002031",
      "risk_score": 79,
      "confidence": 0.89,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:47:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 13.66 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 13.66 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "34.190.129.244",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q69440b86a5424448a5ea16b6756fe4"
        ],
        "output_addresses": [
          "bc1q6c20f09f507d44b89083ea339f3a1f"
        ],
        "amount": 13.66403785,
        "fee": 0.03829474,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0050",
      "txid": "txS002049",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002049",
      "risk_score": 79,
      "confidence": 0.89,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:50:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 12.01 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 12.01 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "210.231.71.64",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q7e624a17e9eb4de1a055736d4b7784"
        ],
        "output_addresses": [
          "bc1q3a527f2045c24ae4a9b2f6cb746832"
        ],
        "amount": 12.00530381,
        "fee": 0.03104794,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0103",
      "txid": "txS002102",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002102",
      "risk_score": 79,
      "confidence": 0.89,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:59:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 14.00 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 14.00 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "250.78.200.116",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q76c715e7cf384aaab87e754b9511f7"
        ],
        "output_addresses": [
          "bc1q02a162cac56a4606a38d6602214e49"
        ],
        "amount": 14.0041815,
        "fee": 0.03816942,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0105",
      "txid": "txS002104",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002104",
      "risk_score": 79,
      "confidence": 0.89,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:59:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.89",
      "why_flagged": [
        "High output value: 12.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 12.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "174.248.100.46",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p0cf849153bcb4d32b57f7d76f9d6a8"
        ],
        "output_addresses": [
          "bc1pec44be779a9949a38dc2a33b544a1f"
        ],
        "amount": 12.52893601,
        "fee": 0.03606123,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0037",
      "txid": "txS002036",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002036",
      "risk_score": 79,
      "confidence": 0.88,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:48:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.88",
      "why_flagged": [
        "High output value: 8.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 8.80 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "85.208.38.172",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p1437608569254198a6a5a52116451b"
        ],
        "output_addresses": [
          "bc1p0612a7a2c35d4e60806727e3c443d7"
        ],
        "amount": 8.7963996,
        "fee": 0.02833369,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0056",
      "txid": "txS002055",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002055",
      "risk_score": 79,
      "confidence": 0.88,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:51:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 79/100 and confidence 0.88",
      "why_flagged": [
        "High output value: 11.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 11.71 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "15.212.144.191",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p14841a59e27745c19c3470f79bd65a"
        ],
        "output_addresses": [
          "bc1qb8905cd36a9b41928968bfd2ebd80d"
        ],
        "amount": 11.70613322,
        "fee": 0.028181,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0138",
      "txid": "txS002137",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002137",
      "risk_score": 77,
      "confidence": 0.88,
      "severity": "HIGH",
      "timestamp": "2026-09-06T21:05:29.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 77/100 and confidence 0.88",
      "why_flagged": [
        "High output value: 10.59 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "evidence": [
        "High output value: 10.59 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: CN (ASN 4134)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "68.164.226.42",
        "src_port": 80,
        "dst_port": 8332,
        "country": "CN",
        "asn": 4134
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1qa79a35d8d7e34857a64d1ce4130fe9"
        ],
        "output_addresses": [
          "bc1p782716a6e6bf49059730c896acd0ba"
        ],
        "amount": 10.59108472,
        "fee": 0.03463141,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0057",
      "txid": "txS002056",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002056",
      "risk_score": 77,
      "confidence": 0.87,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:51:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 77/100 and confidence 0.87",
      "why_flagged": [
        "High output value: 10.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "evidence": [
        "High output value: 10.22 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: US (ASN 15169)"
      ],
      "network_context": {
        "src_ip": "198.51.100.23",
        "dst_ip": "197.98.95.229",
        "src_port": 80,
        "dst_port": 8332,
        "country": "US",
        "asn": 15169
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q3acda1b1ef8e487fa5a03cffeab5e0"
        ],
        "output_addresses": [
          "bc1qf604259872c147aeb10ff7172bfd45"
        ],
        "amount": 10.21736944,
        "fee": 0.03205324,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0067",
      "txid": "txS002066",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002066",
      "risk_score": 76,
      "confidence": 0.87,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:53:39.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 76/100 and confidence 0.87",
      "why_flagged": [
        "High output value: 9.67 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "evidence": [
        "High output value: 9.67 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: RU (ASN 16276)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "217.6.162.112",
        "src_port": 80,
        "dst_port": 8332,
        "country": "RU",
        "asn": 16276
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1p95509ca184b547e8a4ad0a284239e9"
        ],
        "output_addresses": [
          "bc1qd65650f9510b45b3b8920c81ec4c92"
        ],
        "amount": 9.67370052,
        "fee": 0.03071521,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0075",
      "txid": "txS002074",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002074",
      "risk_score": 76,
      "confidence": 0.87,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:54:59.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 76/100 and confidence 0.87",
      "why_flagged": [
        "High output value: 13.24 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 13.24 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "192.0.2.45",
        "dst_ip": "157.146.106.231",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1pefe68925e20b4728b7b31a059e83cc"
        ],
        "output_addresses": [
          "bc1p5e2d110f7856490f917cc42a961dfd"
        ],
        "amount": 13.24468484,
        "fee": 0.03864574,
        "script_type": "P2SH"
      }
    },
    {
      "alert_id": "CS-0080",
      "txid": "txS002079",
      "entity_type": "TRANSACTION",
      "entity_id": "txS002079",
      "risk_score": 76,
      "confidence": 0.87,
      "severity": "HIGH",
      "timestamp": "2026-09-06T20:55:49.037574Z",
      "summary": "Cross-layer anomaly identified with risk score 76/100 and confidence 0.87",
      "why_flagged": [
        "High output value: 14.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "evidence": [
        "High output value: 14.53 BTC",
        "Non-standard Bitcoin node port (80)",
        "P2SH multi-signature script construct",
        "Rapid temporal burst (< 15s between events)",
        "Network origination jurisdiction: DE (ASN 3320)"
      ],
      "network_context": {
        "src_ip": "203.0.113.9",
        "dst_ip": "183.198.54.143",
        "src_port": 80,
        "dst_port": 8332,
        "country": "DE",
        "asn": 3320
      },
      "blockchain_context": {
        "input_addresses": [
          "bc1q138b70011c2646d0a5092193e5f23e"
        ],
        "output_addresses": [
          "bc1q2f091b76bd8744449c5b8a1e9189a2"
        ],
        "amount": 14.52554137,
        "fee": 0.04899243,
        "script_type": "P2SH"
      }
    }
  ],
  "transactions": [
    {
      "timestamp": "2026-09-06T20:48:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "232.114.1.25",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002033",
      "input_addresses": [
        "bc1q9cbe1c1eb68849d1990de06e03f213"
      ],
      "output_addresses": [
        "bc1pdcc029d34a6847ae81c7fe0f973316"
      ],
      "input_amounts": 24.2396668,
      "output_amounts": 24.1310138,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.108653,
      "script_type": "P2SH",
      "risk_score": 99,
      "confidence": 0.97
    },
    {
      "timestamp": "2026-09-06T20:46:49.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "68.122.5.131",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002025",
      "input_addresses": [
        "bc1pa5db9d65f7f5411cbc3f69273b2059"
      ],
      "output_addresses": [
        "bc1pe5a7fa926c6a4b47ae60960caccefd"
      ],
      "input_amounts": 24.71991241,
      "output_amounts": 24.62521798,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.09469443,
      "script_type": "P2SH",
      "risk_score": 98,
      "confidence": 0.97
    },
    {
      "timestamp": "2026-09-06T20:43:59.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "127.106.104.11",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002008",
      "input_addresses": [
        "bc1q8880c24a5fb04a9cbe8a4eac63f33a"
      ],
      "output_addresses": [
        "bc1p2080c63725a644c6ae5bcaeff4b7bb"
      ],
      "input_amounts": 20.95735535,
      "output_amounts": 20.86080209,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.09655326,
      "script_type": "P2SH",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T20:44:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "136.118.142.79",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002011",
      "input_addresses": [
        "bc1q645acea907144d5a8d84f290b58843"
      ],
      "output_addresses": [
        "bc1p80781a2c4a11459e9019349fd4c2ba"
      ],
      "input_amounts": 23.7566746,
      "output_amounts": 23.66205218,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.09462242,
      "script_type": "P2SH",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T20:45:39.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "19.8.216.124",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002018",
      "input_addresses": [
        "bc1p3379b7c4ac534f3293a1d70b0b538e"
      ],
      "output_addresses": [
        "bc1pb52b08c1040d4d55923b08e35e0c27"
      ],
      "input_amounts": 24.61330425,
      "output_amounts": 24.52976122,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.08354303,
      "script_type": "P2SH",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T20:51:09.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "157.116.230.21",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002051",
      "input_addresses": [
        "bc1q2dbd91af403f4d4fbd01aa7ca2e08a"
      ],
      "output_addresses": [
        "bc1pc569655a07fa4bbea6ddc1d2ca1262"
      ],
      "input_amounts": 22.50986292,
      "output_amounts": 22.41541973,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.09444319,
      "script_type": "P2SH",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T21:00:39.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "172.176.244.68",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002108",
      "input_addresses": [
        "bc1q49913be9c1b44607b979c24aa43c38"
      ],
      "output_addresses": [
        "bc1p93088bd708ef48cbadbcc17fea2b19"
      ],
      "input_amounts": 22.00914564,
      "output_amounts": 21.9162628,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.09288284,
      "script_type": "P2SH",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T21:03:39.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "244.83.229.196",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002126",
      "input_addresses": [
        "bc1p698e931d13a24cf8857d189177440b"
      ],
      "output_addresses": [
        "bc1p8de546dd22d247acb4eed7727cd32f"
      ],
      "input_amounts": 23.99776844,
      "output_amounts": 23.90974385,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.08802459,
      "script_type": "P2SH",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T20:43:49.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "75.27.177.247",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002007",
      "input_addresses": [
        "bc1q3460c60429194d68869520ba315ab7"
      ],
      "output_addresses": [
        "bc1p424b8b716b2a4fb1b0c4afc486ced6"
      ],
      "input_amounts": 23.3487135,
      "output_amounts": 23.26375251,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.08496099,
      "script_type": "P2SH",
      "risk_score": 96,
      "confidence": 0.96
    },
    {
      "timestamp": "2026-09-06T20:54:39.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "117.62.216.2",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002072",
      "input_addresses": [
        "bc1p70475613c16547cf9a44877fad031f"
      ],
      "output_addresses": [
        "bc1qafed75d4a88b4bc6873a4faa1c2afd"
      ],
      "input_amounts": 19.15678133,
      "output_amounts": 19.07006672,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.08671461,
      "script_type": "P2SH",
      "risk_score": 95,
      "confidence": 0.95
    },
    {
      "timestamp": "2026-09-06T20:49:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "164.221.247.132",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002040",
      "input_addresses": [
        "bc1p5caad78fec384433b238d2b24cc66c"
      ],
      "output_addresses": [
        "bc1q13750780306a4fd9bff9d86fdb547f"
      ],
      "input_amounts": 21.76240239,
      "output_amounts": 21.68112708,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.08127531,
      "script_type": "P2SH",
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "timestamp": "2026-09-06T20:50:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "210.208.121.220",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002045",
      "input_addresses": [
        "bc1q938a8525c56e4801b2ba96012799bf"
      ],
      "output_addresses": [
        "bc1pd969397382504df78ac2a95e71e458"
      ],
      "input_amounts": 17.11150838,
      "output_amounts": 17.026516,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.08499238,
      "script_type": "P2SH",
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "timestamp": "2026-09-06T20:55:09.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "201.31.160.44",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002075",
      "input_addresses": [
        "bc1qf0bfd47f979a4b56b267114249025d"
      ],
      "output_addresses": [
        "bc1q80dc21da289b4cbe9752de8eb2f5f5"
      ],
      "input_amounts": 21.31006299,
      "output_amounts": 21.22516247,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.08490052,
      "script_type": "P2SH",
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "timestamp": "2026-09-06T20:55:59.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "89.235.120.27",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002080",
      "input_addresses": [
        "bc1qdaf45cbaaf144020b9072702a30380"
      ],
      "output_addresses": [
        "bc1qfd1fc620192440be9c5c4d8c35a03a"
      ],
      "input_amounts": 23.90841416,
      "output_amounts": 23.83375259,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.07466157,
      "script_type": "P2SH",
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:57:19.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "225.97.69.220",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002088",
      "input_addresses": [
        "bc1pf1807e62a6bd4273a113fc927a37f2"
      ],
      "output_addresses": [
        "bc1qb5dac2e19981495cb5231aeaf03597"
      ],
      "input_amounts": 22.47087326,
      "output_amounts": 22.44022995,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.03064331,
      "script_type": "P2SH",
      "risk_score": 93,
      "confidence": 0.95
    },
    {
      "timestamp": "2026-09-06T21:02:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "182.164.167.208",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002119",
      "input_addresses": [
        "bc1q97842d65129c413fb2514d6bee85eb"
      ],
      "output_addresses": [
        "bc1qa2fe28897a364ab485036c18178048"
      ],
      "input_amounts": 18.79339199,
      "output_amounts": 18.71185182,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.08154017,
      "script_type": "P2SH",
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T21:06:49.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "131.211.23.133",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002145",
      "input_addresses": [
        "bc1pceb7ef62ed024148bd286e69670219"
      ],
      "output_addresses": [
        "bc1pdbdfc04f395849c0a1a21e0b1c10fc"
      ],
      "input_amounts": 22.92140295,
      "output_amounts": 22.89019387,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.03120908,
      "script_type": "P2SH",
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:47:59.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "117.195.16.144",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002032",
      "input_addresses": [
        "bc1p7a83b3435b394da39fc90c8dc6bb2e"
      ],
      "output_addresses": [
        "bc1qb92947da19904e279ab11ba95577e4"
      ],
      "input_amounts": 20.86051668,
      "output_amounts": 20.83737827,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.02313841,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:53:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "175.80.186.82",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002065",
      "input_addresses": [
        "bc1qe02b697629a44758a37d0d5de8f30c"
      ],
      "output_addresses": [
        "bc1qbf020c2532d340e5b1d3cc575880e3"
      ],
      "input_amounts": 23.63076912,
      "output_amounts": 23.57379946,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.05696966,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:53:49.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "168.62.182.6",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002067",
      "input_addresses": [
        "bc1p886f36ab55d84c19b80d9b9b768cdf"
      ],
      "output_addresses": [
        "bc1q23e2f584d6dd469e92fa1aa312f3bc"
      ],
      "input_amounts": 23.30330833,
      "output_amounts": 23.24890929,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.05439904,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:56:49.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "233.131.2.226",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002085",
      "input_addresses": [
        "bc1qc255208ab8614385af0eb2193c9de1"
      ],
      "output_addresses": [
        "bc1pf204750c9bd64f1c80754461305efb"
      ],
      "input_amounts": 23.33184655,
      "output_amounts": 23.28420138,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.04764517,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:57:49.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "55.79.212.188",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002091",
      "input_addresses": [
        "bc1q3619730dde6c47d9b4c8a5b1c77308"
      ],
      "output_addresses": [
        "bc1p45cfa001197f47c69abb161c4984d2"
      ],
      "input_amounts": 23.40414105,
      "output_amounts": 23.34371067,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.06043038,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:58:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "96.83.184.34",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002095",
      "input_addresses": [
        "bc1p8c755ce96aa94f3fb4b3e4e87d688c"
      ],
      "output_addresses": [
        "bc1pf346f7bf75434c9d9b307f09bfd8b9"
      ],
      "input_amounts": 20.71875599,
      "output_amounts": 20.6940767,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.02467929,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T21:05:09.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "101.110.19.250",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002135",
      "input_addresses": [
        "bc1pa5b19c8fa02a4ba9b274280edbce46"
      ],
      "output_addresses": [
        "bc1q58d7c1a798b34a92874ec1accb1f93"
      ],
      "input_amounts": 20.6681508,
      "output_amounts": 20.64340415,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.02474665,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T21:06:59.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "99.221.66.234",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002146",
      "input_addresses": [
        "bc1pa1a7d7521ec543eca8029084382265"
      ],
      "output_addresses": [
        "bc1p50b5641ee1464df89f80783518c989"
      ],
      "input_amounts": 23.08775858,
      "output_amounts": 23.02251831,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.06524027,
      "script_type": "P2SH",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:44:49.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "158.183.179.226",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002013",
      "input_addresses": [
        "bc1qd8ea811b53a846dca0e4e120cb0b17"
      ],
      "output_addresses": [
        "bc1pf8f61d820d5b4f4ab51647038effec"
      ],
      "input_amounts": 22.32902439,
      "output_amounts": 22.28863911,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.04038528,
      "script_type": "P2SH",
      "risk_score": 91,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:55:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "155.18.186.188",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002077",
      "input_addresses": [
        "bc1qfc10a56ea2f644dcba6d2755924b0f"
      ],
      "output_addresses": [
        "bc1pd7ca5b0ae8584430a9ef21a5f5c829"
      ],
      "input_amounts": 22.13755764,
      "output_amounts": 22.07581633,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.06174131,
      "script_type": "P2SH",
      "risk_score": 91,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:56:29.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "101.122.59.254",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002083",
      "input_addresses": [
        "bc1q41e6747b1f4b4b33bd0c1170029bd3"
      ],
      "output_addresses": [
        "bc1p5f1e4d0c64ec4213b91819e8743160"
      ],
      "input_amounts": 21.0013043,
      "output_amounts": 20.96709988,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.03420442,
      "script_type": "P2SH",
      "risk_score": 91,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T21:00:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "103.169.151.89",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002106",
      "input_addresses": [
        "bc1q772ebeca6c3d4d0e9d612a85b4e0a0"
      ],
      "output_addresses": [
        "bc1q5b9f86b90b6e4124b16fb62589d6bf"
      ],
      "input_amounts": 22.22380814,
      "output_amounts": 22.18130767,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.04250047,
      "script_type": "P2SH",
      "risk_score": 91,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T21:01:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "82.124.153.4",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002112",
      "input_addresses": [
        "bc1q42d8ca9b121447258e0cb16216863c"
      ],
      "output_addresses": [
        "bc1q7e07ba0d8b4a4da593dcc0a13c1d8e"
      ],
      "input_amounts": 23.12108359,
      "output_amounts": 23.07101512,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.05006847,
      "script_type": "P2SH",
      "risk_score": 91,
      "confidence": 0.94
    },
    {
      "timestamp": "2026-09-06T20:42:39.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "149.86.50.104",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002000",
      "input_addresses": [
        "bc1q35cff39dd5e9407d9b2e2f77e54edb"
      ],
      "output_addresses": [
        "bc1q1f9ea07ff3814dce95305f7418431b"
      ],
      "input_amounts": 13.34841604,
      "output_amounts": 13.31323577,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.03518027,
      "script_type": "P2SH",
      "risk_score": 90,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T20:45:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "214.34.238.41",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002017",
      "input_addresses": [
        "bc1pb7655e205ba24b41a2ede4faf0034f"
      ],
      "output_addresses": [
        "bc1q6ebf42c0834e46839267081fe5071e"
      ],
      "input_amounts": 18.05583528,
      "output_amounts": 17.98125394,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.07458134,
      "script_type": "P2SH",
      "risk_score": 90,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T20:52:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "42.41.213.148",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002058",
      "input_addresses": [
        "bc1q9c613ae248d6451b994e385f3c55a7"
      ],
      "output_addresses": [
        "bc1qd31c62e614804cdba22ebc7e4534f2"
      ],
      "input_amounts": 20.28664955,
      "output_amounts": 20.21645529,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.07019426,
      "script_type": "P2SH",
      "risk_score": 90,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T20:52:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "8.226.180.157",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002059",
      "input_addresses": [
        "bc1q540ab39399ce4fdba2199daf77c7a7"
      ],
      "output_addresses": [
        "bc1p2657265cb4bb43c9808ba13bf8a96e"
      ],
      "input_amounts": 22.06472914,
      "output_amounts": 22.01465681,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.05007233,
      "script_type": "P2SH",
      "risk_score": 90,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T20:56:39.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "198.33.104.79",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002084",
      "input_addresses": [
        "bc1p18de432fa39e4efc8abdbcf7faecfc"
      ],
      "output_addresses": [
        "bc1p5b994e93e3b1436889976e482bc381"
      ],
      "input_amounts": 21.75188947,
      "output_amounts": 21.71342932,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.03846015,
      "script_type": "P2SH",
      "risk_score": 90,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T21:06:09.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "130.189.12.114",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002141",
      "input_addresses": [
        "bc1pa540dd6aef1b4c64a3e4f3d80109dd"
      ],
      "output_addresses": [
        "bc1q4bd9331b25504a149f2100fb9549f7"
      ],
      "input_amounts": 16.98943043,
      "output_amounts": 16.91490555,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.07452488,
      "script_type": "P2SH",
      "risk_score": 90,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T20:48:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "125.30.112.253",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002034",
      "input_addresses": [
        "bc1pbf1ae76764f141a184a701f237b325"
      ],
      "output_addresses": [
        "bc1pab043d0e2833403dbcf5f27606189d"
      ],
      "input_amounts": 17.3632158,
      "output_amounts": 17.28997262,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.07324318,
      "script_type": "P2SH",
      "risk_score": 89,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T21:01:39.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "141.177.86.234",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002114",
      "input_addresses": [
        "bc1q9b2156a14f314911b52505314216b9"
      ],
      "output_addresses": [
        "bc1q2ffff76ed0d845df8f7be9703f17cf"
      ],
      "input_amounts": 20.62358636,
      "output_amounts": 20.58506638,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.03851998,
      "script_type": "P2SH",
      "risk_score": 89,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T21:01:49.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "7.56.89.200",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002115",
      "input_addresses": [
        "bc1pcffc67edfb694c36a92dc15e23e5ca"
      ],
      "output_addresses": [
        "bc1q200f00c5b7864b4c9909089914b33b"
      ],
      "input_amounts": 20.66832641,
      "output_amounts": 20.61266939,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.05565702,
      "script_type": "P2SH",
      "risk_score": 89,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T21:05:49.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "132.19.78.159",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002139",
      "input_addresses": [
        "bc1qa6034c50201e4b36b375def44f2924"
      ],
      "output_addresses": [
        "bc1q932d2e83e27f441b80f7af70d0517a"
      ],
      "input_amounts": 17.66306736,
      "output_amounts": 17.64537142,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.01769594,
      "script_type": "P2SH",
      "risk_score": 89,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T21:06:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "211.233.214.67",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002142",
      "input_addresses": [
        "bc1pbe0594551b59470c9fe4bef6f479c4"
      ],
      "output_addresses": [
        "bc1p7a49e4cf5c5047d285d0a4e810896c"
      ],
      "input_amounts": 21.70448594,
      "output_amounts": 21.65199314,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.0524928,
      "script_type": "P2SH",
      "risk_score": 89,
      "confidence": 0.93
    },
    {
      "timestamp": "2026-09-06T20:44:19.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "175.10.189.200",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002010",
      "input_addresses": [
        "bc1p75ee94a8c6d1492d9264f597d794f9"
      ],
      "output_addresses": [
        "bc1q884b29ee46b54532b419fbb2a82f57"
      ],
      "input_amounts": 16.92056003,
      "output_amounts": 16.84841045,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.07214958,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:46:39.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "98.33.118.6",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002024",
      "input_addresses": [
        "bc1p3fd1c4963c414081b08a61813686f5"
      ],
      "output_addresses": [
        "bc1pecfef47973964a67acaf5064d92f4b"
      ],
      "input_amounts": 19.322769,
      "output_amounts": 19.29030101,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.03246799,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:48:49.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "193.178.206.239",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002037",
      "input_addresses": [
        "bc1p2d79a93b8eea4ea9922bf7769b8436"
      ],
      "output_addresses": [
        "bc1q13d78d0965a94689aebd1950e9d577"
      ],
      "input_amounts": 18.46053064,
      "output_amounts": 18.38778206,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.07274858,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:49:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "114.47.210.91",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002044",
      "input_addresses": [
        "bc1q1071149ae475489ca2441d79697186"
      ],
      "output_addresses": [
        "bc1qfdf72c4d004242068b1619b17c585d"
      ],
      "input_amounts": 20.13116454,
      "output_amounts": 20.09199565,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.03916889,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:52:09.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "132.17.76.67",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002057",
      "input_addresses": [
        "bc1q26193ca0682a445bb1d0305f0ce3ee"
      ],
      "output_addresses": [
        "bc1p5310725010ee43559ea41c74377dd3"
      ],
      "input_amounts": 18.78965335,
      "output_amounts": 18.76217567,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.02747768,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:54:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "9.35.109.197",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002069",
      "input_addresses": [
        "bc1qf32af15430ef44bbbbb66140e95bef"
      ],
      "output_addresses": [
        "bc1qbe41dabfe8c3453eb41f11a947df7c"
      ],
      "input_amounts": 17.09796823,
      "output_amounts": 17.02762269,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.07034554,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T21:03:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "202.204.240.89",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002125",
      "input_addresses": [
        "bc1qcf742fa5fc3849dcb1ba0cd3c70242"
      ],
      "output_addresses": [
        "bc1qc2f0abd4647b4b4abfb70a5e3575cb"
      ],
      "input_amounts": 18.43345368,
      "output_amounts": 18.3629749,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.07047878,
      "script_type": "P2SH",
      "risk_score": 88,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:59:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "243.66.152.150",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002101",
      "input_addresses": [
        "bc1qc99c5dd2059442f4815578b597c1a0"
      ],
      "output_addresses": [
        "bc1q3f37d19efac14ec28550bdca3d96bb"
      ],
      "input_amounts": 14.98014548,
      "output_amounts": 14.964615,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.01553048,
      "script_type": "P2SH",
      "risk_score": 87,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:42:49.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "4.84.31.97",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002001",
      "input_addresses": [
        "bc1qa5dbd92ff34a4c17a8e3cebb243ab7"
      ],
      "output_addresses": [
        "bc1p480ca9846c7a4355813ef1156895bb"
      ],
      "input_amounts": 10.62604908,
      "output_amounts": 10.57327587,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.05277321,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:44:39.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "161.107.22.81",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002012",
      "input_addresses": [
        "bc1pffcf6ba74efc497b916fb84afa6ec8"
      ],
      "output_addresses": [
        "bc1p245d2ec2402948be9060ef27c3ca0c"
      ],
      "input_amounts": 19.68189723,
      "output_amounts": 19.61993425,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.06196298,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:45:59.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "119.3.133.215",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002020",
      "input_addresses": [
        "bc1qcaeab29c7cdd471789378c8c483313"
      ],
      "output_addresses": [
        "bc1p47f1d540ba5f44399cb93b76dc77bb"
      ],
      "input_amounts": 8.74720876,
      "output_amounts": 8.7082145,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.03899426,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:46:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "152.6.142.31",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002026",
      "input_addresses": [
        "bc1qcb10a79bb16141fb89ac4f7103c8a8"
      ],
      "output_addresses": [
        "bc1qa417f6a5d9aa4571afe412e1a55c5a"
      ],
      "input_amounts": 16.45203087,
      "output_amounts": 16.42778784,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.02424303,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:47:19.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "44.41.149.104",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002028",
      "input_addresses": [
        "bc1p668df470c788434aa6cdea1c88446c"
      ],
      "output_addresses": [
        "bc1q5d24284dc4ab48708a1f48c86bca64"
      ],
      "input_amounts": 17.08527582,
      "output_amounts": 17.02411476,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.06116106,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:49:39.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "12.123.181.106",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002042",
      "input_addresses": [
        "bc1q5cfb76a6508f42a68bcad09752b4ca"
      ],
      "output_addresses": [
        "bc1q9229c6660d0a4703884b90c6d062a8"
      ],
      "input_amounts": 18.13257061,
      "output_amounts": 18.09902193,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.03354868,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:50:39.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "173.116.152.6",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002048",
      "input_addresses": [
        "bc1p5a64f717b52242e497b012c273a7ec"
      ],
      "output_addresses": [
        "bc1p76f04aa2fc89442b85497d613f14a0"
      ],
      "input_amounts": 8.65872332,
      "output_amounts": 8.6493484,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.00937492,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:51:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "72.114.55.120",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002052",
      "input_addresses": [
        "bc1qa3fe778cbb184eb09dbda59a61d12f"
      ],
      "output_addresses": [
        "bc1q736df679a1aa43bb812589ec2ed677"
      ],
      "input_amounts": 14.68077605,
      "output_amounts": 14.61385222,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.06692383,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:51:29.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "73.254.53.80",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002053",
      "input_addresses": [
        "bc1pb1425dd23ba14264b186844d63cabb"
      ],
      "output_addresses": [
        "bc1q37a0577f429148989517e5b1786b3b"
      ],
      "input_amounts": 13.37795529,
      "output_amounts": 13.36109308,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.01686221,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:54:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "65.56.206.58",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002070",
      "input_addresses": [
        "bc1pacb5c41297934bbf8b7075db15a001"
      ],
      "output_addresses": [
        "bc1p79eb8f7185244dc0a02e957c95da38"
      ],
      "input_amounts": 16.26064244,
      "output_amounts": 16.19159944,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.069043,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:55:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "164.10.122.206",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002076",
      "input_addresses": [
        "bc1pc9cedb77fc644c20a618332520818a"
      ],
      "output_addresses": [
        "bc1q953cd7343e7d4063b400410ad9f56a"
      ],
      "input_amounts": 13.30544414,
      "output_amounts": 13.24295025,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.06249389,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T20:57:09.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "59.120.66.206",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002087",
      "input_addresses": [
        "bc1q6ddb8fa2a50c43129b4b28ffb21287"
      ],
      "output_addresses": [
        "bc1q48f7a97380dd4f278b6cda13d3666c"
      ],
      "input_amounts": 6.21735018,
      "output_amounts": 6.18749272,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.02985746,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:57:39.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "103.203.93.126",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002090",
      "input_addresses": [
        "bc1pad886103697640e9b7aa99e8b36795"
      ],
      "output_addresses": [
        "bc1q760965d2d73a4e5bac3ac002864661"
      ],
      "input_amounts": 19.40012049,
      "output_amounts": 19.33920741,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.06091308,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:58:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "75.235.238.23",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002094",
      "input_addresses": [
        "bc1pe799da00827e4c8a9d63b87ae0240f"
      ],
      "output_addresses": [
        "bc1pd3d7d9939c374d4a98aa9974c4be97"
      ],
      "input_amounts": 13.81245251,
      "output_amounts": 13.79753693,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.01491558,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:58:59.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "193.191.155.142",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002098",
      "input_addresses": [
        "bc1qb404e460e8844c3ab489a7e00f6930"
      ],
      "output_addresses": [
        "bc1qa8ed995a141a4dfe8a04e6a9d1e058"
      ],
      "input_amounts": 11.01309776,
      "output_amounts": 10.95957484,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.05352292,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:59:49.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "154.209.146.112",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002103",
      "input_addresses": [
        "bc1q832940e43a1f4eaaad925d519d062f"
      ],
      "output_addresses": [
        "bc1qc6779ceb624a49daba5012444c2e84"
      ],
      "input_amounts": 19.24770527,
      "output_amounts": 19.19414206,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.05356321,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:03:09.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "44.25.248.80",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002123",
      "input_addresses": [
        "bc1q2e627b45e11047b2bf2853c2763ac2"
      ],
      "output_addresses": [
        "bc1peeea31fc1af049f782a51720a400ea"
      ],
      "input_amounts": 13.0605677,
      "output_amounts": 12.99858964,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.06197806,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.92
    },
    {
      "timestamp": "2026-09-06T21:03:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "164.114.81.142",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002128",
      "input_addresses": [
        "bc1qbfb8048cb6864c69abd2b14f591ef9"
      ],
      "output_addresses": [
        "bc1pb2f7e7807110415294de3339d9a142"
      ],
      "input_amounts": 8.72513264,
      "output_amounts": 8.68621539,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.03891725,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:04:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "21.165.43.213",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002129",
      "input_addresses": [
        "bc1qf4e5866e1e724db7b7ddb5f89acc4c"
      ],
      "output_addresses": [
        "bc1qcf9eedb4c2d146038d7248657b4a44"
      ],
      "input_amounts": 10.94161931,
      "output_amounts": 10.9303312,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.01128811,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:04:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "148.128.83.1",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002130",
      "input_addresses": [
        "bc1p68dabe3866974f5b8e3e2ecb61acf1"
      ],
      "output_addresses": [
        "bc1p74cc55c2848c4e849662f0b856ca8b"
      ],
      "input_amounts": 12.05908124,
      "output_amounts": 12.04656098,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.01252026,
      "script_type": "P2SH",
      "risk_score": 86,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:43:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "68.55.206.147",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002004",
      "input_addresses": [
        "bc1qa3a453361c6c479bacf5b1974fd9dc"
      ],
      "output_addresses": [
        "bc1pf2f3a706fcaa4938b640da733886b1"
      ],
      "input_amounts": 16.85337036,
      "output_amounts": 16.78981265,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.06355771,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:43:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "141.1.127.7",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002005",
      "input_addresses": [
        "bc1q6c3249c96911413db917016563333f"
      ],
      "output_addresses": [
        "bc1q396d202ae08149a6aa8a23891c8ffb"
      ],
      "input_amounts": 9.59678448,
      "output_amounts": 9.54969904,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.04708544,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:43:39.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "52.223.112.229",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002006",
      "input_addresses": [
        "bc1q4e1048ecf5324878a4928298a61deb"
      ],
      "output_addresses": [
        "bc1p046f2e642c6f4786bfaf7268e17248"
      ],
      "input_amounts": 18.67875808,
      "output_amounts": 18.64024926,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.03850882,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:49:09.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "233.229.94.192",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002039",
      "input_addresses": [
        "bc1qb3437cd859da4e4eae53ea0e5a8f59"
      ],
      "output_addresses": [
        "bc1p3a791543babc465d9c8110030924a9"
      ],
      "input_amounts": 14.03900006,
      "output_amounts": 13.97556576,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.0634343,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:50:29.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "196.23.8.61",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002047",
      "input_addresses": [
        "bc1pd3a1ba14d40e44c9b8e6b21e76513f"
      ],
      "output_addresses": [
        "bc1pd5c2da43ed1441ccabc92b0b231248"
      ],
      "input_amounts": 19.1348733,
      "output_amounts": 19.07978397,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.05508933,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:51:39.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "210.214.228.221",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002054",
      "input_addresses": [
        "bc1q9a9a28f566004b04b0093922098eac"
      ],
      "output_addresses": [
        "bc1q69d99965f8e748da8097d9991db35a"
      ],
      "input_amounts": 6.97162975,
      "output_amounts": 6.96241631,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.00921344,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:01:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "208.243.203.223",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002111",
      "input_addresses": [
        "bc1q23ba69890d2341968546deda6dda21"
      ],
      "output_addresses": [
        "bc1qf0a347fcc5574e40945c2a85671045"
      ],
      "input_amounts": 16.59064748,
      "output_amounts": 16.52631558,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.0643319,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:03:49.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "81.162.73.109",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002127",
      "input_addresses": [
        "bc1qa4dd8917fc274e1e9fcd9b90977771"
      ],
      "output_addresses": [
        "bc1pcc235aab0bf942968d5d69672382ba"
      ],
      "input_amounts": 10.46668194,
      "output_amounts": 10.45361013,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.01307181,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:07:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "174.53.230.78",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002149",
      "input_addresses": [
        "bc1qb8e003fa3c4840f2993709f4d91945"
      ],
      "output_addresses": [
        "bc1q986a7e136a304cdab7a4187c933890"
      ],
      "input_amounts": 5.19624168,
      "output_amounts": 5.17082889,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.02541279,
      "script_type": "P2SH",
      "risk_score": 85,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:44:59.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "238.142.168.64",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002014",
      "input_addresses": [
        "bc1p6203a0f7430443b68b2ac169b8b478"
      ],
      "output_addresses": [
        "bc1q3da00a9787ea49ff814834e365b3aa"
      ],
      "input_amounts": 5.02945114,
      "output_amounts": 5.0154701,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.01398104,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:46:09.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "30.192.151.100",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002021",
      "input_addresses": [
        "bc1q4cfd749aebe3418db75bde3ab27813"
      ],
      "output_addresses": [
        "bc1pbd121845b75d44acb7dbd280f990da"
      ],
      "input_amounts": 7.25473504,
      "output_amounts": 7.22361085,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.03112419,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:46:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "57.147.108.110",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002023",
      "input_addresses": [
        "bc1q65153d89cb62492bb74bc582c0d5d1"
      ],
      "output_addresses": [
        "bc1q196d5d9762e442d8ac6ef684cb7942"
      ],
      "input_amounts": 7.48433282,
      "output_amounts": 7.46938935,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.01494347,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:49:29.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "18.159.231.156",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002041",
      "input_addresses": [
        "bc1p2561fbd4a7b540b5870c36014727ee"
      ],
      "output_addresses": [
        "bc1qc6e98ce8f5f54f69b6bfdd79424e9e"
      ],
      "input_amounts": 6.42032764,
      "output_amounts": 6.40430481,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.01602283,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:50:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "156.161.255.151",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002050",
      "input_addresses": [
        "bc1pbd93022d5ff1481cb4a57ab4402cd3"
      ],
      "output_addresses": [
        "bc1q704e244f3fd441e29483dd36c30ba8"
      ],
      "input_amounts": 15.09219875,
      "output_amounts": 15.06783565,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.0243631,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:52:59.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "55.205.26.118",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002062",
      "input_addresses": [
        "bc1p68800332d6ac4b51a5ae978cffbb57"
      ],
      "output_addresses": [
        "bc1p3522e716e8664f8eb86b02f481b42a"
      ],
      "input_amounts": 9.37588126,
      "output_amounts": 9.36284135,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.01303991,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:54:29.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "71.14.160.78",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002071",
      "input_addresses": [
        "bc1q58a40e132210433db15c69112bd962"
      ],
      "output_addresses": [
        "bc1q4207bae0e52846ecbca8a9a6434a9d"
      ],
      "input_amounts": 15.91273935,
      "output_amounts": 15.85345019,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.05928916,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:54:49.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "139.22.17.202",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002073",
      "input_addresses": [
        "bc1pd174aa9e33a444699a34806b4b3fb1"
      ],
      "output_addresses": [
        "bc1q112e961d19284bdf9a27d6c6745856"
      ],
      "input_amounts": 9.64804015,
      "output_amounts": 9.6357094,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.01233075,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:56:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "200.225.45.153",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002082",
      "input_addresses": [
        "bc1p50e38f3b6dfd4d0e818a52f245eca1"
      ],
      "output_addresses": [
        "bc1pe889a24cb991435688a53d597bed80"
      ],
      "input_amounts": 10.23753281,
      "output_amounts": 10.22429786,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.01323495,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:58:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "42.211.213.42",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002093",
      "input_addresses": [
        "bc1p6321375ac6274ddead244320022395"
      ],
      "output_addresses": [
        "bc1p88776755271e402380fdd8c07a1be6"
      ],
      "input_amounts": 7.72494799,
      "output_amounts": 7.69832964,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.02661835,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:58:39.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "234.87.83.232",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002096",
      "input_addresses": [
        "bc1qf845d9c519bb4fb5ad2e5181c13468"
      ],
      "output_addresses": [
        "bc1pb7d59ca9bd624a0389fdee329fccc9"
      ],
      "input_amounts": 9.12965792,
      "output_amounts": 9.09073805,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.03891987,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:00:09.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "46.13.93.249",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002105",
      "input_addresses": [
        "bc1p83639e1f05ce4b35b0a45af73b284f"
      ],
      "output_addresses": [
        "bc1qd5d21fae1a28449b81204dbdc5c1ac"
      ],
      "input_amounts": 5.43071248,
      "output_amounts": 5.40837008,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.0223424,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:02:39.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "77.38.233.147",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002120",
      "input_addresses": [
        "bc1p10e2bf4bcfcc4d7f9ff032f435e327"
      ],
      "output_addresses": [
        "bc1pa87f3e8dcb314c799154bec3af776b"
      ],
      "input_amounts": 7.60223057,
      "output_amounts": 7.57575904,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.02647153,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:02:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "118.158.207.170",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002122",
      "input_addresses": [
        "bc1p032b5d9f708d46caa4cb1514a249b3"
      ],
      "output_addresses": [
        "bc1qccc0beb28d9d4feb8ef05b3651d563"
      ],
      "input_amounts": 15.89368882,
      "output_amounts": 15.83200384,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.06168498,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T21:05:19.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "160.207.169.238",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002136",
      "input_addresses": [
        "bc1p8c411e714d094e288aa5869d920cb8"
      ],
      "output_addresses": [
        "bc1qdcb2f5be8beb49bbbb7481955f7693"
      ],
      "input_amounts": 10.21847793,
      "output_amounts": 10.17472156,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.04375637,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T21:05:39.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "139.226.56.88",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002138",
      "input_addresses": [
        "bc1p89a45b5ed0d944298ee0673fcde608"
      ],
      "output_addresses": [
        "bc1pd2eccce86f4940188bdcd3c96f9724"
      ],
      "input_amounts": 17.8936187,
      "output_amounts": 17.85190184,
      "geo_country": "DE",
      "asn": 3320,
      "fee": 0.04171686,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T21:07:19.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "108.168.57.128",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002148",
      "input_addresses": [
        "bc1p8df809c4318e436e954980311f61de"
      ],
      "output_addresses": [
        "bc1p422a59e7e544405492ede4625fdf77"
      ],
      "input_amounts": 8.14358257,
      "output_amounts": 8.12572073,
      "geo_country": "RU",
      "asn": 16276,
      "fee": 0.01786184,
      "script_type": "P2SH",
      "risk_score": 84,
      "confidence": 0.91
    },
    {
      "timestamp": "2026-09-06T20:48:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "122.143.75.151",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002038",
      "input_addresses": [
        "bc1q03f7d8c93a14494db0978c0145921d"
      ],
      "output_addresses": [
        "bc1pad0ff88656ef40e096f34950fc6043"
      ],
      "input_amounts": 13.85647063,
      "output_amounts": 13.80048677,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.05598386,
      "script_type": "P2SH",
      "risk_score": 83,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:50:19.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "174.248.184.147",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002046",
      "input_addresses": [
        "bc1q597da264b87245d5a673361fe7c4b5"
      ],
      "output_addresses": [
        "bc1qa71eca63dc074a88bc729bc87aa667"
      ],
      "input_amounts": 8.21493845,
      "output_amounts": 8.18528489,
      "geo_country": "US",
      "asn": 15169,
      "fee": 0.02965356,
      "script_type": "P2SH",
      "risk_score": 83,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:53:09.037574Z",
      "src_ip": "198.51.100.23",
      "dst_ip": "3.76.241.231",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002063",
      "input_addresses": [
        "bc1q6c22381586ab4192bb2b23043013b8"
      ],
      "output_addresses": [
        "bc1pe2bb316003724096ba8fa8fa5af0ac"
      ],
      "input_amounts": 16.6909318,
      "output_amounts": 16.65581926,
      "geo_country": "JP",
      "asn": 25133,
      "fee": 0.03511254,
      "script_type": "P2SH",
      "risk_score": 83,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:53:59.037574Z",
      "src_ip": "203.0.113.9",
      "dst_ip": "45.109.185.45",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002068",
      "input_addresses": [
        "bc1pf02196b783ca4beb966dc7ddf04c43"
      ],
      "output_addresses": [
        "bc1q47c9854ef3d442158e99ea4ed98373"
      ],
      "input_amounts": 14.85201629,
      "output_amounts": 14.79094155,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.06107474,
      "script_type": "P2SH",
      "risk_score": 83,
      "confidence": 0.9
    },
    {
      "timestamp": "2026-09-06T20:56:09.037574Z",
      "src_ip": "192.0.2.45",
      "dst_ip": "236.100.42.233",
      "src_port": 80,
      "dst_port": 8332,
      "txid": "txS002081",
      "input_addresses": [
        "bc1pd0eef4ad0ba14975aa62f8d22f7aff"
      ],
      "output_addresses": [
        "bc1p05a59ecaf91c4b91aed3f666002f00"
      ],
      "input_amounts": 15.50961542,
      "output_amounts": 15.48216853,
      "geo_country": "CN",
      "asn": 4134,
      "fee": 0.02744689,
      "script_type": "P2SH",
      "risk_score": 83,
      "confidence": 0.9
    }
  ],
  "entities": [
    {
      "id": "bc1q9cbe1c1eb68849d1990de06e03f213",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 99,
      "confidence": 0.97
    },
    {
      "id": "bc1pdcc029d34a6847ae81c7fe0f973316",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 99,
      "confidence": 0.97
    },
    {
      "id": "192.0.2.45",
      "type": "IP",
      "tx_count": 52,
      "risk_score": 99,
      "confidence": 0.9
    },
    {
      "id": "232.114.1.25",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 99,
      "confidence": 0.97
    },
    {
      "id": "txS002033",
      "type": "TRANSACTION",
      "risk_score": 99,
      "confidence": 0.97
    },
    {
      "id": "bc1pa5db9d65f7f5411cbc3f69273b2059",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 98,
      "confidence": 0.97
    },
    {
      "id": "bc1pe5a7fa926c6a4b47ae60960caccefd",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 98,
      "confidence": 0.97
    },
    {
      "id": "203.0.113.9",
      "type": "IP",
      "tx_count": 54,
      "risk_score": 98,
      "confidence": 0.91
    },
    {
      "id": "68.122.5.131",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 98,
      "confidence": 0.97
    },
    {
      "id": "txS002025",
      "type": "TRANSACTION",
      "risk_score": 98,
      "confidence": 0.97
    },
    {
      "id": "bc1q8880c24a5fb04a9cbe8a4eac63f33a",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1p2080c63725a644c6ae5bcaeff4b7bb",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1q645acea907144d5a8d84f290b58843",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1p80781a2c4a11459e9019349fd4c2ba",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1p3379b7c4ac534f3293a1d70b0b538e",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1pb52b08c1040d4d55923b08e35e0c27",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1q2dbd91af403f4d4fbd01aa7ca2e08a",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1pc569655a07fa4bbea6ddc1d2ca1262",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1q49913be9c1b44607b979c24aa43c38",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1p93088bd708ef48cbadbcc17fea2b19",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1p698e931d13a24cf8857d189177440b",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1p8de546dd22d247acb4eed7727cd32f",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "198.51.100.23",
      "type": "IP",
      "tx_count": 44,
      "risk_score": 97,
      "confidence": 0.9
    },
    {
      "id": "127.106.104.11",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "136.118.142.79",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "19.8.216.124",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "157.116.230.21",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "172.176.244.68",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "244.83.229.196",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "txS002008",
      "type": "TRANSACTION",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "txS002011",
      "type": "TRANSACTION",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "txS002018",
      "type": "TRANSACTION",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "txS002051",
      "type": "TRANSACTION",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "txS002108",
      "type": "TRANSACTION",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "txS002126",
      "type": "TRANSACTION",
      "risk_score": 97,
      "confidence": 0.96
    },
    {
      "id": "bc1q3460c60429194d68869520ba315ab7",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 96,
      "confidence": 0.96
    },
    {
      "id": "bc1p424b8b716b2a4fb1b0c4afc486ced6",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 96,
      "confidence": 0.96
    },
    {
      "id": "75.27.177.247",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 96,
      "confidence": 0.96
    },
    {
      "id": "txS002007",
      "type": "TRANSACTION",
      "risk_score": 96,
      "confidence": 0.96
    },
    {
      "id": "bc1p70475613c16547cf9a44877fad031f",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 95,
      "confidence": 0.95
    },
    {
      "id": "bc1qafed75d4a88b4bc6873a4faa1c2afd",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 95,
      "confidence": 0.95
    },
    {
      "id": "117.62.216.2",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 95,
      "confidence": 0.95
    },
    {
      "id": "txS002072",
      "type": "TRANSACTION",
      "risk_score": 95,
      "confidence": 0.95
    },
    {
      "id": "bc1p5caad78fec384433b238d2b24cc66c",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "bc1q13750780306a4fd9bff9d86fdb547f",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "bc1q938a8525c56e4801b2ba96012799bf",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "bc1pd969397382504df78ac2a95e71e458",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "bc1qf0bfd47f979a4b56b267114249025d",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "bc1q80dc21da289b4cbe9752de8eb2f5f5",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "164.221.247.132",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "210.208.121.220",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "201.31.160.44",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "txS002040",
      "type": "TRANSACTION",
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "txS002045",
      "type": "TRANSACTION",
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "txS002075",
      "type": "TRANSACTION",
      "risk_score": 94,
      "confidence": 0.95
    },
    {
      "id": "bc1qdaf45cbaaf144020b9072702a30380",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "bc1qfd1fc620192440be9c5c4d8c35a03a",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "bc1pf1807e62a6bd4273a113fc927a37f2",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.95
    },
    {
      "id": "bc1qb5dac2e19981495cb5231aeaf03597",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.95
    },
    {
      "id": "bc1q97842d65129c413fb2514d6bee85eb",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "bc1qa2fe28897a364ab485036c18178048",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "bc1pceb7ef62ed024148bd286e69670219",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "bc1pdbdfc04f395849c0a1a21e0b1c10fc",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "89.235.120.27",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "225.97.69.220",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.95
    },
    {
      "id": "182.164.167.208",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "131.211.23.133",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "txS002080",
      "type": "TRANSACTION",
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "txS002088",
      "type": "TRANSACTION",
      "risk_score": 93,
      "confidence": 0.95
    },
    {
      "id": "txS002119",
      "type": "TRANSACTION",
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "txS002145",
      "type": "TRANSACTION",
      "risk_score": 93,
      "confidence": 0.94
    },
    {
      "id": "bc1p7a83b3435b394da39fc90c8dc6bb2e",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1qb92947da19904e279ab11ba95577e4",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1qe02b697629a44758a37d0d5de8f30c",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1qbf020c2532d340e5b1d3cc575880e3",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1p886f36ab55d84c19b80d9b9b768cdf",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1q23e2f584d6dd469e92fa1aa312f3bc",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1qc255208ab8614385af0eb2193c9de1",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1pf204750c9bd64f1c80754461305efb",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1q3619730dde6c47d9b4c8a5b1c77308",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1p45cfa001197f47c69abb161c4984d2",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1p8c755ce96aa94f3fb4b3e4e87d688c",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1pf346f7bf75434c9d9b307f09bfd8b9",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1pa5b19c8fa02a4ba9b274280edbce46",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1q58d7c1a798b34a92874ec1accb1f93",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1pa1a7d7521ec543eca8029084382265",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "bc1p50b5641ee1464df89f80783518c989",
      "type": "WALLET",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "117.195.16.144",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "175.80.186.82",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "168.62.182.6",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "233.131.2.226",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "55.79.212.188",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "96.83.184.34",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "101.110.19.250",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "99.221.66.234",
      "type": "IP",
      "tx_count": 1,
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "txS002032",
      "type": "TRANSACTION",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "txS002065",
      "type": "TRANSACTION",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "txS002067",
      "type": "TRANSACTION",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "txS002085",
      "type": "TRANSACTION",
      "risk_score": 92,
      "confidence": 0.94
    },
    {
      "id": "txS002091",
      "type": "TRANSACTION",
      "risk_score": 92,
      "confidence": 0.94
    }
  ],
  "network": {
    "top_source_ips": [
      {
        "ip": "203.0.113.9",
        "count": 54
      },
      {
        "ip": "192.0.2.45",
        "count": 52
      },
      {
        "ip": "198.51.100.23",
        "count": 44
      },
      {
        "ip": "162.251.62.225",
        "count": 1
      },
      {
        "ip": "221.14.130.240",
        "count": 1
      },
      {
        "ip": "123.239.222.153",
        "count": 1
      },
      {
        "ip": "74.122.12.70",
        "count": 1
      },
      {
        "ip": "246.34.135.94",
        "count": 1
      },
      {
        "ip": "126.187.246.121",
        "count": 1
      },
      {
        "ip": "95.151.102.26",
        "count": 1
      }
    ],
    "top_destination_ips": [
      {
        "ip": "89.206.59.210",
        "count": 1
      },
      {
        "ip": "125.175.77.140",
        "count": 1
      },
      {
        "ip": "178.136.208.201",
        "count": 1
      },
      {
        "ip": "157.176.243.228",
        "count": 1
      },
      {
        "ip": "229.205.5.235",
        "count": 1
      },
      {
        "ip": "226.233.47.179",
        "count": 1
      },
      {
        "ip": "33.1.66.34",
        "count": 1
      },
      {
        "ip": "218.73.245.102",
        "count": 1
      },
      {
        "ip": "127.223.20.21",
        "count": 1
      },
      {
        "ip": "62.210.7.177",
        "count": 1
      }
    ],
    "country_distribution": [
      {
        "country": "DE",
        "count": 550
      },
      {
        "country": "JP",
        "count": 535
      },
      {
        "country": "CN",
        "count": 531
      },
      {
        "country": "US",
        "count": 527
      },
      {
        "country": "RU",
        "count": 507
      }
    ],
    "asn_distribution": [
      {
        "asn": "3320",
        "count": 550
      },
      {
        "asn": "25133",
        "count": 535
      },
      {
        "asn": "4134",
        "count": 531
      },
      {
        "asn": "15169",
        "count": 527
      },
      {
        "asn": "16276",
        "count": 507
      }
    ],
    "port_patterns": [
      {
        "port": 80,
        "count": 984
      },
      {
        "port": 443,
        "count": 845
      },
      {
        "port": 8333,
        "count": 821
      }
    ]
  },
  "graph": {
    "elements": [
      {
        "data": {
          "id": "tx001000",
          "type": "TRANSACTION",
          "label": "tx001000",
          "amount": 0.00560223,
          "timestamp": "2026-08-29T04:22:39.037574Z"
        }
      },
      {
        "data": {
          "id": "162.251.62.225",
          "type": "IP",
          "label": "162.251.62.225"
        }
      },
      {
        "data": {
          "id": "89.206.59.210",
          "type": "IP",
          "label": "89.206.59.210"
        }
      },
      {
        "data": {
          "id": "bc1pae6e5a3f433b4bb0800bfa5ccb4391",
          "type": "WALLET",
          "label": "bc1pae6e..."
        }
      },
      {
        "data": {
          "id": "bc1p6d9fb62796da4872b21621621a079c",
          "type": "WALLET",
          "label": "bc1p6d9f..."
        }
      },
      {
        "data": {
          "id": "tx001001",
          "type": "TRANSACTION",
          "label": "tx001001",
          "amount": 0.04310932,
          "timestamp": "2026-08-29T04:24:29.037574Z"
        }
      },
      {
        "data": {
          "id": "221.14.130.240",
          "type": "IP",
          "label": "221.14.130.240"
        }
      },
      {
        "data": {
          "id": "125.175.77.140",
          "type": "IP",
          "label": "125.175.77.140"
        }
      },
      {
        "data": {
          "id": "bc1qd02ccbd0b2154340b024aa732a6386",
          "type": "WALLET",
          "label": "bc1qd02c..."
        }
      },
      {
        "data": {
          "id": "bc1p5c089734372e447fabe3caef961838",
          "type": "WALLET",
          "label": "bc1p5c08..."
        }
      },
      {
        "data": {
          "id": "tx001002",
          "type": "TRANSACTION",
          "label": "tx001002",
          "amount": 0.03085812,
          "timestamp": "2026-08-29T04:28:11.037574Z"
        }
      },
      {
        "data": {
          "id": "123.239.222.153",
          "type": "IP",
          "label": "123.239.222.153"
        }
      },
      {
        "data": {
          "id": "178.136.208.201",
          "type": "IP",
          "label": "178.136.208.201"
        }
      },
      {
        "data": {
          "id": "bc1qca8ab4759a6044f3b4be710349a541",
          "type": "WALLET",
          "label": "bc1qca8a..."
        }
      },
      {
        "data": {
          "id": "bc1q708b77b2e55c4047b42a700f4f940e",
          "type": "WALLET",
          "label": "bc1q708b..."
        }
      },
      {
        "data": {
          "id": "tx001003",
          "type": "TRANSACTION",
          "label": "tx001003",
          "amount": 0.02700285,
          "timestamp": "2026-08-29T04:31:48.037574Z"
        }
      },
      {
        "data": {
          "id": "74.122.12.70",
          "type": "IP",
          "label": "74.122.12.70"
        }
      },
      {
        "data": {
          "id": "157.176.243.228",
          "type": "IP",
          "label": "157.176.243.228"
        }
      },
      {
        "data": {
          "id": "bc1q5e929a0138e544cd9b2ab082befbb3",
          "type": "WALLET",
          "label": "bc1q5e92..."
        }
      },
      {
        "data": {
          "id": "bc1p7e1aabd6076d4601a9bc3d5b44cd19",
          "type": "WALLET",
          "label": "bc1p7e1a..."
        }
      },
      {
        "data": {
          "id": "tx001004",
          "type": "TRANSACTION",
          "label": "tx001004",
          "amount": 0.03524305,
          "timestamp": "2026-08-29T04:30:19.037574Z"
        }
      },
      {
        "data": {
          "id": "246.34.135.94",
          "type": "IP",
          "label": "246.34.135.94"
        }
      },
      {
        "data": {
          "id": "229.205.5.235",
          "type": "IP",
          "label": "229.205.5.235"
        }
      },
      {
        "data": {
          "id": "bc1p1624c21cbded437cbf3449bb596567",
          "type": "WALLET",
          "label": "bc1p1624..."
        }
      },
      {
        "data": {
          "id": "bc1qdd5e53edb71b4d038ac66cf870d11c",
          "type": "WALLET",
          "label": "bc1qdd5e..."
        }
      },
      {
        "data": {
          "id": "tx001005",
          "type": "TRANSACTION",
          "label": "tx001005",
          "amount": 0.02462156,
          "timestamp": "2026-08-29T04:44:29.037574Z"
        }
      },
      {
        "data": {
          "id": "126.187.246.121",
          "type": "IP",
          "label": "126.187.246.121"
        }
      },
      {
        "data": {
          "id": "226.233.47.179",
          "type": "IP",
          "label": "226.233.47.179"
        }
      },
      {
        "data": {
          "id": "bc1pac7f7110c16448f8a88186d30bf8c7",
          "type": "WALLET",
          "label": "bc1pac7f..."
        }
      },
      {
        "data": {
          "id": "bc1pe7674884fa2649febccb07bc3fac1a",
          "type": "WALLET",
          "label": "bc1pe767..."
        }
      },
      {
        "data": {
          "id": "tx001006",
          "type": "TRANSACTION",
          "label": "tx001006",
          "amount": 0.01426454,
          "timestamp": "2026-08-29T04:43:39.037574Z"
        }
      },
      {
        "data": {
          "id": "95.151.102.26",
          "type": "IP",
          "label": "95.151.102.26"
        }
      },
      {
        "data": {
          "id": "33.1.66.34",
          "type": "IP",
          "label": "33.1.66.34"
        }
      },
      {
        "data": {
          "id": "bc1p448e0bb1b87341209c5180e21e7a72",
          "type": "WALLET",
          "label": "bc1p448e..."
        }
      },
      {
        "data": {
          "id": "bc1q2669f11768fc46c1afd09225d0cec5",
          "type": "WALLET",
          "label": "bc1q2669..."
        }
      },
      {
        "data": {
          "id": "tx001007",
          "type": "TRANSACTION",
          "label": "tx001007",
          "amount": 0.00190823,
          "timestamp": "2026-08-29T04:33:09.037574Z"
        }
      },
      {
        "data": {
          "id": "213.85.231.181",
          "type": "IP",
          "label": "213.85.231.181"
        }
      },
      {
        "data": {
          "id": "218.73.245.102",
          "type": "IP",
          "label": "218.73.245.102"
        }
      },
      {
        "data": {
          "id": "bc1qc29f2a3b1033424eb6bb55bf099648",
          "type": "WALLET",
          "label": "bc1qc29f..."
        }
      },
      {
        "data": {
          "id": "bc1p7d82898df83143d3960b82935f4d32",
          "type": "WALLET",
          "label": "bc1p7d82..."
        }
      },
      {
        "data": {
          "id": "tx001008",
          "type": "TRANSACTION",
          "label": "tx001008",
          "amount": 0.04264531,
          "timestamp": "2026-08-29T04:26:55.037574Z"
        }
      },
      {
        "data": {
          "id": "145.193.79.183",
          "type": "IP",
          "label": "145.193.79.183"
        }
      },
      {
        "data": {
          "id": "127.223.20.21",
          "type": "IP",
          "label": "127.223.20.21"
        }
      },
      {
        "data": {
          "id": "bc1q40c67381f53041c8be055ee0440dc8",
          "type": "WALLET",
          "label": "bc1q40c6..."
        }
      },
      {
        "data": {
          "id": "bc1qcaa6e0dd90924cc7997b7684d95860",
          "type": "WALLET",
          "label": "bc1qcaa6..."
        }
      },
      {
        "data": {
          "id": "tx001009",
          "type": "TRANSACTION",
          "label": "tx001009",
          "amount": 0.03161808,
          "timestamp": "2026-08-29T04:55:21.037574Z"
        }
      },
      {
        "data": {
          "id": "202.24.107.156",
          "type": "IP",
          "label": "202.24.107.156"
        }
      },
      {
        "data": {
          "id": "62.210.7.177",
          "type": "IP",
          "label": "62.210.7.177"
        }
      },
      {
        "data": {
          "id": "bc1p9e5b5d0970da47c2a02fdd0aaa245f",
          "type": "WALLET",
          "label": "bc1p9e5b..."
        }
      },
      {
        "data": {
          "id": "bc1p597c7105decf42d498636c62e57513",
          "type": "WALLET",
          "label": "bc1p597c..."
        }
      },
      {
        "data": {
          "id": "tx001010",
          "type": "TRANSACTION",
          "label": "tx001010",
          "amount": 0.01440537,
          "timestamp": "2026-08-29T04:33:39.037574Z"
        }
      },
      {
        "data": {
          "id": "205.144.149.10",
          "type": "IP",
          "label": "205.144.149.10"
        }
      },
      {
        "data": {
          "id": "153.3.31.78",
          "type": "IP",
          "label": "153.3.31.78"
        }
      },
      {
        "data": {
          "id": "bc1pc46434b664d9435794e3044ffe5c52",
          "type": "WALLET",
          "label": "bc1pc464..."
        }
      },
      {
        "data": {
          "id": "bc1q823a5d72c5ae40d091ab57b32f1a88",
          "type": "WALLET",
          "label": "bc1q823a..."
        }
      },
      {
        "data": {
          "id": "tx001011",
          "type": "TRANSACTION",
          "label": "tx001011",
          "amount": 0.04496312,
          "timestamp": "2026-08-29T05:17:39.037574Z"
        }
      },
      {
        "data": {
          "id": "127.185.66.26",
          "type": "IP",
          "label": "127.185.66.26"
        }
      },
      {
        "data": {
          "id": "91.19.183.233",
          "type": "IP",
          "label": "91.19.183.233"
        }
      },
      {
        "data": {
          "id": "bc1pe6e6e97290644fd095311fe443279d",
          "type": "WALLET",
          "label": "bc1pe6e6..."
        }
      },
      {
        "data": {
          "id": "bc1pbc2aac32a148454bb5f1bedb73c7b5",
          "type": "WALLET",
          "label": "bc1pbc2a..."
        }
      },
      {
        "data": {
          "id": "tx001012",
          "type": "TRANSACTION",
          "label": "tx001012",
          "amount": 0.00376773,
          "timestamp": "2026-08-29T04:46:27.037574Z"
        }
      },
      {
        "data": {
          "id": "143.42.131.99",
          "type": "IP",
          "label": "143.42.131.99"
        }
      },
      {
        "data": {
          "id": "63.20.218.9",
          "type": "IP",
          "label": "63.20.218.9"
        }
      },
      {
        "data": {
          "id": "bc1q332e823f524948c0b8f7d34e2f67be",
          "type": "WALLET",
          "label": "bc1q332e..."
        }
      },
      {
        "data": {
          "id": "bc1p4a9970bad2174d26ae351bee74c4be",
          "type": "WALLET",
          "label": "bc1p4a99..."
        }
      },
      {
        "data": {
          "id": "tx001013",
          "type": "TRANSACTION",
          "label": "tx001013",
          "amount": 0.02688194,
          "timestamp": "2026-08-29T05:03:23.037574Z"
        }
      },
      {
        "data": {
          "id": "63.168.189.123",
          "type": "IP",
          "label": "63.168.189.123"
        }
      },
      {
        "data": {
          "id": "26.168.216.249",
          "type": "IP",
          "label": "26.168.216.249"
        }
      },
      {
        "data": {
          "id": "bc1pa9f4a5b4970e486b8b3283da314db5",
          "type": "WALLET",
          "label": "bc1pa9f4..."
        }
      },
      {
        "data": {
          "id": "bc1qa0af59f6002b4ee9bf42c9180cada9",
          "type": "WALLET",
          "label": "bc1qa0af..."
        }
      },
      {
        "data": {
          "id": "tx001014",
          "type": "TRANSACTION",
          "label": "tx001014",
          "amount": 0.04402333,
          "timestamp": "2026-08-29T05:27:45.037574Z"
        }
      },
      {
        "data": {
          "id": "26.226.199.24",
          "type": "IP",
          "label": "26.226.199.24"
        }
      },
      {
        "data": {
          "id": "0.40.99.253",
          "type": "IP",
          "label": "0.40.99.253"
        }
      },
      {
        "data": {
          "id": "bc1p7d7f51dad8a8446c89c8df90ab5303",
          "type": "WALLET",
          "label": "bc1p7d7f..."
        }
      },
      {
        "data": {
          "id": "bc1p9fe9d93cdac049b6b16d82a279924d",
          "type": "WALLET",
          "label": "bc1p9fe9..."
        }
      },
      {
        "data": {
          "id": "tx001015",
          "type": "TRANSACTION",
          "label": "tx001015",
          "amount": 0.02011973,
          "timestamp": "2026-08-29T05:34:24.037574Z"
        }
      },
      {
        "data": {
          "id": "57.167.64.98",
          "type": "IP",
          "label": "57.167.64.98"
        }
      },
      {
        "data": {
          "id": "145.216.4.210",
          "type": "IP",
          "label": "145.216.4.210"
        }
      },
      {
        "data": {
          "id": "bc1q37ac0d9f5ab848b18046dcb472abda",
          "type": "WALLET",
          "label": "bc1q37ac..."
        }
      },
      {
        "data": {
          "id": "bc1pf93483e92ba24266abc511778d6b9b",
          "type": "WALLET",
          "label": "bc1pf934..."
        }
      },
      {
        "data": {
          "id": "tx001016",
          "type": "TRANSACTION",
          "label": "tx001016",
          "amount": 0.04388459,
          "timestamp": "2026-08-29T04:36:47.037574Z"
        }
      },
      {
        "data": {
          "id": "53.140.126.86",
          "type": "IP",
          "label": "53.140.126.86"
        }
      },
      {
        "data": {
          "id": "127.32.96.155",
          "type": "IP",
          "label": "127.32.96.155"
        }
      },
      {
        "data": {
          "id": "bc1q737e7bdbf30c48ffb3da7a66309d84",
          "type": "WALLET",
          "label": "bc1q737e..."
        }
      },
      {
        "data": {
          "id": "bc1p42ab5eaacfed4d26a9a9128e5bc769",
          "type": "WALLET",
          "label": "bc1p42ab..."
        }
      },
      {
        "data": {
          "id": "tx001017",
          "type": "TRANSACTION",
          "label": "tx001017",
          "amount": 0.00891232,
          "timestamp": "2026-08-29T04:57:13.037574Z"
        }
      },
      {
        "data": {
          "id": "146.6.40.117",
          "type": "IP",
          "label": "146.6.40.117"
        }
      },
      {
        "data": {
          "id": "130.42.22.76",
          "type": "IP",
          "label": "130.42.22.76"
        }
      },
      {
        "data": {
          "id": "bc1p5b7a78ac8318499fa51c9d1c20e370",
          "type": "WALLET",
          "label": "bc1p5b7a..."
        }
      },
      {
        "data": {
          "id": "bc1qdc32454ff917403ca776df76a5187f",
          "type": "WALLET",
          "label": "bc1qdc32..."
        }
      },
      {
        "data": {
          "id": "tx001018",
          "type": "TRANSACTION",
          "label": "tx001018",
          "amount": 0.04583719,
          "timestamp": "2026-08-29T05:06:09.037574Z"
        }
      },
      {
        "data": {
          "id": "64.60.230.193",
          "type": "IP",
          "label": "64.60.230.193"
        }
      },
      {
        "data": {
          "id": "18.241.90.124",
          "type": "IP",
          "label": "18.241.90.124"
        }
      },
      {
        "data": {
          "id": "bc1pc45af480ab004ee3b469c7db8756f8",
          "type": "WALLET",
          "label": "bc1pc45a..."
        }
      },
      {
        "data": {
          "id": "bc1p4dff106626764eb38e393b096802f7",
          "type": "WALLET",
          "label": "bc1p4dff..."
        }
      },
      {
        "data": {
          "id": "tx001019",
          "type": "TRANSACTION",
          "label": "tx001019",
          "amount": 0.01151294,
          "timestamp": "2026-08-29T05:34:13.037574Z"
        }
      },
      {
        "data": {
          "id": "48.6.183.247",
          "type": "IP",
          "label": "48.6.183.247"
        }
      },
      {
        "data": {
          "id": "247.119.122.174",
          "type": "IP",
          "label": "247.119.122.174"
        }
      },
      {
        "data": {
          "id": "bc1q5237d8dab1ce472ca8d42f396f2523",
          "type": "WALLET",
          "label": "bc1q5237..."
        }
      },
      {
        "data": {
          "id": "bc1qbbf4f60f5e5b4ce5acdf3dea45c3e7",
          "type": "WALLET",
          "label": "bc1qbbf4..."
        }
      },
      {
        "data": {
          "id": "tx001020",
          "type": "TRANSACTION",
          "label": "tx001020",
          "amount": 0.01538221,
          "timestamp": "2026-08-29T04:55:59.037574Z"
        }
      },
      {
        "data": {
          "id": "75.148.97.78",
          "type": "IP",
          "label": "75.148.97.78"
        }
      },
      {
        "data": {
          "id": "41.20.48.238",
          "type": "IP",
          "label": "41.20.48.238"
        }
      },
      {
        "data": {
          "id": "bc1p161b906bce9f43f0a3338d3a7a01b6",
          "type": "WALLET",
          "label": "bc1p161b..."
        }
      },
      {
        "data": {
          "id": "bc1p2bc418010ffe4a869a5eaebf135093",
          "type": "WALLET",
          "label": "bc1p2bc4..."
        }
      },
      {
        "data": {
          "id": "tx001021",
          "type": "TRANSACTION",
          "label": "tx001021",
          "amount": 0.03940073,
          "timestamp": "2026-08-29T04:58:42.037574Z"
        }
      },
      {
        "data": {
          "id": "197.71.145.82",
          "type": "IP",
          "label": "197.71.145.82"
        }
      },
      {
        "data": {
          "id": "181.205.223.30",
          "type": "IP",
          "label": "181.205.223.30"
        }
      },
      {
        "data": {
          "id": "bc1p6b64107c68134c1db5fd8dca6eee1e",
          "type": "WALLET",
          "label": "bc1p6b64..."
        }
      },
      {
        "data": {
          "id": "bc1qfd5b01fa0c7f49c794637e4c8f177a",
          "type": "WALLET",
          "label": "bc1qfd5b..."
        }
      },
      {
        "data": {
          "id": "tx001022",
          "type": "TRANSACTION",
          "label": "tx001022",
          "amount": 0.00777081,
          "timestamp": "2026-08-29T05:05:33.037574Z"
        }
      },
      {
        "data": {
          "id": "63.151.204.255",
          "type": "IP",
          "label": "63.151.204.255"
        }
      },
      {
        "data": {
          "id": "0.184.85.219",
          "type": "IP",
          "label": "0.184.85.219"
        }
      },
      {
        "data": {
          "id": "bc1qc7a3c724ad9a4fca92b27795a38acc",
          "type": "WALLET",
          "label": "bc1qc7a3..."
        }
      },
      {
        "data": {
          "id": "bc1p3774d909a79b4c899bf0201c42473f",
          "type": "WALLET",
          "label": "bc1p3774..."
        }
      },
      {
        "data": {
          "id": "tx001023",
          "type": "TRANSACTION",
          "label": "tx001023",
          "amount": 0.01804079,
          "timestamp": "2026-08-29T05:25:31.037574Z"
        }
      },
      {
        "data": {
          "id": "225.10.247.5",
          "type": "IP",
          "label": "225.10.247.5"
        }
      },
      {
        "data": {
          "id": "223.9.29.83",
          "type": "IP",
          "label": "223.9.29.83"
        }
      },
      {
        "data": {
          "id": "bc1q49067003e1634ca68846761da80fef",
          "type": "WALLET",
          "label": "bc1q4906..."
        }
      },
      {
        "data": {
          "id": "bc1p3da1b4b4015044b39fb9db62380075",
          "type": "WALLET",
          "label": "bc1p3da1..."
        }
      },
      {
        "data": {
          "id": "tx001024",
          "type": "TRANSACTION",
          "label": "tx001024",
          "amount": 0.03327573,
          "timestamp": "2026-08-29T04:48:15.037574Z"
        }
      },
      {
        "data": {
          "id": "45.251.143.108",
          "type": "IP",
          "label": "45.251.143.108"
        }
      },
      {
        "data": {
          "id": "52.45.88.205",
          "type": "IP",
          "label": "52.45.88.205"
        }
      },
      {
        "data": {
          "id": "bc1qf6e312453cd343bd82fdb3b2675428",
          "type": "WALLET",
          "label": "bc1qf6e3..."
        }
      },
      {
        "data": {
          "id": "bc1qe438831daa99450fb031fa1b435313",
          "type": "WALLET",
          "label": "bc1qe438..."
        }
      },
      {
        "data": {
          "id": "tx001025",
          "type": "TRANSACTION",
          "label": "tx001025",
          "amount": 0.00846251,
          "timestamp": "2026-08-29T05:04:44.037574Z"
        }
      },
      {
        "data": {
          "id": "2.66.36.1",
          "type": "IP",
          "label": "2.66.36.1"
        }
      },
      {
        "data": {
          "id": "100.253.12.194",
          "type": "IP",
          "label": "100.253.12.194"
        }
      },
      {
        "data": {
          "id": "bc1pd39a2b2183a94d37951f2def0babe2",
          "type": "WALLET",
          "label": "bc1pd39a..."
        }
      },
      {
        "data": {
          "id": "bc1q0c758b289c30447e8d0654b20c08c9",
          "type": "WALLET",
          "label": "bc1q0c75..."
        }
      },
      {
        "data": {
          "id": "tx001026",
          "type": "TRANSACTION",
          "label": "tx001026",
          "amount": 0.01779565,
          "timestamp": "2026-08-29T05:17:15.037574Z"
        }
      },
      {
        "data": {
          "id": "140.160.34.255",
          "type": "IP",
          "label": "140.160.34.255"
        }
      },
      {
        "data": {
          "id": "243.40.208.195",
          "type": "IP",
          "label": "243.40.208.195"
        }
      },
      {
        "data": {
          "id": "bc1p7f2c8b6a631d47068a79ea69dbdd53",
          "type": "WALLET",
          "label": "bc1p7f2c..."
        }
      },
      {
        "data": {
          "id": "bc1q7baedd9e326a486f8527e27259edef",
          "type": "WALLET",
          "label": "bc1q7bae..."
        }
      },
      {
        "data": {
          "id": "tx001027",
          "type": "TRANSACTION",
          "label": "tx001027",
          "amount": 0.01637138,
          "timestamp": "2026-08-29T06:26:24.037574Z"
        }
      },
      {
        "data": {
          "id": "102.146.118.177",
          "type": "IP",
          "label": "102.146.118.177"
        }
      },
      {
        "data": {
          "id": "62.129.210.241",
          "type": "IP",
          "label": "62.129.210.241"
        }
      },
      {
        "data": {
          "id": "bc1pfbc8edd10add4cea894a6a5da845c4",
          "type": "WALLET",
          "label": "bc1pfbc8..."
        }
      },
      {
        "data": {
          "id": "bc1pb212568e9a484662ae61005db82d47",
          "type": "WALLET",
          "label": "bc1pb212..."
        }
      },
      {
        "data": {
          "id": "tx001028",
          "type": "TRANSACTION",
          "label": "tx001028",
          "amount": 0.02690591,
          "timestamp": "2026-08-29T05:20:59.037574Z"
        }
      },
      {
        "data": {
          "id": "4.12.189.19",
          "type": "IP",
          "label": "4.12.189.19"
        }
      },
      {
        "data": {
          "id": "163.72.73.51",
          "type": "IP",
          "label": "163.72.73.51"
        }
      },
      {
        "data": {
          "id": "bc1pf80233b24296467abfc800996fa80b",
          "type": "WALLET",
          "label": "bc1pf802..."
        }
      },
      {
        "data": {
          "id": "bc1p7e3f31d983a94ab8aa3ef157317453",
          "type": "WALLET",
          "label": "bc1p7e3f..."
        }
      },
      {
        "data": {
          "id": "tx001029",
          "type": "TRANSACTION",
          "label": "tx001029",
          "amount": 0.0044223,
          "timestamp": "2026-08-29T06:42:20.037574Z"
        }
      },
      {
        "data": {
          "id": "37.201.82.162",
          "type": "IP",
          "label": "37.201.82.162"
        }
      },
      {
        "data": {
          "id": "236.193.213.64",
          "type": "IP",
          "label": "236.193.213.64"
        }
      },
      {
        "data": {
          "id": "bc1pb1093e1bb1f940e3991d6b5df45cee",
          "type": "WALLET",
          "label": "bc1pb109..."
        }
      },
      {
        "data": {
          "id": "bc1p6a1366cd119149b8b3518847381416",
          "type": "WALLET",
          "label": "bc1p6a13..."
        }
      },
      {
        "data": {
          "id": "162.251.62.225->tx001000:BROADCAST_BY",
          "source": "162.251.62.225",
          "target": "tx001000",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001000->89.206.59.210:RECEIVED_BY",
          "source": "tx001000",
          "target": "89.206.59.210",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pae6e5a3f433b4bb0800bfa5ccb4391->tx001000:FUNDS_IN",
          "source": "bc1pae6e5a3f433b4bb0800bfa5ccb4391",
          "target": "tx001000",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001000->bc1p6d9fb62796da4872b21621621a079c:FUNDS_OUT",
          "source": "tx001000",
          "target": "bc1p6d9fb62796da4872b21621621a079c",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "221.14.130.240->tx001001:BROADCAST_BY",
          "source": "221.14.130.240",
          "target": "tx001001",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001001->125.175.77.140:RECEIVED_BY",
          "source": "tx001001",
          "target": "125.175.77.140",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1qd02ccbd0b2154340b024aa732a6386->tx001001:FUNDS_IN",
          "source": "bc1qd02ccbd0b2154340b024aa732a6386",
          "target": "tx001001",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001001->bc1p5c089734372e447fabe3caef961838:FUNDS_OUT",
          "source": "tx001001",
          "target": "bc1p5c089734372e447fabe3caef961838",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "123.239.222.153->tx001002:BROADCAST_BY",
          "source": "123.239.222.153",
          "target": "tx001002",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001002->178.136.208.201:RECEIVED_BY",
          "source": "tx001002",
          "target": "178.136.208.201",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1qca8ab4759a6044f3b4be710349a541->tx001002:FUNDS_IN",
          "source": "bc1qca8ab4759a6044f3b4be710349a541",
          "target": "tx001002",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001002->bc1q708b77b2e55c4047b42a700f4f940e:FUNDS_OUT",
          "source": "tx001002",
          "target": "bc1q708b77b2e55c4047b42a700f4f940e",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "74.122.12.70->tx001003:BROADCAST_BY",
          "source": "74.122.12.70",
          "target": "tx001003",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001003->157.176.243.228:RECEIVED_BY",
          "source": "tx001003",
          "target": "157.176.243.228",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q5e929a0138e544cd9b2ab082befbb3->tx001003:FUNDS_IN",
          "source": "bc1q5e929a0138e544cd9b2ab082befbb3",
          "target": "tx001003",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001003->bc1p7e1aabd6076d4601a9bc3d5b44cd19:FUNDS_OUT",
          "source": "tx001003",
          "target": "bc1p7e1aabd6076d4601a9bc3d5b44cd19",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "246.34.135.94->tx001004:BROADCAST_BY",
          "source": "246.34.135.94",
          "target": "tx001004",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001004->229.205.5.235:RECEIVED_BY",
          "source": "tx001004",
          "target": "229.205.5.235",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p1624c21cbded437cbf3449bb596567->tx001004:FUNDS_IN",
          "source": "bc1p1624c21cbded437cbf3449bb596567",
          "target": "tx001004",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001004->bc1qdd5e53edb71b4d038ac66cf870d11c:FUNDS_OUT",
          "source": "tx001004",
          "target": "bc1qdd5e53edb71b4d038ac66cf870d11c",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "126.187.246.121->tx001005:BROADCAST_BY",
          "source": "126.187.246.121",
          "target": "tx001005",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001005->226.233.47.179:RECEIVED_BY",
          "source": "tx001005",
          "target": "226.233.47.179",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pac7f7110c16448f8a88186d30bf8c7->tx001005:FUNDS_IN",
          "source": "bc1pac7f7110c16448f8a88186d30bf8c7",
          "target": "tx001005",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001005->bc1pe7674884fa2649febccb07bc3fac1a:FUNDS_OUT",
          "source": "tx001005",
          "target": "bc1pe7674884fa2649febccb07bc3fac1a",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "95.151.102.26->tx001006:BROADCAST_BY",
          "source": "95.151.102.26",
          "target": "tx001006",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001006->33.1.66.34:RECEIVED_BY",
          "source": "tx001006",
          "target": "33.1.66.34",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p448e0bb1b87341209c5180e21e7a72->tx001006:FUNDS_IN",
          "source": "bc1p448e0bb1b87341209c5180e21e7a72",
          "target": "tx001006",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001006->bc1q2669f11768fc46c1afd09225d0cec5:FUNDS_OUT",
          "source": "tx001006",
          "target": "bc1q2669f11768fc46c1afd09225d0cec5",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "213.85.231.181->tx001007:BROADCAST_BY",
          "source": "213.85.231.181",
          "target": "tx001007",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001007->218.73.245.102:RECEIVED_BY",
          "source": "tx001007",
          "target": "218.73.245.102",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1qc29f2a3b1033424eb6bb55bf099648->tx001007:FUNDS_IN",
          "source": "bc1qc29f2a3b1033424eb6bb55bf099648",
          "target": "tx001007",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001007->bc1p7d82898df83143d3960b82935f4d32:FUNDS_OUT",
          "source": "tx001007",
          "target": "bc1p7d82898df83143d3960b82935f4d32",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "145.193.79.183->tx001008:BROADCAST_BY",
          "source": "145.193.79.183",
          "target": "tx001008",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001008->127.223.20.21:RECEIVED_BY",
          "source": "tx001008",
          "target": "127.223.20.21",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q40c67381f53041c8be055ee0440dc8->tx001008:FUNDS_IN",
          "source": "bc1q40c67381f53041c8be055ee0440dc8",
          "target": "tx001008",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001008->bc1qcaa6e0dd90924cc7997b7684d95860:FUNDS_OUT",
          "source": "tx001008",
          "target": "bc1qcaa6e0dd90924cc7997b7684d95860",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "202.24.107.156->tx001009:BROADCAST_BY",
          "source": "202.24.107.156",
          "target": "tx001009",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001009->62.210.7.177:RECEIVED_BY",
          "source": "tx001009",
          "target": "62.210.7.177",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p9e5b5d0970da47c2a02fdd0aaa245f->tx001009:FUNDS_IN",
          "source": "bc1p9e5b5d0970da47c2a02fdd0aaa245f",
          "target": "tx001009",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001009->bc1p597c7105decf42d498636c62e57513:FUNDS_OUT",
          "source": "tx001009",
          "target": "bc1p597c7105decf42d498636c62e57513",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "205.144.149.10->tx001010:BROADCAST_BY",
          "source": "205.144.149.10",
          "target": "tx001010",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001010->153.3.31.78:RECEIVED_BY",
          "source": "tx001010",
          "target": "153.3.31.78",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pc46434b664d9435794e3044ffe5c52->tx001010:FUNDS_IN",
          "source": "bc1pc46434b664d9435794e3044ffe5c52",
          "target": "tx001010",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001010->bc1q823a5d72c5ae40d091ab57b32f1a88:FUNDS_OUT",
          "source": "tx001010",
          "target": "bc1q823a5d72c5ae40d091ab57b32f1a88",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "127.185.66.26->tx001011:BROADCAST_BY",
          "source": "127.185.66.26",
          "target": "tx001011",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001011->91.19.183.233:RECEIVED_BY",
          "source": "tx001011",
          "target": "91.19.183.233",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pe6e6e97290644fd095311fe443279d->tx001011:FUNDS_IN",
          "source": "bc1pe6e6e97290644fd095311fe443279d",
          "target": "tx001011",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001011->bc1pbc2aac32a148454bb5f1bedb73c7b5:FUNDS_OUT",
          "source": "tx001011",
          "target": "bc1pbc2aac32a148454bb5f1bedb73c7b5",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "143.42.131.99->tx001012:BROADCAST_BY",
          "source": "143.42.131.99",
          "target": "tx001012",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001012->63.20.218.9:RECEIVED_BY",
          "source": "tx001012",
          "target": "63.20.218.9",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q332e823f524948c0b8f7d34e2f67be->tx001012:FUNDS_IN",
          "source": "bc1q332e823f524948c0b8f7d34e2f67be",
          "target": "tx001012",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001012->bc1p4a9970bad2174d26ae351bee74c4be:FUNDS_OUT",
          "source": "tx001012",
          "target": "bc1p4a9970bad2174d26ae351bee74c4be",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "63.168.189.123->tx001013:BROADCAST_BY",
          "source": "63.168.189.123",
          "target": "tx001013",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001013->26.168.216.249:RECEIVED_BY",
          "source": "tx001013",
          "target": "26.168.216.249",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pa9f4a5b4970e486b8b3283da314db5->tx001013:FUNDS_IN",
          "source": "bc1pa9f4a5b4970e486b8b3283da314db5",
          "target": "tx001013",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001013->bc1qa0af59f6002b4ee9bf42c9180cada9:FUNDS_OUT",
          "source": "tx001013",
          "target": "bc1qa0af59f6002b4ee9bf42c9180cada9",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "26.226.199.24->tx001014:BROADCAST_BY",
          "source": "26.226.199.24",
          "target": "tx001014",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001014->0.40.99.253:RECEIVED_BY",
          "source": "tx001014",
          "target": "0.40.99.253",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p7d7f51dad8a8446c89c8df90ab5303->tx001014:FUNDS_IN",
          "source": "bc1p7d7f51dad8a8446c89c8df90ab5303",
          "target": "tx001014",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001014->bc1p9fe9d93cdac049b6b16d82a279924d:FUNDS_OUT",
          "source": "tx001014",
          "target": "bc1p9fe9d93cdac049b6b16d82a279924d",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "57.167.64.98->tx001015:BROADCAST_BY",
          "source": "57.167.64.98",
          "target": "tx001015",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001015->145.216.4.210:RECEIVED_BY",
          "source": "tx001015",
          "target": "145.216.4.210",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q37ac0d9f5ab848b18046dcb472abda->tx001015:FUNDS_IN",
          "source": "bc1q37ac0d9f5ab848b18046dcb472abda",
          "target": "tx001015",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001015->bc1pf93483e92ba24266abc511778d6b9b:FUNDS_OUT",
          "source": "tx001015",
          "target": "bc1pf93483e92ba24266abc511778d6b9b",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "53.140.126.86->tx001016:BROADCAST_BY",
          "source": "53.140.126.86",
          "target": "tx001016",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001016->127.32.96.155:RECEIVED_BY",
          "source": "tx001016",
          "target": "127.32.96.155",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q737e7bdbf30c48ffb3da7a66309d84->tx001016:FUNDS_IN",
          "source": "bc1q737e7bdbf30c48ffb3da7a66309d84",
          "target": "tx001016",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001016->bc1p42ab5eaacfed4d26a9a9128e5bc769:FUNDS_OUT",
          "source": "tx001016",
          "target": "bc1p42ab5eaacfed4d26a9a9128e5bc769",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "146.6.40.117->tx001017:BROADCAST_BY",
          "source": "146.6.40.117",
          "target": "tx001017",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001017->130.42.22.76:RECEIVED_BY",
          "source": "tx001017",
          "target": "130.42.22.76",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p5b7a78ac8318499fa51c9d1c20e370->tx001017:FUNDS_IN",
          "source": "bc1p5b7a78ac8318499fa51c9d1c20e370",
          "target": "tx001017",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001017->bc1qdc32454ff917403ca776df76a5187f:FUNDS_OUT",
          "source": "tx001017",
          "target": "bc1qdc32454ff917403ca776df76a5187f",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "64.60.230.193->tx001018:BROADCAST_BY",
          "source": "64.60.230.193",
          "target": "tx001018",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001018->18.241.90.124:RECEIVED_BY",
          "source": "tx001018",
          "target": "18.241.90.124",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pc45af480ab004ee3b469c7db8756f8->tx001018:FUNDS_IN",
          "source": "bc1pc45af480ab004ee3b469c7db8756f8",
          "target": "tx001018",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001018->bc1p4dff106626764eb38e393b096802f7:FUNDS_OUT",
          "source": "tx001018",
          "target": "bc1p4dff106626764eb38e393b096802f7",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "48.6.183.247->tx001019:BROADCAST_BY",
          "source": "48.6.183.247",
          "target": "tx001019",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001019->247.119.122.174:RECEIVED_BY",
          "source": "tx001019",
          "target": "247.119.122.174",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q5237d8dab1ce472ca8d42f396f2523->tx001019:FUNDS_IN",
          "source": "bc1q5237d8dab1ce472ca8d42f396f2523",
          "target": "tx001019",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001019->bc1qbbf4f60f5e5b4ce5acdf3dea45c3e7:FUNDS_OUT",
          "source": "tx001019",
          "target": "bc1qbbf4f60f5e5b4ce5acdf3dea45c3e7",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "75.148.97.78->tx001020:BROADCAST_BY",
          "source": "75.148.97.78",
          "target": "tx001020",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001020->41.20.48.238:RECEIVED_BY",
          "source": "tx001020",
          "target": "41.20.48.238",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p161b906bce9f43f0a3338d3a7a01b6->tx001020:FUNDS_IN",
          "source": "bc1p161b906bce9f43f0a3338d3a7a01b6",
          "target": "tx001020",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001020->bc1p2bc418010ffe4a869a5eaebf135093:FUNDS_OUT",
          "source": "tx001020",
          "target": "bc1p2bc418010ffe4a869a5eaebf135093",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "197.71.145.82->tx001021:BROADCAST_BY",
          "source": "197.71.145.82",
          "target": "tx001021",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001021->181.205.223.30:RECEIVED_BY",
          "source": "tx001021",
          "target": "181.205.223.30",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p6b64107c68134c1db5fd8dca6eee1e->tx001021:FUNDS_IN",
          "source": "bc1p6b64107c68134c1db5fd8dca6eee1e",
          "target": "tx001021",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001021->bc1qfd5b01fa0c7f49c794637e4c8f177a:FUNDS_OUT",
          "source": "tx001021",
          "target": "bc1qfd5b01fa0c7f49c794637e4c8f177a",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "63.151.204.255->tx001022:BROADCAST_BY",
          "source": "63.151.204.255",
          "target": "tx001022",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001022->0.184.85.219:RECEIVED_BY",
          "source": "tx001022",
          "target": "0.184.85.219",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1qc7a3c724ad9a4fca92b27795a38acc->tx001022:FUNDS_IN",
          "source": "bc1qc7a3c724ad9a4fca92b27795a38acc",
          "target": "tx001022",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001022->bc1p3774d909a79b4c899bf0201c42473f:FUNDS_OUT",
          "source": "tx001022",
          "target": "bc1p3774d909a79b4c899bf0201c42473f",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "225.10.247.5->tx001023:BROADCAST_BY",
          "source": "225.10.247.5",
          "target": "tx001023",
          "type": "BROADCAST_BY",
          "port": 8333
        }
      },
      {
        "data": {
          "id": "tx001023->223.9.29.83:RECEIVED_BY",
          "source": "tx001023",
          "target": "223.9.29.83",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1q49067003e1634ca68846761da80fef->tx001023:FUNDS_IN",
          "source": "bc1q49067003e1634ca68846761da80fef",
          "target": "tx001023",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001023->bc1p3da1b4b4015044b39fb9db62380075:FUNDS_OUT",
          "source": "tx001023",
          "target": "bc1p3da1b4b4015044b39fb9db62380075",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "45.251.143.108->tx001024:BROADCAST_BY",
          "source": "45.251.143.108",
          "target": "tx001024",
          "type": "BROADCAST_BY",
          "port": 443
        }
      },
      {
        "data": {
          "id": "tx001024->52.45.88.205:RECEIVED_BY",
          "source": "tx001024",
          "target": "52.45.88.205",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1qf6e312453cd343bd82fdb3b2675428->tx001024:FUNDS_IN",
          "source": "bc1qf6e312453cd343bd82fdb3b2675428",
          "target": "tx001024",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001024->bc1qe438831daa99450fb031fa1b435313:FUNDS_OUT",
          "source": "tx001024",
          "target": "bc1qe438831daa99450fb031fa1b435313",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "2.66.36.1->tx001025:BROADCAST_BY",
          "source": "2.66.36.1",
          "target": "tx001025",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001025->100.253.12.194:RECEIVED_BY",
          "source": "tx001025",
          "target": "100.253.12.194",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pd39a2b2183a94d37951f2def0babe2->tx001025:FUNDS_IN",
          "source": "bc1pd39a2b2183a94d37951f2def0babe2",
          "target": "tx001025",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001025->bc1q0c758b289c30447e8d0654b20c08c9:FUNDS_OUT",
          "source": "tx001025",
          "target": "bc1q0c758b289c30447e8d0654b20c08c9",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "140.160.34.255->tx001026:BROADCAST_BY",
          "source": "140.160.34.255",
          "target": "tx001026",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001026->243.40.208.195:RECEIVED_BY",
          "source": "tx001026",
          "target": "243.40.208.195",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1p7f2c8b6a631d47068a79ea69dbdd53->tx001026:FUNDS_IN",
          "source": "bc1p7f2c8b6a631d47068a79ea69dbdd53",
          "target": "tx001026",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001026->bc1q7baedd9e326a486f8527e27259edef:FUNDS_OUT",
          "source": "tx001026",
          "target": "bc1q7baedd9e326a486f8527e27259edef",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "102.146.118.177->tx001027:BROADCAST_BY",
          "source": "102.146.118.177",
          "target": "tx001027",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001027->62.129.210.241:RECEIVED_BY",
          "source": "tx001027",
          "target": "62.129.210.241",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pfbc8edd10add4cea894a6a5da845c4->tx001027:FUNDS_IN",
          "source": "bc1pfbc8edd10add4cea894a6a5da845c4",
          "target": "tx001027",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001027->bc1pb212568e9a484662ae61005db82d47:FUNDS_OUT",
          "source": "tx001027",
          "target": "bc1pb212568e9a484662ae61005db82d47",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "4.12.189.19->tx001028:BROADCAST_BY",
          "source": "4.12.189.19",
          "target": "tx001028",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001028->163.72.73.51:RECEIVED_BY",
          "source": "tx001028",
          "target": "163.72.73.51",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pf80233b24296467abfc800996fa80b->tx001028:FUNDS_IN",
          "source": "bc1pf80233b24296467abfc800996fa80b",
          "target": "tx001028",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001028->bc1p7e3f31d983a94ab8aa3ef157317453:FUNDS_OUT",
          "source": "tx001028",
          "target": "bc1p7e3f31d983a94ab8aa3ef157317453",
          "type": "FUNDS_OUT"
        }
      },
      {
        "data": {
          "id": "37.201.82.162->tx001029:BROADCAST_BY",
          "source": "37.201.82.162",
          "target": "tx001029",
          "type": "BROADCAST_BY",
          "port": 80
        }
      },
      {
        "data": {
          "id": "tx001029->236.193.213.64:RECEIVED_BY",
          "source": "tx001029",
          "target": "236.193.213.64",
          "type": "RECEIVED_BY",
          "port": 8332
        }
      },
      {
        "data": {
          "id": "bc1pb1093e1bb1f940e3991d6b5df45cee->tx001029:FUNDS_IN",
          "source": "bc1pb1093e1bb1f940e3991d6b5df45cee",
          "target": "tx001029",
          "type": "FUNDS_IN"
        }
      },
      {
        "data": {
          "id": "tx001029->bc1p6a1366cd119149b8b3518847381416:FUNDS_OUT",
          "source": "tx001029",
          "target": "bc1p6a1366cd119149b8b3518847381416",
          "type": "FUNDS_OUT"
        }
      }
    ],
    "total_nodes": 13103,
    "total_edges": 10600
  }
};