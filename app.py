from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Define your PremiumDeposit class
class PremiumDeposit:
    def perform_operation(self):
        return "Premium Deposit operation executed successfully!"

# Route to render the HTML page
@app.route('/')
def home():
    return render_template('index.html')

# Route to handle tile click
@app.route('/trigger-premium-deposit', methods=['POST'])
def trigger_premium_deposit():
    data = request.get_json()
    if data.get("action") == "premium_deposit":
        premium_deposit = PremiumDeposit()
        result = premium_deposit.perform_operation()
        return jsonify({"message": result}), 200
    return jsonify({"message": "Invalid action"}), 400

if __name__ == '__main__':
    app.run(debug=True)
