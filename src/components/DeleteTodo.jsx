import React, { useState, useEffect } from 'react';
import TodoNav from './TodoNav';
import axios from 'axios';

const DeleteTodo = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the tasks for the current user when the component mounts
        setLoading(true); // Set loading to true when starting the data fetch
        axios
            .post('http://127.0.0.1:8000/mytask/', { userid: sessionStorage.getItem('id') })
            .then((response) => {
                setTasks(response.data);
                setLoading(false); // Set loading to false when data fetch is complete
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    const handleDeleteTask = (taskId) => {
        setLoading(true); // Set loading to true when starting the delete operation
        axios
            .post('http://127.0.0.1:8000/delete/', { taskid: taskId })
            .then((response) => {
                console.log(response.data);
                // Update the state to remove the deleted task
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
                alert(response.data.message);
                setLoading(false); // Set loading to false when delete operation is complete
            })
            .catch((error) => {
                console.error('Error deleting task:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    };

    return (
        <div>
            <TodoNav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>Your Task List</h1>
                        {loading && <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {tasks.map((task) => (
                            <div key={task.id}>
                                <p>Task ID: {task.id}</p>
                                <p>Task Name: {task.name}</p>
                                <p>Description: {task.description}</p>
                                <p>Priority: {task.priority}</p>
                                <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">
                                    Delete
                                </button>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteTodo;
