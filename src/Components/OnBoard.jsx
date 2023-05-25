import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png"


export const OnBoard = ({ setAssessment, setOnBoard, handleStartSurvey }) => {

    const [ userType, setUserType ] = useState("");
    const handleChange = (e) => {
        setUserType({ ...userType, [ e.target.name ] : e.target.value });
      };

      

      // check if later it is reqd or not if not remove useEffect --->
      useEffect(()=>{

      }, [userType])

  return (
    <div style={{ display:"flex" , justifyContent:"center"}}>
        <div className="container border shadow text-center m-4">

<div className="img">
        <img className='m-4' src={logo} alt="" />
        </div>
        <div className="subhead m-4">
            welcome on-board
        </div>

        <div className="paras m-4" style={{ fontSize:"17px", fontWeight:"450"}}>
            <p>
                Fantastic!! You have taken the first step to understand your mental health. You will enjoy answering these questions as you would be able to relate to them.
            </p>

            <p>
                To get accurate results, it is recommended that you respond by indicating how much the statement applied to you over the past one week and how you feel in general.
            </p>

            <p>
                While talking the survey, make sure you give your first immediate response and do not ponder over it. There is no right or wrong answer. indicate how much the statement applies to you.
            </p>
        </div>
        {/* <div className="userType">
        <select value={ userType } name='userType' onChange={handleChange} 
                      className='p-1 mx-1'>
                      <option value="">Select User Type</option>
                      <option value="employee">Employee</option>
                      <option value="student">Student</option>
                    </select>
        </div> */}

        {
            userType.length == 0 ? <div className="userType">
            <select value={ userType } name='userType' onChange={handleChange} 
                          className='p-1 mx-1'>
                          <option value="">Select User Type</option>
                          <option value="employee">Employee</option>
                          <option value="student">Student</option>
                        </select>
            </div> : 

             <div className="button m-4" style={{ fontSize:"18px", fontWeight:"450"}}>
            <button className="btn btn-success" onClick={()=> {
                setAssessment(true)
                setOnBoard(false)
                handleStartSurvey()
                localStorage.removeItem("respSet");
            }}>
                Sure, Let's Start !!
            </button>
        </div> 
        
        }
        </div>
    </div>
  )
}
