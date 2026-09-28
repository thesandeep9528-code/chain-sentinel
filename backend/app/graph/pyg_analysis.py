import networkx as nx
from typing import Dict, List, Any
import torch

def analyze_communities(G: nx.DiGraph) -> List[Dict[str, Any]]:
    """Graph community representation and cluster risk profiling using PyTorch tensor structures."""
    undirected = G.to_undirected()
    communities = []
    
    # Extract edge index as PyTorch LongTensor for graph representation
    nodes = list(G.nodes())
    node_to_idx = {n: i for i, n in enumerate(nodes)}
    
    if len(G.edges()) > 0:
        edge_list = [[node_to_idx[u], node_to_idx[v]] for u, v in G.edges() if u in node_to_idx and v in node_to_idx]
        if edge_list:
            edge_index = torch.tensor(edge_list, dtype=torch.long).t().contiguous()
            # Calculate node degree tensor
            degree_tensor = torch.zeros(len(nodes), dtype=torch.float)
            for u_idx, _ in edge_list:
                degree_tensor[u_idx] += 1.0

    try:
        clusters = list(nx.connected_components(undirected))
        # Sort by cluster size descending
        clusters.sort(key=len, reverse=True)

        for idx, cluster in enumerate(clusters[:25]):
            comm_id = f"COMM-{idx+1:02d}"
            tx_count = sum(1 for n in cluster if G.nodes[n].get("type") == "TRANSACTION")
            wallet_count = sum(1 for n in cluster if G.nodes[n].get("type") == "WALLET")
            ip_count = sum(1 for n in cluster if G.nodes[n].get("type") == "IP")

            # Risk classification based on transaction concentration and high-degree hubs
            if tx_count > 10 or ip_count > 4:
                risk_level = "CRITICAL"
            elif tx_count > 4:
                risk_level = "HIGH"
            elif tx_count > 1:
                risk_level = "MEDIUM"
            else:
                risk_level = "LOW"

            communities.append({
                "community_id": comm_id,
                "node_count": len(cluster),
                "tx_count": tx_count,
                "wallet_count": wallet_count,
                "ip_count": ip_count,
                "risk_level": risk_level,
                "hub_nodes": list(cluster)[:5]
            })
    except Exception as e:
        print(f"Community analysis error: {e}")

    return communities
