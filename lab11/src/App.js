
import { Component } from 'react';
import './App.css';
import MyCourses from './Mycourses';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
 
  render(){
    return(
      <div className='container'>
        <h1 className='text-center'>Welcome to SatishLabs!!</h1>
        <MyCourses/>
      </div>
    )
  }
}

export default App;
