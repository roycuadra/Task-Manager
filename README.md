# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Application Structure

The application consists of the following main components:

1. **App Component (App.js)**: This is the main component of the application responsible for rendering the entire UI and managing the state of tasks.

2. **Todo Component (Todo.js)**: This component represents a single todo item and is responsible for rendering each task in the list.

## Dependencies

The application relies on the following external dependencies:

- **DOMPurify**: Used for sanitizing user input to prevent cross-site scripting (XSS) attacks.
- **SweetAlert2**: Used for displaying visually appealing alerts to the user.
- **React**: The JavaScript library for building user interfaces.
- **Material-UI**: Provides React components for building a responsive and customizable UI.
- **Firebase/Firestore**: Firebase is used as a backend service for real-time data storage and synchronization.

## Key Features

1. **Real-Time Data Synchronization**: The application fetches and displays tasks from Firestore in real-time using the `onSnapshot` method.

2. **Add Task Functionality**: Users can add new tasks by entering task details into the input field and clicking the "Add Task" button. Task addition is handled by the `addTodo` function.

3. **Input Sanitization**: User input is sanitized using DOMPurify to prevent XSS attacks before adding it to the Firestore database.

4. **Offline Support**: The application checks for internet connectivity before adding a new task. If there is no internet connection, it displays an error alert using SweetAlert2.



