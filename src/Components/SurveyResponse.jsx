import React from 'react';
import { useNavigate } from 'react-router-dom';

function SurveyResponse() {

    const responseArray = JSON.parse(localStorage.getItem('respSet'));
    const result = JSON.parse(localStorage.getItem('calculateResult'));
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const surveyResponse = {
      userEmail :  (!user.email) ? "guest" : user.email ,
      responses : responseArray,
      result
    };

    fetch('http://localhost:5000/api/survey-response', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(surveyResponse)
      
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error saving survey response');
        }
        return response.json();
      })
      .then(data => {
        console.log('Survey response saved:', data);
      })
      .catch(error => {
        console.error('Error saving survey response:', error);
      });

      navigate("/result")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SurveyResponse;
