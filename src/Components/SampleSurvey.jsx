import React, { useState } from 'react';

 const SampleSurvey = () => {

  const [ surveyName, setSurveyName ] = useState("")

  console.log( 'surveyName : ', surveyName )

    const [addSurveyData, setAddSurveyData] = useState({
        question : "",
        factor: "",
        weightage: "",
        option1: "",
        rating1:"",
        option2: "",
        rating2:"",
        option3: "",
        rating3:"",
        option4: "",
        rating4:"",
        option5: "",
        rating5:"",
      });

      const handleChange = (e) => {
        setAddSurveyData({ ...addSurveyData, [ e.target.name ] : e.target.value });
      };
    
      const handleAddData = async (e) => {
        e.preventDefault();
        if (
          !addSurveyData.question ||
          !addSurveyData.factor ||
          !addSurveyData.weightage ||
          !addSurveyData.option1
        ) {
          return alert("question, category and subcategoy one is mandatory.");
        }
        fetch("http://localhost:5000/serveyData", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addSurveyData),
        }).then((response) => {
          setAddSurveyData({
            question : "",
            factor: "",
            weightage: "",
            option1: "",
            rating1:"",
            option2: "",
            rating2:"",
            option3: "",
            rating3:"",
            option4: "",
            rating4:"",
            option5: "",
            rating5:"",
          });
        });
      };

  return (
    <>
    <div className="container my-2 py-2">
                <h2>Add survey data : </h2>
              </div>
              <div className="container border shadow col-6 text-center my-4 p-2 bg-light">
                <form>
                  <div className="surveyName">
                  <select value={ surveyName } name='surveyName' onChange={(e)=> setSurveyName(e.target.value)} 
                      className='p-1 mx-1'>
                      <option value="">Select Survey</option>
                      <option value="mental health">Mental health</option>
                      <option value="student">Student</option>
                      <option value="travel">Travel</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Add Question</label>
                    <input type="text"
                      className="form-control" name="question"
                      value={addSurveyData.question}
                      onChange={handleChange} />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Add Factor
                    </label>
                    <input type="text"
                      className="form-control" name="factor"
                      value={ addSurveyData.factor }
                      onChange={ handleChange } />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Add weightage
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="weightage"
                      value={ addSurveyData.weightage }
                      onChange={ handleChange }
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="exampleInputPassword1"
                      className="form-label">Option 1</label>
                    <div style={{ display : "flex" }}>
                    <input type="text" className="form-control mx-1" name="option1"
                      value={addSurveyData.option1} onChange={handleChange}/>
                      <select value={ addSurveyData.rating1 } name='rating1' onChange={handleChange} 
                      className='p-1 mx-1'>
                      <option value="">Rate option 1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="exampleInputPassword1"
                      className="form-label">Option 2</label>
                    <div style={{ display : "flex" }}>
                    <input type="text" className="form-control mx-1" name="option2"
                      value={addSurveyData.option2} onChange={handleChange}/>
                      <select value={ addSurveyData.rating2 } name='rating2' onChange={handleChange} 
                      className='p-1 mx-1'>
                      <option value="">Rate option 2</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="exampleInputPassword1"
                      className="form-label">Option 3</label>
                    <div style={{ display : "flex" }}>
                    <input type="text" className="form-control mx-1" name="option3"
                      value={addSurveyData.option3} onChange={handleChange}/>
                      <select value={ addSurveyData.rating3 } name='rating3' onChange={handleChange} 
                      className='p-1 mx-1'>
                      <option value="">Rate option 3</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="exampleInputPassword1"
                      className="form-label">Option 4</label>
                    <div style={{ display : "flex" }}>
                    <input type="text" className="form-control mx-1" name="option4"
                      value={addSurveyData.option4} onChange={handleChange}/>
                      <select value={ addSurveyData.rating4 } name='rating4' onChange={handleChange} 
                      className='p-1 mx-1'>
                      <option value="">Rate option 4</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="exampleInputPassword1"
                      className="form-label">Option 5</label>
                    <div style={{ display : "flex" }}>
                    <input type="text" className="form-control mx-1" name="option5"
                      value={addSurveyData.option5} onChange={handleChange}/>
                      <select value={ addSurveyData.rating5 } name='rating5' onChange={handleChange} 
                      className='p-1 mx-1'>
                      <option value="">Rate option 5</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={(e) => handleAddData(e)}
                  >
                    Submit
                  </button>
                </form>
              </div>
              </>
  )
}

export default SampleSurvey;