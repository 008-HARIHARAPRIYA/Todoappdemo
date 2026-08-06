function addTask() {

    const input = document.getElementById("taskInput");

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <span class="delete" onclick="deleteTask(this)">❌</span>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(element) {
    element.parentElement.remove();
}