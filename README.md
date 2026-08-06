# Todo App

This project is a simple, client-side web application designed to manage a list of tasks. Users can add new tasks and remove existing ones directly within the browser interface.

## Features

*   **Add Tasks:** Users can input text into a dedicated field and add it as a new task to a dynamic list.
*   **Input Validation:** Prevents adding empty tasks by prompting an alert if the input field is blank.
*   **Delete Tasks:** Each task in the list includes a delete control (❌ icon) that allows users to remove individual tasks.
*   **Responsive Viewport:** Configured for basic responsiveness across different device widths using the viewport meta tag.

## Technology Stack

*   **HTML5:** Structures the content of the web page, including the task input, buttons, and task list.
*   **CSS3:** Styles the appearance of the application, providing a clean and centered layout, task item styling, and interactive button effects.
*   **JavaScript (ES6+):** Implements the interactive functionality for adding and deleting tasks without requiring page reloads.

## File Structure Overview

The project consists of three core files:

```
.
├── index.html
├── script.js
└── style.css
```

*   `index.html`: The main HTML file that defines the structure and content of the web page. It links to the CSS and JavaScript files.
*   `script.js`: Contains the JavaScript functions that handle user interactions, such as adding and deleting tasks.
*   `style.css`: Provides all the cascading style sheet rules to define the visual presentation of the application.

## How to Run

To run this application, simply follow these steps:

1.  Save the `index.html`, `script.js`, and `style.css` files in the same directory on your local machine.
2.  Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Safari, Edge).

The application will load directly in your browser, ready for use. No compilation or server setup is required.

## Code Highlights and Important Components

### `index.html`

*   **Viewport Meta Tag:**
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    Ensures the app is rendered appropriately on various device sizes.
*   **Task Input and Add Button:**
    ```html
    <div class="input-box">
        <input type="text" id="taskInput" placeholder="Enter a task">
        <button onclick="addTask()">Add</button>
    </div>
    ```
    The `input` field (`id="taskInput"`) is where users type tasks. The `button` triggers the `addTask()` JavaScript function when clicked.
*   **Task List Container:**
    ```html
    <ul id="taskList"></ul>
    ```
    This unordered list (`id="taskList"`) serves as the container where new tasks will be dynamically added by JavaScript.
*   **Script Inclusion:**
    ```html
    <script src="script.js"></script>
    ```
    Links the JavaScript file at the end of the `<body>` for better performance.

### `script.js`

*   **`addTask()` Function:**
    ```javascript
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
    ```
    This function retrieves the task from the input field, validates it, dynamically creates a new list item (`<li>`) with the task text and a delete button, appends it to the `taskList`, and clears the input field.
*   **`deleteTask()` Function:**
    ```javascript
    function deleteTask(element) {
        element.parentElement.remove();
    }
    ```
    This function is called when the delete (❌) icon is clicked. It receives the clicked `span` element, and then removes its parent element (the `<li>` representing the task) from the DOM.

### `style.css`

*   **Global Reset:**
    ```css
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    ```
    A common CSS reset to ensure consistent styling across browsers.
*   **Body Styling:**
    ```css
    body{
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
    }
    ```
    Centers the content of the application vertically and horizontally on the page.
*   **`.container` Styling:**
    ```css
    .container{
        background:white;
        padding:20px;
        width:400px;
        border-radius:10px;
        box-shadow:0 0 10px rgba(0,0,0,0.2);
    }
    ```
    Defines the main content box with a white background, padding, fixed width, rounded corners, and a subtle shadow.
*   **Task List Item (`li`) Styling:**
    ```css
    li{
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#eeeeee;
        padding:10px;
        margin-bottom:10px;
        border-radius:5px;
    }
    ```
    Styles individual task items to display content and the delete button side-by-side with appropriate spacing and background.
*   **Delete Icon (`.delete`) Styling:**
    ```css
    .delete{
        color:red;
        cursor:pointer;
        font-size:20px;
    }
    ```
    Applies red color, increases font size, and sets a pointer cursor for the delete icon, indicating it's clickable.

## Usage Examples

1.  **Open the application:** Navigate to `index.html` in your web browser.
2.  **Add a new task:**
    *   Type "Buy groceries" into the "Enter a task" input field.
    *   Click the "Add" button.
    *   The task "Buy groceries" will appear in the list below.
3.  **Attempt to add an empty task:**
    *   Leave the input field empty.
    *   Click the "Add" button.
    *   An alert box will pop up saying "Please enter a task."
4.  **Delete an existing task:**
    *   Add a few tasks like "Read a book" and "Go for a walk".
    *   To remove "Read a book", click the "❌" icon next to it.
    *   The task "Read a book" will be immediately removed from the list.