# Todo App

A dynamic, modular Todo application that allows users to manage tasks and projects efficiently, with persistent storage in the browser. Built using modern JavaScript and modular design principles.  

## Features

- **Dynamic Todos**: Each todo has properties such as:
  - `title`
  - `description`
  - `dueDate`
  - `priority`
  - Optional: `notes` and `checklist`  

- **Projects & Organization**:
  - Default project for new users
  - Ability to create new projects
  - Assign todos to specific projects  

- **User Interface**:
  - View all projects
  - View all todos in a project (with color-coded priorities)
  - Expand a todo to view or edit details
  - Delete a todo  

- **Modular Architecture**:
  - Application logic (creating todos, changing priority, marking complete, etc.) is separated from DOM manipulation
  - Each module handles a single responsibility  

- **Persistence**:
  - Data is stored in `localStorage` to survive page refreshes
  - Automatic saving and loading of projects and todos
  - Handles missing data gracefully  

## Usage

1. **Creating Todos**:
   - Enter a title, description, due date, and priority
   - Optionally add notes or a checklist
   - Assign the todo to a project

2. **Managing Projects**:
   - New users start with a default project
   - Create additional projects as needed
   - Switch between projects to view todos

3. **Editing & Deleting Todos**:
   - Expand a todo to edit its details
   - Click delete to remove a todo

4. **Visual Cues**:
   - Priority levels are color-coded for easy identification

## Persistence

- **localStorage** is used to store all projects and todos
- Todos are saved automatically whenever:
  - A new todo or project is created
  - A todo is updated or deleted
- On page load, the app retrieves saved data and reconstructs todos/projects
- Functions are reattached to todos after retrieval from JSON
