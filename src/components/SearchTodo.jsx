import React, { useState } from 'react';
import TodoNav from './TodoNav';
import axios from 'axios';

const SearchTodo = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true); // Set loading to true when starting the search
    // Send a POST request to the Django search endpoint
    axios
      .post('http://127.0.0.1:8000/search/', { search_keyword: searchKeyword })
      .then((response) => {
        setSearchResults(response.data.tasks);
      })
      .catch((error) => {
        console.error('Error searching tasks:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when search is completed
      });
  };

  return (
    <div>
      <TodoNav />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cvol-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col md-12 col col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Search
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <div className="col col-12 col-sm-12 col md-12 col col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
            <div>
              <h2>Search Results</h2>
              {loading && <p>Loading...</p>} {/* Display loading message if loading is true */}
              {!loading &&
                searchResults.map((task) => (
                  <div key={task.id}>
                    <p>Task ID: {task.id}</p>
                    <p>Name: {task.name}</p>
                    <p>Description: {task.description}</p>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTodo;
