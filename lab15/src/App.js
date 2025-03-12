
import {useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Courses';
import { useState } from 'react';


const App = () =>{
  const[courseFlagState, setCourseFlagState] = useState(true);
  useEffect(() =>{
    console.log("[App] - 1st - useEffect]");
    //Do Initilization
    //Timers
    return () =>{
      //CleanUp
      console.log("[App] - Cleanup - 1st - useEffect()");
    }
  });

  useEffect(() =>{
    console.log("[App] - 2nd - useEffect()");
    //Do Initilization
    //Timers
    return () =>{
      //CleanUp
      console.log("[App] - Cleanup - 2nd - useEffect()");
    }
  },[]);

  useEffect(() =>{
    console.log("[App] - 3rd - useEffect()");
    //Do Initilization
    //Timers
    return () =>{
      //CleanUp
      console.log("[App] - Cleanup - 3rd - useEffect()");
    }
  },[]);
    const showHideCourses = () =>{
      console.log("[App] - showHideCourses()] - Button - Clicked");
      setCourseFlagState(!courseFlagState);
    }

    let mycourses = null;
    if(courseFlagState===true){
      mycourses = (<Courses/>);
    }

    return(
      <div className='container'>
        <h1 className='text-center'>Welcome to SatishLabs!!</h1>
        <br/>
        <button  className="btn btn-success" onClick={showHideCourses}>Show/Hide Courses</button>
        <br/><br/>
        {mycourses}
      </div>
    );
}

export default App;
