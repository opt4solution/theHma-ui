import React, { useState } from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import SampleSurvey from "./SampleSurvey";

const Profile = () => {
  const navigate = useNavigate();

  const authPerson = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {authPerson === null ? (
        <div className="text-center container my-4 p-4">
          <div
            style={{
              marginBottom: "75vh",
              fontWeight: "bold",
              fontSize: "20px",
            }} 
          >
            Please login first or signup...
            <br />
            <button
              className="btn btn-success my-4"
              onClick={() => navigate("/login")}
            >
              {" "}
              Go To Login / sign-up{" "}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="container col-12 border shadow p-4 my-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            <div className="info">
              <p>name : {authPerson?.name}</p>
              <p>email : {authPerson?.email}</p>
              <p>role : {authPerson?.role}</p>
            </div>
            <div className="text-center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.uE6Us0z5TPffZTS-yg8YvgAAAA&pid=Api&P=0"
                alt=""
                style={{ height: "100px" }}
              />
            </div>
          </div>

          <hr className="line"  style={{ marginBottom:"5vh"}} />

          { (authPerson?.role === "admin" || authPerson?.role === "hr" )? <UserList /> : ""}

          {authPerson.role === "admin" ? (
            <>
            <hr style={{ marginBottom:"10vh"}} />
            <SampleSurvey/>
            </>
          ) : (
            <div style={{ marginTop: "75vh" }}></div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
