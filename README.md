📝 **To-Do List Web Application**

📌 **Overview**
This is a full-stack To-Do List web application that allows users to manage their daily tasks efficiently. The application supports creating, viewing, and deleting tasks with data stored in a MySQL database.

🚀**Features**
* ➕ Add new tasks
* 📋 View all tasks
* ❌ Delete tasks
* 💾 Persistent storage using MySQL
* 🌐 REST API integration between frontend and backend

🛠️ **Tech Stack**
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Python (Flask)
* **Database:** MySQL
* **Other Tools:** python-dotenv, Flask-CORS

⚙️ **Setup Instructions**

**1. Clone the repository**
* git clone <your-repo-link>
* cd To-do-list

**2. Setup backend**
* cd backend
* pip install -r requirements.txt

**3. Configure environment variables**
* Create a ".env" file in the backend folder:
* DB_HOST=localhost
* DB_USER=root
* DB_PASSWORD=your_password
* DB_NAME=todo_db

**4. Setup database**
* Run the SQL schema to create the required table.
* In **MySQL Command Line**
* USE todo_db;
* SELECT * FROM tasks;

**5. Run backend**
python app.py

**6. Run frontend**
Open "index.html" using Live Server.

📡 **API Endpoints**
* GET /tasks → Fetch all tasks
* POST /add_task → Add a new task
* DELETE /delete_task/<id> → Delete a task

🎯 **Future Improvements**
* Add update/edit functionality
* User authentication
* Task status (completed/pending)
* CI/CD integration

💡 **Learnings**
* Built REST APIs using Flask
* Connected frontend with backend using fetch API
* Managed environment variables securely using `.env`
* Worked with MySQL database integration

👩‍💻 **Author**
Sabah Ayesha K
