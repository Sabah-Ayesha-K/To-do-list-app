import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",      
        passwd="Sabah@123",  
        database="todo_db"
    )
