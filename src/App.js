// import { Route } from 'react-router-dom'; 
import './App.css';
import Home  from './Pages/Home';
import Login from './Components/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Result } from './Components/Result';
import Profile from './Components/Profile';
// import { AddSurveyData } from './Components/AddSurveyData';
import SampleSurvey from './Components/SampleSurvey';
import SurveyResponse from './Components/SurveyResponse';
import Speedometer from './Components/Speedometer';

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> } /> 
      <Route path='login' element={ <Login/> } />
      <Route path='result' element={ <Result/> } />
      <Route path='profile' element={ <Profile/> } />
       {/* remove from where should only available for admin ---> */}
      {/* <Route path='addSurveyData' element={ <AddSurveyData/> } /> */}
      <Route path='sampleSurvey' element={ <SampleSurvey/> } />
      <Route path='surveyResponse' element={ <SurveyResponse/> } />
      <Route path='speedometer' element={ <Speedometer/> } />
    </Routes>
    </BrowserRouter>
      
      {/* <Home/> */}
    </>
  );
}

export default App;
