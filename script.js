document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Add task
  addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
          addTask(taskText);
          taskInput.value = "";
      }
  });

  // Add task function
  function addTask(text) {
      const li = document.createElement("li");
      li.textContent = text;

      // Create Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editTask(li));

      // Create Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteTask(li));

      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  }

  // Edit task function
  function editTask(taskItem) {
      const newText = prompt("Edit your task", taskItem.firstChild.textContent);
      if (newText) {
          taskItem.firstChild.textContent = newText;
      }
  }

  // Delete task function
  function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
  }
});
