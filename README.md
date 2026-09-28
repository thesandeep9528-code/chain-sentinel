# CHAIN SENTINEL (SIH26146)
## AI-Powered Offline Monitoring & Analysis of Bitcoin Transaction Traffic

**Theme:** Blockchain & Cybersecurity  
**Team:** SquadY  
**Team ID:** 182149  
**Deployment Mode:** Air-Gapped / 100% Offline Forensics Workstation  

---

### 1. OVERVIEW
Bitcoin's pseudonymous peer-to-peer design can be exploited to layer, mix, and cash out illicit funds. **Chain Sentinel** is a cross-layer Bitcoin forensics platform that correlates on-chain transaction data with underlying peer-to-peer network transport metadata to detect anomalies, resolve entities, construct heterogeneous graphs, and surface explainable investigative leads.

---

### 2. CORE ARCHITECTURE & STACK

```text
               DATA INGESTION (CSV / JSON / XML)
                              ↓
              DATA VALIDATION & NORMALIZATION
                              ↓
                      ENTITY RESOLUTION
                     ┌────────┴────────┐
                     ↓                 ↓
             BLOCKCHAIN ENTITIES  NETWORK ENTITIES
             Wallets / TXIDs      IP / Port / ASN
                     └────────┬────────┘
                              ↓
                     HETEROGENEOUS GRAPH
                     (Cytoscape.js / PyG)
                              ↓
                      AI / ML ANALYSIS
          ┌───────────────────┼───────────────────┐
          ↓                   ↓                   ↓
  Isolation Forest         XGBoost            Community
  Anomaly Scoring      Risk Calibration       Clustering
          └───────────────────┼───────────────────┘
                              ↓
              EXPLAINABLE FORENSIC ALERTS
               (Risk Score 0-100 & Evidence)
                              ↓
              INVESTIGATOR REACT WORKSPACE
```

#### Technology Constraints (PPT Compliant)
- **Backend / API**: FastAPI, Uvicorn (Asynchronous REST API)
- **Machine Learning**: XGBoost, Scikit-learn (Isolation Forest & Robust Outlier Fusion)
- **Graph AI & Analysis**: PyTorch (Edge index tensors & Degree analysis), NetworkX
- **Frontend Workstation**: React 18, JavaScript
- **Graph Visualization**: Cytoscape.js (Interactive topology with CoSE force-directed layout)
- **Testing**: Pytest

---

### 3. AIR-GAPPED OFFLINE OPERATION
Chain Sentinel is designed for strictly offline, air-gapped forensic labs:
- **Zero Cloud AI / LLM APIs**: No OpenAI, Gemini, or remote inference calls.
- **Zero Cloud Databases**: In-memory and local file store.
- **Zero External Blockchain Explorers**: All blockchain analysis is performed on ingested metadata.
- **Offline Cached Vendor Assets**: React, ReactDOM, Babel, and Cytoscape.js are cached locally in `frontend/vendor/`.

---

### 4. WORKSTATION FEATURES

1. **Investigation Overview**:
   - Live metrics (Transactions Analyzed, Entities Resolved, Suspicious Entities, High-Risk Alerts, Graph Nodes, Graph Relationships).
   - Priority investigative leads table with direct pivoting.

2. **Investigator Workspace**:
   - Entity profiling (Wallets, Transactions, Broadcast IPs).
   - Normalized 0–100 Investigative Risk Score and confidence rating.
   - Connected counterparties, transaction lists, and forensic reasoning.

3. **Priority Alerts (Explainable AI)**:
   - Ranked by Risk Score, Confidence, and Severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`).
   - Clear forensic explainability bullets (e.g. Non-standard Bitcoin node port 80, P2SH multi-sig constructs, rapid temporal bursts, volume threshold divergence).

4. **Heterogeneous Investigation Graph (Cytoscape.js)**:
   - Differentiated node types: Wallets (Green circles), Transactions (Blue squares), Network IPs (Amber diamonds).
   - Typed edges: `FUNDS_IN`, `FUNDS_OUT`, `BROADCAST_BY`, `RECEIVED_BY`.
   - Dynamic layouts: Force-directed (CoSE), Concentric, Hierarchical.
   - Click-to-inspect forensic sidebar drawer.

5. **Transactions Ledger & Flow**:
   - Double-flow inspection:
     - On-Chain: Input Wallets ➔ Transaction ➔ Output Wallets
     - Network Layer: Source IP:Port ➔ Transaction ➔ Destination IP:Port

6. **Network Intelligence**:
   - Top broadcast IPs, peer destination nodes, jurisdiction distributions, and ASN breakdowns.

7. **Evidence Dossier & Export**:
   - Audit-ready synthesized case file.
   - One-click export of formal forensic dossier reports for offline evidentiary archiving.

8. **Data Ingestion Engine**:
   - Ingests CSV, JSON, and XML metadata with strict 14-field validation and duplicate detection.

---

### 5. LOCAL LAUNCH INSTRUCTIONS

To launch the local offline workstation on your PC:

```powershell
python run_local.py
```

The system will automatically initialize both services:
- **Investigator Console**: [http://127.0.0.1:3000](http://127.0.0.1:3000)
- **FastAPI Core Engine**: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- **API Documentation**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

To run the automated test suite:
```powershell
$env:PYTHONPATH="backend"; python backend/tests/test_pipeline.py
```
