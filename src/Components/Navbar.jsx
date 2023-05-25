import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  useEffect(() => {}, [token]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          <img className="mx-4" src={logo} alt="" />
          <button
            className="navbar-toggler border-dark my-2 mx-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item dropdown m-4 btn btn-outline-success"
                onClick={() => navigate("/profile")}
              >
                Profile
              </li>

              {!token ? (
                <li
                  className="nav-item dropdown m-4 btn btn-outline-success"
                  onClick={() => navigate("/login")}
                >
                  Login / Signup
                </li>
              ) : (
                <li
                  className="nav-item dropdown m-4 btn btn-outline-success"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Logout
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
