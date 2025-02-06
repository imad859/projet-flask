from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('interface.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username == "admin" and password == "password":  # Exemple simple
        return jsonify(success=True, message="Connexion réussie !")
    return jsonify(success=False, message="Identifiant ou mot de passe incorrect.")

@app.route('/add_account', methods=['POST'])
def add_account():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username and password:
        return jsonify(success=True, message="Compte créé avec succès.")
    return jsonify(success=False, message="Erreur lors de la création du compte.")

if __name__ == '__main__':
    app.run(debug=True, port=5001)
