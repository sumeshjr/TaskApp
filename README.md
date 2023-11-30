
Task Management Application Documentation Backend

Git Url - https://github.com/sumeshjr/TaskApp/tree/master

Introduction

The Task Management Application is a web-based system developed using Django, a high-level Python web framework. This application provides users with the ability to register, log in, and manage tasks effectively. The system employs Django's Model-View-Controller (MVC) architecture, and the data is stored in a relational database.

 Technologies Used

Django: The web framework used for backend development.
Django REST Framework: An extension for Django to facilitate the creation of RESTful APIs.
MongoDB Cloud: The cloud-based NoSQL database for storing user and task data.

Models

 UserLogin Model

The `UserLogin` model represents user information for registration and login.

- `id`: Auto-incremented primary key.
- `username`: CharField for storing the username.
- `password`: TextField for storing the user's password.

 Task Model

The `Task` model represents individual tasks associated with users.

- `userid`: IntegerField representing the user ID associated with the task.
- `name`: CharField for storing the task name.
- `description`: TextField for storing the task description.
- `priority`: CharField for storing the task priority.
- `date`: DateField for storing the task deadline.
- `is_completed`: BooleanField indicating whether the task is completed.

 Serializers

 UserSerializer

Serializes the `UserLogin` model for API interactions.

 TaskSerializer

Serializes the `Task` model for API interactions.

Views

User Registration

 Endpoint: `/reg/` (POST)

- Description: Registers a new user with a unique username and password.
- Request Body:
  ```json
  {
    "username": "unique_username",
    "password": "user_password"
  }
  ```
- Response:
  - Success:
    ```json
    {
      "status": "Success"
    }
    ```
  - Failure:
    ```json
    {
      "status": "Failed"
    }
    ```

 User Login

 Endpoint: `/log/` (POST)

- Description: Logs in an existing user.
- Request Body:
  ```json
  {
    "username": "existing_username",
    "password": "user_password"
  }
  ```
- Response:
  - Success: Returns user data including the user ID, username, and password.
  - Failure: Returns an empty list if the username and password do not match any user.

 Task Management

 Add Task

 Endpoint: `/add/` (POST)

- Description: Adds a new task for a specific user.
- Request Body:
  ```json
  {
    "userid": 1,
    "name": "Task Name",
    "description": "Task Description",
    "priority": "High",
    "date": "2023-12-01",
    "is_completed": false
  }
  ```
- Response:
  - Success:
    ```json
    {
      "status": "Success"
    }
    ```
  - Failure:
    ```json
    {
      "status": "Failed"
    }
    ```

 View All Tasks

 Endpoint: `/view/` (POST)

- Description: Retrieves all tasks in the system.
- Request Body: Empty
- Response: Returns a list of tasks.

 Update Task

 Endpoint: `/update/` (POST)

- Description: Updates the name of a specific task.
- Request Body:
  ```json
  {
    "userid": 1,
    "name": "New Task Name"
  }
  ```
- Response:
  - Success:
    ```json
    {
      "status": "Success"
    }
    ```
  - Failure: Returns an empty list if the user or task is not found.

 Delete Task

 Endpoint: `/delete/` (POST)

- Description: Deletes a specific task.
- Request Body:
  ```json
  {
    "taskid": 1
  }
  ```
- Response:
  - Success:
    ```json
    {
      "status": "Success",
      "message": "Task deleted successfully"
    }
    ```
  - Failure: Returns an error message if the task is not found or an internal server error occurs.

 View User's Tasks

 Endpoint: `/mytask/` (POST)

- Description: Retrieves all tasks for a specific user.
- Request Body:
  ```json
  {
    "userid": 1
  }
  ```
- Response: Returns a list of tasks for the specified user.

 Search Tasks

 Endpoint: `/search/` (POST)

- Description: Searches for tasks based on a keyword in the name or description.
- Request Body:
  ```json
  {
    "search_keyword": "keyword"
  }
  ```
- Response:
  - Success: Returns a list of tasks matching the search criteria.
  - Failure: Returns an error message if an internal server error occurs.

 Update Task Status

 Endpoint: `/update/` (POST)

- Description: Updates the completion status of a specific task.
- Request Body:
  ```json
  {
    "task_id": 1,
    "is_completed": true
  }
  ```
- Response:
  - Success:
    ```json
    {
      "success": true,
      "message": "Task updated successfully"
    }
    ```
  - Failure: Returns an error message if the task is not found or an internal server error occurs.

 Conclusion

The Task Management Application provides a robust solution for users to manage their tasks efficiently. It leverages the Django framework and RESTful API principles to enable seamless interactions between the frontend and backend. The documentation serves as a guide for users and developers to understand and utilize the application's features effectively.


 	
 React Task App Documentation
Git Url - https://github.com/sumeshjr/TaskApp/tree/front


 Introduction

This documentation provides an overview of a React Task App, its project structure, and detailed explanations of each JSXX file used in the application. The app includes features such as adding, deleting, viewing, searching, and managing tasks.

 Project Structure

```
/src
|-- /components
|   |-- AddTodo.jsx
|   |-- DeleteTodo.jsx
|   |-- Login.jsx
|   |-- MyTask.jsx
|   |-- Register.jsx
|   |-- SearchTodo.jsx
|   |-- TodoNav.jsx
|   |-- ViewTodo.jsx
|-- App.jsx
|-- App.css
|-- index.jsx
|-- logo.svg
```

 Components

 1. AddTodo

- File: `AddTodo.jsx`

  This component allows users to add new tasks. It includes a form with fields for task title, description, and priority.

 2. DeleteTodo

- File: `DeleteTodo.jsx`

  The `DeleteTodo` component displays the user's task list and provides the functionality to delete tasks. It includes error handling and loading indicators.

 3. Login

- File: `Login.jsx`

  The `Login` component handles user authentication. It includes a form for users to enter their login credentials and navigate to the app.

 4. MyTask

- File: `MyTask.jsx`

  This component shows the user's tasks and allows for updating task details. It uses modals for updating tasks and includes loading indicators.

 5. Register

- File: `Register.jsx`

  The `Register` component handles user registration. It includes a form for users to register with their email and password.

 6. SearchTodo

- File: `SearchTodo.jsx`

  The `SearchTodo` component enables users to search for tasks based on keywords. It displays search results and includes loading indicators.

 7. TodoNav

- File: `TodoNav.jsx`

  `TodoNav` is a navigation component that provides links to different sections of the app. It is included in various components for consistent navigation.

 8. ViewTodo

- File: `ViewTodo.jsx`

  The `ViewTodo` component fetches and displays all tasks. It includes loading indicators and error handling.

 App Component

- File: `App.jsx`

  The `App` component serves as the entry point for the application. It sets up the routing using `react-router-dom` and defines routes for different components.

 Routing

- File: `App.jsx`

  Routing is implemented using the `react-router-dom` library. Different routes are defined for components such as `Login`, `Register`, `ViewTodo`, `SearchTodo`, `DeleteTodo`, `AddTodo`, and `MyTask`.

```jsx
<Routes>
  <Route path='login' element={<Login />} />
  <Route path='register' element={<Register />} />
  <Route path='view' element={<ViewTodo />} />
  <Route path='search' element={<SearchTodo />} />
  <Route path='remove' element={<DeleteTodo />} />
  <Route path='add' element={<AddTodo />} />
  <Route path='mytask' element={<MyTask />} />
</Routes>
```

 Conclusion

This React Task App provides a comprehensive solution for managing tasks, including adding, viewing, searching, and deleting tasks. The modular structure of components enhances maintainability, and the use of routing ensures a smooth user experience.
