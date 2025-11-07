# Simple Todo App

Simple Todo App is a lightweight, user-friendly task manager built with vanilla JavaScript. It allows users to add, complete, and delete tasks with real-time updates to a dynamic counter that tracks progress. Designed with modular components and clean UI logic, the app emphasizes maintainability, accessibility, and responsive interaction.

🔧 Features:

- Add tasks with due dates
- Mark tasks as completed
- Delete tasks with counter updates
- Form validation for input integrity
- Modular architecture using classes (e.g., Todo, TodoCounter, PopupWithForm, Section)
- Real-time feedback via a completion tracker

🎯 Ideal For:

- Practicing DOM manipulation and event handling
- Learning component-based architecture in vanilla JS
- Building a foundation for more advanced task management apps

## Functionality

🧩 Core Features

Add New Tasks

    • 	Users can open a popup form to input a task name and due date.
    • 	Form validation ensures both fields are filled correctly before submission.
    • 	Each new task is assigned a unique ID using.

Display Todos

    • 	Todos are rendered dynamically using a  class that manages the container.
    • 	Each todo is represented by a  class instance, which handles its own DOM structure and behavior.

Mark as Completed

    • 	Each todo includes a checkbox.
    • 	Toggling the checkbox updates the internal  state and triggers the  to reflect the change.

Delete Tasks

    • 	Each todo includes a delete button.
    • 	Clicking it removes the task from the DOM and updates the total and completed counters accordingly.

Track Progress

    • 	A  component displays the number of completed tasks out of the total.
    • 	It updates automatically when tasks are added, completed, or deleted.

Form Validation

    • 	A  class ensures inputs are valid before allowing submission.
    • 	Validation resets when the popup is reopened.

## Technology

🔧 Core Technologies

- JavaScript (ES6+)
- Used for DOM manipulation, event handling, and modular class-based architecture.
- Features like arrow functions, destructuring, and template literals enhance readability and maintainability.
- HTML5
- Semantic structure for accessibility and clarity.
- Includes a <template> element for cloning todo items dynamically.
- CSS3
- Custom styling for responsive layout and interactive elements.
- Class-based styling for todos, buttons, forms, and counters.
- UUID (via jspm.dev)
- Generates unique IDs for each todo item to ensure consistent tracking and manipulation.

## Deployment

This project is deployed on GitHub Pages:

https://github.com/StarCatcher23/se_project_todo-app.git
