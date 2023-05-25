import React, { useEffect, useState } from "react";
import { Assessment } from '../Components/Assessment';
import { Navbar } from '../Components/Navbar';
import { Begin } from '../Components/Begin'
import { OnBoard } from '../Components/OnBoard'


const Home = () => {

  const [startSurvey, setStartSurvey] = useState(false);
  const [surveyData, setSurveyData] = useState([]);
  const [ showNav, setShowNav ] = useState(true)
  const [ begin, setBegin ] = useState(true)
  const [ onBoard, setOnBoard ] = useState(false)
  const [ assessment, setAssessment ] = useState(false)


  useEffect(() => {
    fetch("http://localhost:5000/serveyData")
      .then((data) => data.json())
      .then((res) => setSurveyData(res))
      .catch((err) => console.log(err));
  }, [startSurvey]);

  const handleStartSurvey = () => {
    setStartSurvey(true);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log('token : ', token)
        fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('response : ', data)
            setData(data)
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [startSurvey, surveyData]);

  if (data !== "undefined") {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return (
    <div className="home-bg">
      {!startSurvey ? (
        <div className="container">
          { showNav ? <Navbar/> : "" }
          { showNav ? <Begin setOnBoard={setOnBoard} setShowNav={ setShowNav } /> : "" }
          { 
          onBoard ? <OnBoard setAssessment={ setAssessment } handleStartSurvey={ handleStartSurvey } setOnBoard={ setOnBoard } /> : ""
        }
        </div>
      ) : (
        <Assessment surveyData={surveyData} />
      )}
    </div>
  );
};

export default Home;
