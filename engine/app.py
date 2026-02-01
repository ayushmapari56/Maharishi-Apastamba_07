from flask import Flask, request, jsonify
from flask_cors import CORS
# from crypto import encrypt_data, decrypt_data # Placeholder for AES
# from evaluate import check_eligibility # Placeholder for Logic

app = Flask(__name__)
CORS(app)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "service": "eligibility-engine"})

@app.route('/evaluate', methods=['POST'])
def evaluate():
    data = request.json
    # Logic to be implemented
    return jsonify({"eligible": False, "reasons": ["Not implemented"]})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
