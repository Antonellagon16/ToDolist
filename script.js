let tasks = [];

document.getElementById('addTaskBtn').addEventListener('click', function () {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = '';
        displayTasks();
    }
});

document.getElementById('taskInput').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let taskInput = document.getElementById('taskInput').value;
        if (taskInput) {
            tasks.push(taskInput);
            document.getElementById('taskInput').value = '';
            displayTasks();
        }
    }
});

function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    document.getElementById('taskCounter').textContent = `Total Tasks: ${tasks.length}`;

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `${task} 
            <button class="btn btn-dark btn-sm" onclick="toggleCompleted(${index})"> Done </button>
            <button class="btn btn-danger btn-sm" onclick="removeTask(${index})"> Remove </button>`;
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleCompleted(index) {
    let taskList = document.getElementById('taskList');
    let li = taskList.children[index];
    li.classList.toggle('completed');
}

document.getElementById('clearTaskBtn').addEventListener('click', function () {
    tasks = [];
    displayTasks();
});

