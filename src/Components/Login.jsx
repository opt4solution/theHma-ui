import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "./Signup";

const Login = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const [registerVal, setRegisterVal] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    phoneNumber : "",
  });

  const fetchLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginValue),
    });
    result = await result.json();
    return result;
  };

  const handleChange = (e) => {
    if (registerForm) {
      setRegisterVal({ ...registerVal, [e.target.name]: e.target.value });
    } else {
      setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginValue.email) {
      return alert("Please enter correct email");
    }
    if (!loginValue.password) {
      return alert("Please enter correct password");
    }
    let result = await fetchLogin();
    if (result) {
      localStorage.setItem("token", result.accessToken);
      return navigate("/");
    }
  };

  

  return (
    <div className="bg-login">
      <div className="container py-4">
        {!registerForm ? (
          <div className='container border border-primary" col-5 text-center shadow p-4 loginForm'>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={loginValue.email}
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
                  value={loginValue.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-outline-dark" onClick={handleLogin}>
                Login
              </button>
              <button
                className="btn btn-dark mx-4"
                onClick={(e) => {
                  setRegisterForm(true);
                  e.preventDefault();
                }}
              >
                New User
              </button>
            </form>
          </div>
        ) : 
        <Signup setRegisterForm={ setRegisterForm } registerForm={ registerForm } registerVal={registerVal} setRegisterVal={setRegisterVal} />
        }
      </div>
    </div>
  );
};

export default Login;