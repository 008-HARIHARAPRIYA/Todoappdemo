function deleteTask(button) {

    button.parentElement.parentElement.remove();

}

function markCompleted(button) {

    const task = button.parentElement.parentElement;

    task.classList.toggle("completed");

}