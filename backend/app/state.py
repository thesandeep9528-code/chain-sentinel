from typing import Dict, Any, List

class StateStore:
    def __init__(self):
        self.is_loaded = False
        self.filename = ""
        self.format = ""
        self.records: List[Dict] = []
        self.duplicates_count = 0
        self.missing_count = 0
        self.entities: Dict[str, Dict] = {"wallets": {}, "ips": {}, "transactions": {}, "asns": {}, "countries": {}}
        self.graph_data: Dict[str, Any] = {"nodes": [], "edges": [], "elements": [], "total_nodes": 0, "total_edges": 0}
        self.alerts: List[Dict] = []
        self.communities: List[Dict] = []

    def reset(self):
        self.is_loaded = False
        self.filename = ""
        self.records = []
        self.duplicates_count = 0
        self.missing_count = 0
        self.entities = {"wallets": {}, "ips": {}, "transactions": {}, "asns": {}, "countries": {}}
        self.graph_data = {"nodes": [], "edges": [], "elements": [], "total_nodes": 0, "total_edges": 0}
        self.alerts = []
        self.communities = []

store = StateStore()
