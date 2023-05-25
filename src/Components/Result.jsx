import React, { useLayoutEffect, useState, useEffect } from "react";
import resultImg from "../assets/result_img.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import Speedometer from "./Speedometer";
import score1 from "../assets/score1.jpeg";
import score2 from "../assets/score2.jpeg";
import score3 from "../assets/score3.jpeg";
import score4 from "../assets/score4.jpeg";
import score5 from "../assets/score5.jpeg";
import score6 from "../assets/score6.jpeg";
import score7 from "../assets/score7.jpeg";
import score8 from "../assets/score8.jpeg";
import score9 from "../assets/score9.jpeg";
import score10 from "../assets/score10.jpeg";


export const Result = () => {

  const [ lastResult, setLastResult ] = useState("")
  const navigate = useNavigate();
  const [score, setScore] = useState(0); // Initial score state

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error('Error parsing user data from local storage:', error);
  }
  
  
  
const  result = JSON.parse(localStorage.getItem("calculateResult"))
let email
if (user) {
  email = user.email;
  // Use the email for API requests or further processing
} else {
  console.error('User data not found in local storage.');
}


console.log("user from result page and email : ", user,  email )

  // useEffect(()=> {
  //    setScore(Number(result))
     
    
  //   },[])

    const fetchLastResult = async () => {
      try {
        const response = await axios.post('http://localhost:5000/last-result', { email });
        console.log('Response:', response.data);
        // Handle the server response here
      } catch (error) {
        console.error('Error sending POST request:', error);
        // Handle error condition here
      }
    };

   
  useEffect(()=> {
  
    fetchLastResult()
  },[])



  let speedometerImage = '';

    if (score <= 10) {
    speedometerImage = score1; 
  } 
  else if (score >= 11 && score <= 20) {
    speedometerImage = score2; 
  } 
  else if (score >= 21 && score <= 30) {
    speedometerImage = score3;
  } 
else if (score >= 31 && score <= 40) {
        speedometerImage = score4;
      }
      else if (score >= 41 && score <= 50) {
        speedometerImage = score5;
      }
else if (score >= 51 && score <= 60) {
    speedometerImage = score6;
  } 
else if (score >= 61 && score <= 70) {
        speedometerImage = score7;
      } 
      else if (score >= 71 && score <= 80) {
        speedometerImage = score8;
      }
      else if (score >= 81 && score <= 90) {
        speedometerImage = score9;
      }
else {
    speedometerImage = score10;
  }

  const handleFinish = ()=>{

    localStorage.clear()
    navigate("/")
  };


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="container border shadow m-4 text-center">
        <div className="border m-4">
          <div>
            <img src={resultImg} alt="" style={{ height: "40vh" }} />
          </div>

          <div className="head">
            <h1>Thank You!!! for taking the HMA assessment.</h1>
          </div>

          <div>
            <button
              className="btn btn-outline-dark text-success"
              style={{ fontWeight: "500" }}
              onClick={() => navigate("/login")}
            >
              Login / Signup <a href="">for future reference</a>
            </button>
          </div>

          <div className="paras m-4">
            <p>
              You can take this assessment as many times as possible, although
              it is recommneded that you take it in gaps of 14 days, to monitor
              your progress.
            </p>
            <p>
              Do not worry, we will remind you if you forget to come back in 14
              days. To get the reminder, please sign up with us.
            </p>
          </div>
          <hr />

          <h4 className="text-success m-4">
            Below is the comparison of your Previous vs current assessment{" "}
          </h4>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="card p-2 mx-3" style={{ width: "30rem" }}>
              <h4>Previous Test Result</h4>
              {/* <img src={score1} className="card-img-top" alt="..." /> */}
              {/* <Speedometer/> */}


              <div>
      <h2>Test Result Speedometer</h2>
      {/* <input type="number" value={result} onChange={updateScore} /> */}
      <div className="speedometer">
        <img src={speedometerImage} alt="Speedometer" className="speedometer-image" style={{ width: "11rem"}} />
        <div className="pointer" style={{ transform: `rotate(${(score / 100) * 180}deg)` }}></div>
      </div>
      <p>Score: {score}</p>
    </div>



              <div className="card-body">
                <h5 className="card-title">Bad</h5>
                <p className="card-text">
                  The result is based on the response generated by you.
                </p>
              </div>
            </div>
            <div className="card p-2 mx-3" style={{ width: "30rem" }}>
              <h4>Current Test Result</h4>
              {/* <img src={score2} className="card-img-top" alt="..." /> */}
              {/* <Speedometer/> */}


              <div>
      <h2>Test Result Speedometer</h2>
      {/* <input type="number" value={result} onChange={updateScore} /> */}
      <div className="speedometer">
        <img src={speedometerImage} alt="Speedometer" className="speedometer-image" style={{ width: "11rem"}} />
        <div className="pointer" style={{ transform: `rotate(${(score / 100) * 180}deg)` }}></div>
      </div>
      <p>Score: {score}</p>
    </div>


              <div className="card-body">
                <h5 className="card-title">Progressive</h5>
                <p className="card-text">
                The result is based on the response generated by you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="finish">

<button className="btn btn-warning" onClick={handleFinish}>
  Click To End
</button>
        </div>

      </div>
    </div>
  );
};
