import React, { useState, useEffect } from 'react';
import TodoNav from './TodoNav';
import axios from 'axios';

const ViewTodo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/view/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Error fetching tasks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TodoNav />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            {loading && <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>}
            {error && <p>{error}</p>}
            <div className="row g-1">
              {data.map((value) => (
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={value.id}>
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">User Id: {value.id}</h5>
                      <h5 className="card-title">Title: {value.name}</h5>
                      <p>Description: {value.description}</p>
                      <p>Priority: {value.priority}</p>
                      {/* Add more details as needed */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTodo;
