# Todo App - Redux & Redux Toolkit

This a quick lesson project to learn state management using **Redux** and **Redux Toolkit** in a simple React-based todo application. The app allows users to add and remove todos while managing the state globally using Redux.

## Features

- Add new todos
- Remove existing todos
- State management using Redux Toolkit

## How It Works

### 1. **Redux Store**

The application uses Redux Toolkit’s `configureStore` to set up the store, which holds the global state of the todo list. The store is configured with a single reducer, which manages the todos.

### 2. **Todo Slice**

A **slice** is used to manage the todo-related state. The slice contains:

- **Initial State**: Defines the starting state of the todos.
- **Reducers**: Functions to handle actions like adding or removing a todo.

### 3. **Actions**

The app uses actions to:

- **Add a Todo**: When the user submits a new task, the `addTodo` action is dispatched to add it to the state.
- **Remove a Todo**: When the user clicks "remove" next to a task, the `removeTodo` action is dispatched to delete it from the state.

### 4. **React Components**

- **AddTodo Component**: Handles adding a new todo by dispatching the `addTodo` action to the Redux store.
- **Todos Component**: Displays the list of todos and allows the user to remove them by dispatching the `removeTodo` action.

---

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For managing the application state efficiently.
- **Redux**: To manage global state across components.

---
