import React, { useEffect, useState } from 'react';
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



const Speedometer = () => {

  let result = JSON.parse(localStorage.getItem("calculateResult"))
  const [score, setScore] = useState(0); // Initial score state

  const updateScore = (event) => {
    const newScore = event.target.value; // Get the updated score from the input
    setScore(newScore); // Update the score state
    
  };

  useEffect(()=> { setScore(result)},[])
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

  return (
    <div>
      <h2>Test Result Speedometer</h2>
      {/* <input type="number" value={result} onChange={updateScore} /> */}
      <div className="speedometer">
        <img src={speedometerImage} alt="Speedometer" className="speedometer-image" style={{ width: "11rem"}} />
        <div className="pointer" style={{ transform: `rotate(${(score / 100) * 180}deg)` }}></div>
      </div>
      {/* <p>Score: {score}</p> */}
    </div>
  );
};

export default Speedometer;
