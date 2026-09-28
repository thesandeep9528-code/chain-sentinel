from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import ingestion, dataset, entities, transactions, graph, alerts, network

app = FastAPI(
    title="Chain Sentinel",
    description="Offline Bitcoin Transaction & Network Forensics Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ingestion.router, prefix="/api")
app.include_router(dataset.router, prefix="/api")
app.include_router(entities.router, prefix="/api")
app.include_router(transactions.router, prefix="/api")
app.include_router(graph.router, prefix="/api")
app.include_router(alerts.router, prefix="/api")
app.include_router(network.router, prefix="/api")

@app.get("/")
async def root():
    return {"status": "ONLINE", "system": "Chain Sentinel Forensics Engine"}
