import React, { useState } from 'react';
import TodoNav from './TodoNav';
import axios from 'axios';

const AddTodo = () => {
  const [data, changeData] = useState({
    userid:sessionStorage.getItem("id"),
    
  });

  const inputHandler = (event) => {
    changeData({ ...data, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(data)
    axios.post(" http://127.0.0.1:8000/add/",data).then((response)=>{
        alert(response.data.status)
    })
  }

  return (
    <div>
      <TodoNav />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <section className="vh-100">
                  <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                          <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Task </p>

                                <div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                    <input
                                      type="text"
                                      name="name"
                                      value={data.name}
                                      onChange={inputHandler}
                                      id="form3Example1c"
                                      className="form-control"
                                    />
                                    <label className="form-label" htmlFor="form3Example1c">Title</label>
                                  </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                    <input
                                      type="text"
                                      name="description"
                                      value={data.description}
                                      onChange={inputHandler}
                                      id="form3Example3c"
                                      className="form-control"
                                    />
                                    <label className="form-label" htmlFor="form3Example3c">Description</label>
                                  </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="priority"
                                      id="lowPriority"
                                      value="low"
                                      checked={data.priority === "low"}
                                      onChange={inputHandler}
                                    />
                                    <label className="form-check-label" htmlFor="lowPriority">Low</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="priority"
                                      id="mediumPriority"
                                      value="medium"
                                      checked={data.priority === "medium"}
                                      onChange={inputHandler}
                                    />
                                    <label className="form-check-label" htmlFor="mediumPriority">Medium</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="priority"
                                      id="highPriority"
                                      value="high"
                                      checked={data.priority === "high"}
                                      onChange={inputHandler}
                                    />
                                    <label className="form-check-label" htmlFor="highPriority">High</label>
                                  </div>
                                </div>

                               

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                  <button type="button" onClick={readValue} className="btn btn-primary btn-lg">Add Task</button>
                                </div>

                              </div>
                              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                  className="img-fluid"
                                  alt="Sample image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
