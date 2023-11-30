import React from 'react';

const TodoNav = () => {
  return (
    <div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/add">
                  <img
                    src="https://st2.depositphotos.com/1823785/7833/i/450/depositphotos_78333908-stock-photo-many-people-hands-holding-red.jpg"
                    alt=""
                    style={{ width: '50px', marginRight: '10px' }} // Set the width and margin as per your preference
                  />
                  Task App
                </a>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/view">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/view">View All Tasks</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/mytask">My Task</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/add">Add Task</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/search">Search Task</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/remove">Remove Task</a>
                        </li>

                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default TodoNav;
