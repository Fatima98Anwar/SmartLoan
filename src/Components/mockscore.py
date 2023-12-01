from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/getCreditScore')
def get_credit_score():
    # Mockup credit score calculation
    credit_score = calculate_credit_score() # Replace with your model's function
    return jsonify({'creditScore': credit_score})

def calculate_credit_score():
    # Integrate with your model here
    return 9  # Example credit score

if __name__ == '__main__':
    app.run(debug=True)
