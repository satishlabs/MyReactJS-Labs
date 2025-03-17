
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { MyCourseProvider } from './courseContext';

import CourseComponent from './CourseComponent';


class App extends Component{
  render(){
    return(

        <MyCourseProvider>
      <div className='App Container'>

        <CourseComponent/>

      </div>
      </MyCourseProvider>

      
    )
  }

}

export default App;
