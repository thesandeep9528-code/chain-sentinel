import os
import sys
import threading
import webbrowser
import http.server
import socketserver
import uvicorn

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def start_backend():
    print("[+] Starting Chain Sentinel API Backend on http://127.0.0.1:8000 ...")
    sys.path.insert(0, os.path.join(BASE_DIR, "backend"))
    uvicorn.run("backend.app.main:app", host="127.0.0.1", port=8000, log_level="info")

def start_frontend():
    print("[+] Serving Offline React Forensics UI on http://127.0.0.1:3000 ...")
    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=FRONTEND_DIR, **kwargs)
    with ReusableTCPServer(("127.0.0.1", 3000), Handler) as httpd:
        httpd.serve_forever()

if __name__ == "__main__":
    t_api = threading.Thread(target=start_backend, daemon=True)
    t_api.start()

    t_ui = threading.Thread(target=start_frontend, daemon=True)
    t_ui.start()

    print("\n=======================================================")
    print("   CHAIN SENTINEL — OFFLINE BITCOIN FORENSICS SUITE   ")
    print("=======================================================")
    print("  • Frontend UI : http://127.0.0.1:3000")
    print("  • Backend API: http://127.0.0.1:8000")
    print("  • API Docs   : http://127.0.0.1:8000/docs")
    print("=======================================================\n")

    try:
        webbrowser.open("http://127.0.0.1:3000")
    except Exception:
        pass

    try:
        t_api.join()
    except KeyboardInterrupt:
        print("\n[!] Shutting down Chain Sentinel.")
