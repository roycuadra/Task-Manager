# [View Demo](https://todo-app-firebase-omega.vercel.app/)

## Dependencies

The application relies on the following external dependencies:

- **React**: The JavaScript library for building user interfaces.
- **DOMPurify**: Used for sanitizing user input to prevent cross-site scripting (XSS) attacks.
- **SweetAlert2**: Used for displaying visually appealing alerts to the user.
- **Material-UI**: Provides React components for building a responsive and customizable UI.
- **Firebase/Firestore**: Firebase is used as a backend service for real-time data storage and synchronization.

## Key Features

1. **Real-Time Data Synchronization**: The application fetches and displays tasks from Firestore in real-time using the `onSnapshot` method.

2. **Add Task Functionality**: Users can add new tasks by entering task details into the input field and clicking the "Add Task" button. Task addition is handled by the `addTodo` function.

3. **Input Sanitization**: User input is sanitized using DOMPurify to prevent XSS attacks before adding it to the Firestore database.

4. **Offline Support**: The application checks for internet connectivity before adding a new task. If there is no internet connection, it displays an error alert using SweetAlert2.



