"use strict";
class TodoItem {
    constructor(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    }
}
class HTMLHelper {
    static createTaskItem(task) {
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                task.isCompleted = true;
                displayTasks();
            }
        });
        const label = document.createElement("label");
        checkBox.type = "checkbox";
        label.innerHTML = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        return listItem;
    }
}
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const incompleteTasksHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");
const taskManager = new TaskManager();
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
    taskManager.addTask(taskInput.value);
    displayTasks();
});
function displayTasks() {
    completedTasksHolder.innerHTML = "";
    incompleteTasksHolder.innerHTML = "";
    taskManager.tasks.forEach(element => {
        console.log(element.isCompleted);
        var listItem = HTMLHelper.createTaskItem(element);
        if (element.isCompleted) {
            completedTasksHolder.appendChild(listItem);
        }
        else {
            incompleteTasksHolder.appendChild(listItem);
        }
    });
}
function clear() {
    taskInput.value = "";
}
