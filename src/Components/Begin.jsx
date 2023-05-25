import React, { useEffect, useState } from 'react';
import homeImg from "../assets/home_img.svg"
import { useNavigate } from 'react-router-dom';

export const Begin = ({ setOnBoard, setShowNav }) => {

  let token = localStorage.getItem("token")

  const navigate = useNavigate()


  useEffect(()=>{
    navigate("/")
  }, [ token ])

  return (
    <div className='container begin'>
      <div>
        <h1>Start the journey in exploring your "Harmony With Mind</h1>
        <p> This assessment will help you to understand how your mental health is in general. </p>

        {
            !token ? <button className="btn btn-success"  onClick={()=>
              {
                setOnBoard(true)
                setShowNav(false)
              }
              }>
                
                Begin your assessment as a guest</button>
                : 
                <button className="btn btn-success"  onClick={()=>
                  {
                    setOnBoard(true)
                    setShowNav(false)
                  }
                  }> 
                    Begin your assessment</button>
        }
      </div>
      <div>
        <img  className='homeImg' src={ homeImg } alt="homeImg" />
      </div>
    </div>
  )
}
