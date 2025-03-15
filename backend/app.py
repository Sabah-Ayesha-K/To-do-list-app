from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})  # Enable CORS

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Sabah@123",
    database="todo_db"
)

cursor = db.cursor()

# Route to fetch tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    cursor.execute("SELECT * FROM tasks")
    tasks = cursor.fetchall()
    task_list = [
        {"id": task[0], "title": task[1], "description": task[2], "status": task[3], "created_at": task[4]}
        for task in tasks
    ]
    return jsonify(task_list)

# Route to add a task
@app.route('/add_task', methods=['POST'])
def add_task():
    data = request.get_json()
    title = data['title']
    description = data['description']

    cursor.execute("INSERT INTO tasks (title, description, status) VALUES (%s, %s, %s)", (title, description, "pending"))
    db.commit()
    return jsonify({"message": "Task added successfully"}), 201

# Route to delete a task
@app.route('/delete_task/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    cursor.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
    db.commit()
    return jsonify({"message": "Task deleted successfully"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)