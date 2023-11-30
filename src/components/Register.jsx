import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate=useNavigate()

  const[data,changeData]=useState({
   
    "username":"",
    "password":""
  })

  const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    console.log(data)
    axios.post("http://127.0.0.1:8000/reg/",data).then((response)=>{
      alert(response.data.status)
      navigate("/")
    })
  }
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">

                <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
                  <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                          <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                              <img
                                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/bossy-woman-eye-colorful-make-up-styling-free-photo.jpg?w=600&quality=80"
                                alt="login form"
                                className="img-fluid"

                              />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                              <div className="card-body p-4 p-lg-5 text-black">
                                <form>
                                  <div className="d-flex align-items-center mb-3 pb-1">
                                    <i className="fas fa-cubes fa-2x me-3"></i>
                                    <span className="h1 fw-bold mb-0">Task App</span>
                                  </div>

                                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                                    Sign Up
                                  </h5>

                                  

                                  <div className="form-outline mb-4">
                                    <input name='username' value={data.username} onChange={inputHandler} type="email" id="form2Example17" className="form-control form-control-lg" />
                                    <label className="form-label" >
                                      Email address
                                    </label>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <input name='password' onChange={inputHandler} value={data.password} type="password" id="form2Example27" className="form-control form-control-lg" />
                                    <label  className="form-label">
                                      Password
                                    </label>
                                  </div>

                                  <div className="pt-1 mb-4">
                                    <button onClick={readValue} className="btn btn-dark btn-lg btn-block" type="button">
                                      Register
                                    </button>
                                  </div>

                                  <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                    Already have an account? <a href="/" style={{ color: '#393f81' }}>login here</a>
                                  </p>
                                </form>
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
  )
}

export default Register
