//init an empty array element called tasks
let tasks = []

//Add on event listener to the "add task button" that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //get the value of the input box and store it in a variable called task input
    let taskInput = document.getElementById('taskInput').value

    //check if task input has a value
    if (taskInput) {
        tasks.push(taskInput)
        //clear the input box
        document.getElementById('taskInput').value = ''
        //call the function to update the task list display
        displayTasks()
    }
})

//function that will display tasks in the list
function displayTasks() {
    let taskList = document.getElementById('taskList')

    taskList.innerHTML = ""

    tasks.forEach(
        (task, index) => {
            //new element for each task
            let li = document.createElement('li')
            //add classes thru CSS
            li.classList.add(
                'list-group-item',
                'd-flex',
                'justify-content-between',
                'align-items-center'
            )

            li.innerHTML = `${task} <button class = ' btn btn-dark btn-sm' onclick = 'removetask(${index})'> √ </button> `

            //append the new task to the task list
            taskList.appendChild(li)


        }

    )
}