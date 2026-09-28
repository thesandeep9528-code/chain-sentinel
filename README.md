# Chain Sentinel

### AI-Powered Monitoring & Analysis of Bitcoin Transaction Traffic

**Smart India Hackathon 2026 — SIH26146**
**Theme:** Blockchain & Cybersecurity
**Category:** Software
**Team:** SquadY
**Team ID:** 182149

---

## 🚀 Overview

**Chain Sentinel** is an offline-first AI-powered platform for monitoring and analyzing Bitcoin transaction traffic.

The system correlates **blockchain-layer data** such as wallet addresses, transaction IDs and transaction amounts with **network-layer observations** such as IP addresses, ports and timestamps.

By combining these layers into a unified graph, Chain Sentinel applies **AI/ML and graph-based analysis** to identify abnormal transaction patterns, cluster related entities and generate prioritized, explainable investigative leads.

The primary goal is to help investigators move from large volumes of raw Bitcoin transaction and network metadata to **evidence-backed, prioritized alerts**.

---

## 🎯 Problem Statement

Bitcoin's pseudonymous peer-to-peer architecture can potentially be exploited by criminal actors for activities such as:

* Ransomware payments
* Darknet transactions
* Extortion
* Money laundering
* Illicit fund movement and layering

Traditional analysis can become difficult when blockchain and network observations exist in separate datasets.

Chain Sentinel addresses this challenge by providing a unified system for:

**Data Ingestion → Entity Resolution → Cross-Layer Correlation → Graph Construction → AI/ML Detection → Risk Scoring → Explainable Alerts**

---

## 💡 Key Features

### 1. Bulk Data Ingestion

Supports ingestion of Bitcoin transaction and network metadata from:

* CSV
* JSON
* XML

The system is designed around fields such as:

* Timestamp
* Source IP
* Destination IP
* Source/Destination Port
* Transaction ID
* Input Wallet Addresses
* Output Wallet Addresses
* Input Amounts
* Output Amounts
* Geographic / ASN information

---

### 2. Data Processing & Entity Resolution

The system performs:

* Data validation
* Data normalization
* Cleaning and filtering
* Entity resolution
* Address clustering
* Cross-layer correlation

This converts heterogeneous raw records into structured entities and relationships.

---

### 3. Cross-Layer Transaction Graph

Chain Sentinel builds a multi-layer graph connecting:

**IP → Transaction → Wallet → Transaction → Wallet**

This helps investigators visualize relationships that may not be obvious from individual transaction records.

---

### 4. AI/ML-Based Detection

The platform uses machine-learning and graph-based techniques to identify abnormal patterns.

The prototype architecture includes:

* Scikit-learn
* XGBoost
* PyTorch
* PyTorch Geometric

The detection layer can analyze transaction/entity features and graph relationships to identify potentially suspicious behavior.

---

### 5. Risk Scoring & Lead Prioritization

Detected entities or transactions are assigned risk-oriented scores based on available evidence and model outputs.

The objective is to prioritize investigative leads rather than treating every transaction as equally suspicious.

Each alert is designed to provide:

* Risk score
* Related entity/transaction
* Supporting evidence
* Detection reason
* Relevant graph relationships

---

### 6. Explainable Investigation

Instead of presenting only a model prediction, Chain Sentinel focuses on **evidence-backed explanations**.

Investigators can examine:

* Why an entity was flagged
* Related transactions
* Connected wallet addresses
* Network observations
* Graph relationships
* Supporting risk indicators

---

### 7. Graph Visualization

The frontend uses **Cytoscape.js** to visualize relationships between:

* Wallets
* Transactions
* IP addresses
* Network observations
* Related entities

This provides an interactive link-analysis view for investigation.

---

## 🏗️ System Architecture

```text
              ┌─────────────────────────┐
              │   CSV / JSON / XML      │
              │  Transaction Metadata   │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │   Data Ingestion        │
              │ Validation & Parsing    │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │ Data Processing         │
              │ Normalization           │
              │ Entity Resolution       │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │ Cross-Layer Graph       │
              │ Wallet + TX + IP Data   │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │ AI/ML Analysis          │
              │ XGBoost / Scikit-learn  │
              │ PyTorch / PyG           │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │ Risk Scoring            │
              │ & Lead Prioritization   │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │ Explainability          │
              │ Evidence Aggregation    │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │ React Dashboard         │
              │ Cytoscape.js Graph      │
              └─────────────────────────┘
```

---

## 🧠 AI & Graph Analysis

Chain Sentinel combines traditional machine learning with graph-based analysis.

### Machine Learning

* Feature engineering from transaction and network metadata
* Anomaly detection
* Risk-oriented scoring
* Pattern identification

### Graph Analysis

* Entity relationship modeling
* Transaction graph construction
* Community/pattern detection
* Cross-layer relationship analysis

### Explainability

The system connects model outputs with available evidence to generate investigator-friendly alerts.

---

## 🖥️ Dashboard

The React-based dashboard is designed around an investigation workflow.

### Main Components

* Overview / monitoring dashboard
* Suspicious entity list
* Risk score indicators
* Alert details
* Transaction information
* Entity relationships
* Interactive graph visualization
* Evidence and explanation panel

The interface is designed to resemble a practical cybersecurity investigation tool rather than a generic AI dashboard.

---

## 🛠️ Technology Stack

### Frontend

* React
* JavaScript
* Cytoscape.js

### Backend

* Python
* FastAPI
* Uvicorn

### Machine Learning

* Scikit-learn
* XGBoost

### Graph AI

* PyTorch
* PyTorch Geometric (PyG)

### Testing

* Pytest

---

## 🔐 Offline-First Design

Chain Sentinel is designed as an **offline-first system** for environments where sensitive investigative data should not depend on external cloud services.

The intended workflow is:

```text
Local Dataset
     ↓
Local Processing
     ↓
Local AI/ML Analysis
     ↓
Local Graph Construction
     ↓
Local Dashboard
```

This architecture supports controlled analysis of sensitive datasets without requiring continuous external API access.

---

## 📊 Expected Output

For each prioritized investigative lead, the system aims to provide:

```text
Entity / Transaction
        ↓
Risk Score
        ↓
Detection Reason
        ↓
Supporting Evidence
        ↓
Related Entities
        ↓
Graph Relationships
```

This allows investigators to move from **alert → evidence → relationship → investigation**.

---

## 📂 Project Structure

```text
chain-sentinel/
│
├── backend/
│   ├── api/
│   ├── ingestion/
│   ├── processing/
│   ├── detection/
│   ├── graph/
│   ├── scoring/
│   └── explainability/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── graph/
│
├── data/
│   ├── sample/
│   └── schema/
│
├── models/
│
├── tests/
│
├── requirements.txt
├── README.md
└── LICENSE
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <repository-url>
cd chain-sentinel
```

### Backend Setup

```bash
cd backend

python -m venv venv
```

Activate the virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend communicates with the local FastAPI backend.

---

## 🧪 Testing

Run the project test suite using:

```bash
pytest
```

Testing covers core components such as:

* Data ingestion
* Data validation
* Entity processing
* Detection logic
* API functionality

---

## 📥 Dataset

The SIH problem statement provides a **synthetic Bitcoin transaction dataset modeled on real Bitcoin P2P and transaction fields**.

The prototype is designed to work with fields including:

```text
timestamp
src_ip
dst_ip
src_port
dst_port
txid
input_addresses[]
output_addresses[]
input_amounts[]
output_amounts[]
geo_country
asn
```

For development and demonstration, synthetic/sample data can be used to reproduce the investigation workflow.

---

## 🔎 Investigation Workflow

```text
1. Upload Dataset
        ↓
2. Validate & Normalize Data
        ↓
3. Resolve Entities
        ↓
4. Correlate Blockchain + Network Data
        ↓
5. Build Transaction Graph
        ↓
6. Run AI/ML Detection
        ↓
7. Calculate Risk Scores
        ↓
8. Generate Explainable Alerts
        ↓
9. Investigate Through Graph
```

---

## 🌟 Innovation

Chain Sentinel focuses on **cross-layer intelligence** rather than analyzing blockchain transactions in isolation.

### Core Innovation

**Blockchain Data + Network Data + AI/ML + Graph Analysis + Explainability**

This enables the system to connect:

```text
Network Observation
        ↓
IP / Port / Timing
        ↓
Transaction
        ↓
Wallet
        ↓
Related Entities
        ↓
Risk-Based Investigation Lead
```

---

## 🎯 Target Users

Chain Sentinel is designed for use cases involving:

* Cybersecurity investigators
* Financial crime investigators
* Law-enforcement bodies
* Regulatory authorities
* Crypto compliance teams
* Financial institutions
* Cryptocurrency exchanges

---

## 📌 Smart India Hackathon

This project was developed for:

**Smart India Hackathon 2026**

**Problem Statement:** SIH26146
**Title:** AI-Powered Monitoring & Analysis of Bitcoin Transaction Traffic
**Theme:** Blockchain & Cybersecurity
**Team:** SquadY
**Team ID:** 182149

---

## 👥 Team

### SquadY

**Team ID:** 182149

Developed as a Smart India Hackathon 2026 prototype.

---

## ⚠️ Disclaimer

Chain Sentinel is a research and prototype system developed for the Smart India Hackathon problem statement.

A risk score or alert generated by the system should be treated as an **investigative lead**, not as proof of criminal activity.

Final investigative or legal decisions should rely on appropriate evidence, procedures and authorized human review.

---

## 📜 License

This project is developed as an academic/hackathon prototype. Licensing terms can be added according to the team's intended repository and distribution model.
