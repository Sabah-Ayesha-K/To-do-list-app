document.addEventListener("DOMContentLoaded", fetchTasks);

function fetchTasks() {
    fetch("http://127.0.0.1:5000/tasks")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            return response.json();
        })
        .then(data => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            data.forEach(task => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${task.title} - ${task.description} 
                    <button onclick="deleteTask(${task.id})">Delete</button>`;
                taskList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching tasks:", error));
}
/* eslint-disable no-unused-vars */
function addTask() {
    const title = document.getElementById("taskTitle").value.trim();
    const description = document.getElementById("taskDescription").value.trim();

    if (!title || !description) {
        alert("Please enter both a title and a description.");
        return;
    }

    fetch("http://127.0.0.1:5000/add_task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to add task");
        }
        return response.json();
    })
    .then(() => {
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";
        fetchTasks();
    })
    .catch(error => console.error("Error adding task:", error));
}
/* eslint-disable no-unused-vars */
function deleteTask(id) {
    fetch(`http://127.0.0.1:5000/delete_task/${id}`, { method: "DELETE" })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete task");
            }
            return response.json();
        })
        .then(() => fetchTasks())
        .catch(error => console.error("Error deleting task:", error));
}
