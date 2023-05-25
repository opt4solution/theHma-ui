import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Assessment = ({ surveyData }) => {
  let [count, setCount] = useState(0);
  let [ calculteResult, setCalculateResult ] = useState(0) // considering 1-5 rating for 1 option and if we have 20 options 
  // then it will consider for 100 marks or you have to calculate for 100% using different logics
  let [surveyResp, setSurveyResp] = useState({
    question: "",
    option: "",
  });
  let [respSet, setRespSet] = useState([]);
  const navigate = useNavigate();

  const handleCLick = async (option, rating) => {
    if (count <= surveyData.length - 1) {
      setRespSet([
        ...respSet,
        {
          question: surveyData[count]?.question,
          option,
          rating,
        },
      ]);

      setCalculateResult(calculteResult+=Number(rating))
      setCount(count + 1);
      console.log("count : ", count);
    }
  };

  console.log("calculteResult : ", calculteResult)
  let auth = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("respSet", JSON.stringify(respSet));
    localStorage.setItem("calculateResult", JSON.stringify(calculteResult));
    // navigate("/result");
    navigate("/SurveyResponse")
  };

  useEffect(() => {}, [count, surveyResp]);


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "15vh",
      }}
    >
      {surveyData.length > 0 && count <= surveyData.length - 1 ? (
        <div className="col-10 border shadow text-center p-4">
          <img className="mx-4" src={logo} alt="" />
          <hr />
          <div className="question m-4">
            <p>{surveyData[count]?.question}</p>
          </div>
          <div className="category m-4">
            <h3>Factor : {surveyData[count]?.factor} </h3>
          </div>
          <div className="category m-4">
            <h3>Sub-Factor : {surveyData[count]?.subfactor} </h3>
          </div>

          {surveyData[count]?.option1 ? (
            <div
              className="btn btn-success m-2 optionBtn"
              onClick={() => handleCLick(surveyData[count]?.option1, surveyData[count]?.rating1)}
            >
              {surveyData[count]?.option1}
            </div>
          ) : (
            ""
          )}

          {surveyData[count]?.option2 ? (
            <div
              className="btn btn-success m-2 optionBtn"
              onClick={() => handleCLick(surveyData[count]?.option2, surveyData[count]?.rating2)}
            >
              {surveyData[count]?.option2}
            </div>
          ) : (
            ""
          )}

          {surveyData[count]?.option3 ? (
            <div
              className="btn btn-success m-2 optionBtn"
              onClick={() => handleCLick(surveyData[count]?.option3, surveyData[count]?.rating3)}
            >
              {surveyData[count]?.option3}
            </div>
          ) : (
            ""
          )}

          {surveyData[count]?.option4 ? (
            <div
              className="btn btn-success m-2 optionBtn"
              onClick={() => handleCLick(surveyData[count]?.option4, surveyData[count]?.rating4)}
            >
              {surveyData[count]?.option4}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="col-10 border shadow text-center p-4">
          <img className="mx-4" src={logo} alt="" />
          <hr />
          <div>
            <h2>Thank you ! your survey ends here...</h2>
            <h5>Please click on submit to see your result.</h5>
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
