window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const addBtn = document.getElementById("add-btn");
    const newTaskInput = document.getElementById("new-task");

    // Add button click
    addBtn.addEventListener("click", addBtnClick);

    // Press Enter in the input
    newTaskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

function addBtnClick() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") return;

    addTask(taskText);

    // Clear input and focus
    newTaskInput.value = "";
    newTaskInput.focus();
}

function addTask(task) {
    const ol = document.querySelector("ol");
    
    // Create new li element
    const li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

    // Append to list
    ol.appendChild(li);

    // Add event listener to the last done button
    const doneBtns = document.querySelectorAll(".done-btn");
    const lastBtn = doneBtns[doneBtns.length - 1];
    lastBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
    const li = event.target.parentNode;
    li.parentNode.removeChild(li);
}
