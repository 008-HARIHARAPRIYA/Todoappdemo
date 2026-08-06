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

        <div class="actions">
            <button class="complete-btn" onclick="markCompleted(this)">✔</button>

            <button class="delete-btn" onclick="deleteTask(this)">❌</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}