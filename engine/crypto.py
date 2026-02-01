from cryptography.fernet import Fernet
import os
import base64

# Generate a key or load from env
# For demo, using a fixed key if not present (IN PROD USE ENV VARS)
KEY = os.environ.get('ENCRYPTION_KEY')
if not KEY:
    KEY = Fernet.generate_key()

cipher_suite = Fernet(KEY)

def encrypt_data(data: str) -> str:
    if not data: return ""
    return cipher_suite.encrypt(data.encode()).decode()

def decrypt_data(token: str) -> str:
    if not token: return ""
    try:
        return cipher_suite.decrypt(token.encode()).decode()
    except:
        return None
