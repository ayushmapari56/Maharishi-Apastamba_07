from flask import Flask, request, jsonify
from flask_cors import CORS
from evaluate import check_eligibility
from crypto import encrypt_data, decrypt_data
import os

app = Flask(__name__)
CORS(app)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "service": "eligibility-engine (Python)"})

@app.route('/evaluate', methods=['POST'])
def evaluate():
    try:
        data = request.json
        student = data.get('student')
        criteria = data.get('criteria')
        
        if not student or not criteria:
            return jsonify({"error": "Missing student or criteria data"}), 400

        result = check_eligibility(student, criteria)
        
        # Example of encryption (masking sensitive data in logs/response if needed)
        # encrypted_status = encrypt_data(str(result['is_eligible']))
        
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Run on Port 8000 to avoid conflict with Node.js (5000)
    port = int(os.environ.get('PORT', 8000))
    app.run(port=port, debug=True)
