
import { Component, React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from './mycourses/CourseList';


class App extends Component{
  state ={
     companyName : "SatishLabs",
     courseName : "ReactJS",
     mycourseList: [
      { cid : 101, cname : "Angular", trainer : "Srinivas", price: 15000, isOnline:true }, 
      { cid : 102, cname : "React JS", trainer : "Srinivas", price: 15000, isOnline:false }, 
      { cid : 103, cname : "Java FSD", trainer : "Srinivas", price: 55000, isOnline:false }, 
      { cid : 104, cname : "Spring Boot", trainer : "Srinivas", price: 25000, isOnline:true }, 
      { cid :105,cname : "MicroServices",trainer:"Srinivas", price:225000, isOnline:true }, 
    ]};
    render(){
      return (
        <div>
         <p className='text-center'>Welcome to {this.state.companyName}!!</p>
         <p className='text-center'>You are learning {this.state.courseName} from Satish Prasad</p>
         <ul class="nav justify-content-end">
         <li class="nav-item">
          <a class="nav-link active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Contact</a>
        </li>
        </ul>
        <br/>
        <div className='container'>
          <CourseList mycourses = {this.state.mycourseList}/>
        </div>
        </div>
      );
    }

}

export default App;
