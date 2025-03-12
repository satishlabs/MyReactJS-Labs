
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MyStudentProvider } from './studentContxt';
import { MyCourseProvider } from './courseContext';

import StudentComponent from './StudentComponent';
import CourseComponent from './CourseComponent';
import TestComponent from './TestComponent';

class App extends Component{
  render(){
    return(
      <MyStudentProvider>
        <MyCourseProvider>
      <div className='App Container'>
        <StudentComponent/>
        <CourseComponent/>
        <br/>
        <TestComponent/>
      </div>
      </MyCourseProvider>
      </MyStudentProvider>
      
    )
  }

}

export default App;
