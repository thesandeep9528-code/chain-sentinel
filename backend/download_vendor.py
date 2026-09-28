import os
import urllib.request

VENDOR_DIR = os.path.join(os.path.dirname(__file__), "..", "frontend", "vendor")
os.makedirs(VENDOR_DIR, exist_ok=True)

URLS = {
    "react.production.min.js": "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
    "react-dom.production.min.js": "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
    "babel.min.js": "https://unpkg.com/@babel/standalone@7.24.7/babel.min.js",
    "cytoscape.min.js": "https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.30.2/cytoscape.min.js"
}

for name, url in URLS.items():
    dest = os.path.join(VENDOR_DIR, name)
    if not os.path.exists(dest) or os.path.getsize(dest) < 1000:
        print(f"Downloading {name} from {url}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
                f.write(resp.read())
            print(f"Saved {name} ({os.path.getsize(dest)} bytes)")
        except Exception as e:
            print(f"Failed to download {name}: {e}")
    else:
        print(f"{name} already present locally.")
