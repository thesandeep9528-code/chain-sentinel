from fastapi import APIRouter, Query
from typing import Optional
from ..state import store

router = APIRouter()

@router.get("/graph")
async def get_graph(limit: int = 150):
    """Return Cytoscape elements (nodes & edges) limited to top elements for performance."""
    nodes = store.graph_data.get("nodes", [])[:limit]
    node_ids = set(n["data"]["id"] for n in nodes)

    edges = [e for e in store.graph_data.get("edges", []) if e["data"]["source"] in node_ids and e["data"]["target"] in node_ids]

    return {
        "elements": nodes + edges,
        "total_nodes": store.graph_data.get("total_nodes", 0),
        "total_edges": store.graph_data.get("total_edges", 0)
    }

@router.get("/graph/{entity_id}")
async def get_subgraph(entity_id: str, depth: int = 1):
    """Extract ego-network subgraph around a targeted entity."""
    matched_nodes = set([entity_id])
    matched_edges = []

    # Level 1 edges
    for e in store.graph_data.get("edges", []):
        src = e["data"]["source"]
        tgt = e["data"]["target"]
        if src == entity_id or tgt == entity_id:
            matched_edges.append(e)
            matched_nodes.add(src)
            matched_nodes.add(tgt)

    nodes = [n for n in store.graph_data.get("nodes", []) if n["data"]["id"] in matched_nodes]

    return {
        "elements": nodes + matched_edges,
        "center_id": entity_id,
        "node_count": len(nodes),
        "edge_count": len(matched_edges)
    }
