import React, { useEffect, useState } from 'react';
import TodoNav from './TodoNav';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const MyTask = () => {
    const [loading, setLoading] = useState(true);
    const [data, changeData] = useState({
        userid: sessionStorage.getItem('id'),
    });

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        setLoading(true); // Set loading to true when starting the data fetch
        axios.post('http://127.0.0.1:8000/mytask/', data).then((response) => {
            console.log(response.data);
            changeResult(response.data);
            setLoading(false); // Set loading to false when data fetch is complete
        });
    };

    const updateTask = (taskId, isCompleted) => {
        setLoading(true); // Set loading to true when starting the update
        axios
            .post('http://127.0.0.1:8000/update/', { task_id: taskId, is_completed: isCompleted })
            .then((response) => {
                console.log(response.data);
                // Refetch the updated data after each update
                readValue();
            })
            .catch((error) => {
                console.error('Error updating task:', error);
            });
    };

    const [result, changeResult] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        readValue();
    }, []);

    const handleUpdateModalShow = (task) => {
        setSelectedTask(task);
        setShowUpdateModal(true);
    };

    const handleUpdateModalClose = () => {
        setShowUpdateModal(false);
        setSelectedTask(null);
    };

    const handleUpdateSubmit = () => {
        // Implement the logic to update the task details
        // You can use the selectedTask.id and input values to send the update request
        setLoading(true); // Set loading to true when starting the update
        axios
            .post('http://127.0.0.1:8000/update/', {
                task_id: selectedTask.id,
                is_completed: selectedTask.is_completed,
                name: selectedTask.name,
                description: selectedTask.description,
                priority: selectedTask.priority,
                date: selectedTask.date,
            })
            .then((response) => {
                console.log(response.data);
                alert(response.data.message);
                readValue();
                handleUpdateModalClose();
            })
            .catch((error) => {
                console.error('Error updating task:', error);
            });
    };

    return (
        <div>
            <TodoNav />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h3>My Tasks</h3>
                                {loading && <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>}

                                {result.map((value, i) => (
                                    <div className="row g-3">
                                        <div
                                            className={`col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 xol-xxl-6 ${value.is_completed ? 'completed-task' : 'incomplete-task'
                                                }`}
                                            key={value.id}
                                        >
                                            <h5 className="card-title">{value.name}</h5>
                                            <p>Description: {value.description}</p>
                                            <p>Priority: {value.priority}</p>
                                            <label >
                                                <input
                                                    type="checkbox"
                                                    checked={value.is_completed}
                                                    onChange={() => updateTask(value.id, !value.is_completed)}
                                                />
                                              <p  >Click The Checkbox For Completed</p> 
                                            </label>

                                            <br />
                                            <br />
                                            <Button variant="primary" onClick={() => handleUpdateModalShow(value)}>
                                                Update
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            <Modal show={showUpdateModal} onHide={handleUpdateModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTaskName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter task name"
                                value={selectedTask?.name || ''}
                                onChange={(e) => setSelectedTask({ ...selectedTask, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTaskDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter task description"
                                value={selectedTask?.description || ''}
                                onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTaskPriority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedTask?.priority || ''}
                                onChange={(e) => setSelectedTask({ ...selectedTask, priority: e.target.value })}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleUpdateModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <br />
        </div>
    );
};

export default MyTask;
