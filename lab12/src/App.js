
import React from 'react';
import './App.css';
import MyCourses from './Mycourses';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
 
    return(
      <div className='container'>
        <h1 className='text-center'>Welcome to SatishLabs!!</h1>
        <br/>
        <MyCourses/>
      </div>
    )
  }

export default App;
