from typing import Dict, List, Any
import networkx as nx

def build_graph(entities: Dict[str, Dict], records: List[Dict]) -> Dict[str, Any]:
    """Construct a heterogeneous graph linking IP, Wallet, Transaction, Country, ASN.
    Returns both Cytoscape-compatible JSON elements and a NetworkX graph.
    """
    G = nx.DiGraph()
    cy_nodes = []
    cy_edges = []
    edge_set = set()

    def add_cy_node(nid, ntype, label, metadata=None):
        if not G.has_node(nid):
            meta = metadata or {}
            G.add_node(nid, type=ntype, label=label, **meta)
            cy_nodes.append({
                "data": {
                    "id": str(nid),
                    "type": ntype,
                    "label": str(label),
                    **meta
                }
            })

    def add_cy_edge(src, dst, rel, meta=None):
        edge_key = (str(src), str(dst), rel)
        if edge_key not in edge_set:
            edge_set.add(edge_key)
            m = meta or {}
            G.add_edge(src, dst, type=rel, **m)
            cy_edges.append({
                "data": {
                    "id": f"{src}->{dst}:{rel}",
                    "source": str(src),
                    "target": str(dst),
                    "type": rel,
                    **m
                }
            })

    for r in records:
        txid = str(r["txid"])
        src_ip = str(r.get("src_ip", ""))
        dst_ip = str(r.get("dst_ip", ""))
        amount = r.get("output_amounts", 0.0)

        add_cy_node(txid, "TRANSACTION", txid[:8], {"amount": amount, "timestamp": r.get("timestamp")})

        if src_ip:
            add_cy_node(src_ip, "IP", src_ip)
            add_cy_edge(src_ip, txid, "BROADCAST_BY", {"port": r.get("src_port")})

        if dst_ip:
            add_cy_node(dst_ip, "IP", dst_ip)
            add_cy_edge(txid, dst_ip, "RECEIVED_BY", {"port": r.get("dst_port")})

        for w_in in r.get("input_addresses", []):
            if w_in:
                add_cy_node(w_in, "WALLET", w_in[:8] + "...")
                add_cy_edge(w_in, txid, "FUNDS_IN")

        for w_out in r.get("output_addresses", []):
            if w_out:
                add_cy_node(w_out, "WALLET", w_out[:8] + "...")
                add_cy_edge(txid, w_out, "FUNDS_OUT")

    return {
        "nx_graph": G,
        "elements": cy_nodes + cy_edges,
        "nodes": cy_nodes,
        "edges": cy_edges,
        "total_nodes": len(cy_nodes),
        "total_edges": len(cy_edges)
    }
