# Todo App

A simple client-side web application designed to help users manage their daily tasks. This application allows users to add new tasks, mark existing tasks as completed, and remove tasks from their list.

## Features

Based solely on the provided code, the application offers the following features:

*   **Add Tasks:** Users can input a task description and add it to a dynamic list.
*   **Input Validation:** Prevents adding empty tasks with a client-side alert.
*   **Mark Tasks as Completed:** Tasks can be toggled between a standard and a "completed" state, visually represented by a line-through and gray text.
*   **Delete Tasks:** Users can remove individual tasks from the list.
*   **Responsive Styling:** Basic styling to ensure a clean and centered user interface.

## Technology Stack

*   **HTML5:** For structuring the web page content.
*   **CSS3:** For styling the application's appearance and layout.
*   **JavaScript (Client-Side):** For implementing dynamic functionality and user interaction.

## File Structure Overview

```
.
├── index.html
├── script.js
├── style.css
└── taskUtils.js
```

*   `index.html`: The main HTML file that provides the structure of the Todo App, including the input field, add button, and the task list container. It links to the CSS and JavaScript files.
*   `script.js`: Contains the core JavaScript logic for adding new tasks to the list.
*   `style.css`: Defines all the visual styles for the application, including layout, colors, and typography.
*   `taskUtils.js`: Contains utility JavaScript functions specifically for handling task-related actions like deleting and marking tasks as complete.

## How to Run/Compile

This is a client-side web application and does not require any compilation or complex setup.

1.  **Save the files:** Ensure all four files (`index.html`, `script.js`, `style.css`, `taskUtils.js`) are saved in the same directory.
2.  **Open `index.html`:** Simply open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Safari, Edge).

The application will load directly in your browser.

## Code Highlights and Important Components

### `index.html`

*   **Structure:** Defines the basic layout with a main container, an input box for new tasks, and an unordered list (`<ul id="taskList">`) to display tasks.
*   **External Resources:** Links `style.css` for styling and includes `taskUtils.js` and `script.js` as external JavaScript files for functionality.
*   **Inline Event Handlers:** The "Add" button uses `onclick="addTask()"` to trigger JavaScript functionality directly from HTML.

### `script.js`

*   **`addTask()` Function:**
    *   Retrieves the value from the input field (`#taskInput`).
    *   Performs basic validation: if the input is empty or contains only whitespace, it displays an `alert`.
    *   Dynamically creates a new `<li>` element for each task.
    *   Populates the `<li>`'s `innerHTML` with the task text and two buttons: "Complete" (`✔`) and "Delete" (`❌`).
    *   These buttons also use `onclick` handlers, `markCompleted(this)` and `deleteTask(this)`, pointing to functions in `taskUtils.js`.
    *   Appends the newly created task `<li>` to the `taskList` `<ul>`.
    *   Clears the input field after adding a task.

### `taskUtils.js`

*   **`deleteTask(button)` Function:**
    *   Takes the clicked delete button element as an argument.
    *   Navigates up the DOM tree (`button.parentElement.parentElement`) to find the parent `<li>` element (the task item).
    *   Removes this `<li>` element from the document, effectively deleting the task.
*   **`markCompleted(button)` Function:**
    *   Takes the clicked complete button element as an argument.
    *   Finds the parent `<li>` element representing the task.
    *   Uses `task.classList.toggle("completed successfully")` to add or remove the literal class string `"completed successfully"` from the task `<li>`.
    *   Note: While the JavaScript toggles `"completed successfully"`, the `style.css` file specifically targets the `.completed` class to apply visual styling.

### `style.css`

*   **Global Reset:** Uses `*` to reset `margin`, `padding`, and `box-sizing`.
*   **Layout:** Employs Flexbox on the `body` to center the `.container` horizontally and vertically.
*   **Container Styling:** Styles the main `.container` with a white background, padding, rounded corners, and a `box-shadow`.
*   **Task List Styling:** Provides distinct styles for `ul` and `li` elements, including `display: flex` for layout within each task item and styling for the action buttons.
*   **Task Actions:** Defines specific background colors and hover effects for `.complete-btn` (green) and `.delete-btn` (red).
*   **Completed Task Style:** The `.completed` class applies `text-decoration: line-through` and changes the `color` to `gray`, visually indicating a completed task when applied to an `<li>` element.

## Usage Examples

1.  **Adding a Task:**
    *   Type your task, e.g., "Buy groceries", into the input field labeled "Enter a task".
    *   Click the "Add" button.
    *   The task will appear in the list below.

2.  **Marking a Task as Completed:**
    *   Locate the task you wish to mark (e.g., "Buy groceries").
    *   Click the "✔" (check mark) button next to the task.
    *   The task text will show a line through it and turn gray. Clicking it again will revert its status.

3.  **Deleting a Task:**
    *   Locate the task you wish to delete (e.g., "Buy groceries").
    *   Click the "❌" (cross mark) button next to the task.
    *   The task will be immediately removed from the list.