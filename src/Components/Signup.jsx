import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = ({ setRegisterForm , registerForm, registerVal, setRegisterVal }) => {

const navigate = useNavigate()
  

  const fetchRegister = async () => {
    let result = await fetch("http://localhost:5000/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(registerVal),
    });
    result = await result.json();
    return result;
  };

  const handleChange = (e) => {
    if (registerForm) {
      setRegisterVal({ ...registerVal, [e.target.name]: e.target.value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !registerVal.email ||
      !registerVal.password ||
      !registerVal.name ||
      !registerVal.role ||
      !registerVal.phoneNumber
    ) {
      return alert("All fields are mandatory");
    }
    let result = await fetchRegister();
    if (result) {
      localStorage.setItem("token", result.accessToken);
      return navigate("/");
    }
  };

  return (
        <>
          <div className="container border col-6 text-center mt-4 shadow p-4 registerForm">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="name"
                  value={registerVal.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={registerVal.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="phoneNumber"
                  value={registerVal.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={registerVal.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">

              <label htmlFor="exampleInputPassword1" className="form-label">
              User Type
                </label>
                <br />
              <select value={ registerVal.role } name='role' onChange={handleChange} 
                      className='p-1 mx-1 form-control'>
                      <option value="">Select User Type</option>
                      <option value="employee">Employee</option>
                      <option value="business person">Business Person</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
              </div>
              <button className="btn btn-outline-dark" onClick={handleRegister}>
                Register
              </button>
              <button
                className="btn btn-dark mx-4"
                onClick={(e) => {
                  setRegisterForm(false);
                  e.preventDefault();
                }}
              >
                Back to login
              </button>
            </form>
          </div>
    </>
  )
}
