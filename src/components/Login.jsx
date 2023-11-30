import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
    axios.post("http://127.0.0.1:8000/log/",data).then((response)=>{
      changeData(response.data)

      if (response.data.length>0){
      
        const getid=response.data[0].id
        alert(getid)
        const getName=response.data[0].name
        sessionStorage.setItem("id",getid)
        sessionStorage.setItem("name",getName)
        navigate("add")
      }else{
        alert("Invalid Credentials")
      }

    })
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row">
              <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <section class="vh-100 bg-image">
                  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                      <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                          <div class="card" >
                            <div class="card-body p-5">
                              <h2 class="text-uppercase text-center mb-5">Login</h2>

                              <form>


                                <div class="form-outline mb-4">
                                  <input type="email"  name='username' value={data.username} onChange={inputHandler} id="form3Example3cg" class="form-control form-control-lg" />
                                  <label class="form-label" for="form3Example3cg">Your Email</label>
                                </div>

                                <div class="form-outline mb-4">
                                  <input type="password" name='password' value={data.password} onChange={inputHandler} id="form3Example4cg" class="form-control form-control-lg" />
                                  <label class="form-label" for="form3Example4cg">Password</label>
                                </div>




                                <div class="d-flex justify-content-center">
                                  <button type="button" onClick={readValue}
                                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                </div>

                                <p class="text-center text-muted mt-5 mb-0">Dont Have already an account? <a href="/register"
                                  class="fw-bold text-body"><u>Register</u></a></p>

                              </form>

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

export default Login