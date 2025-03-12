
import { Component, React } from 'react';
import './App.css';

class App extends Component{
    state = {
       companyName : "SatishLabs",
       courseName : "ReactJS",
       myheader :"We are having different types of properties...",

       //Simple Types Properties
       sid: 105,
       sname:"Satish",
       email:"sa@gmail",
       phone:"1234",
       city:"Ranchi",
       dob: new Date(1990, 0, 1), // Set DOB as January 1, 1990
       isActive: true,
        mycourse:{ //Objct types
          courseId: "C-122",
          courseName: "React",
          price: 2500,
          trainer: "Srinivas",
          isOnline:true,
      },
      mycourseNames:["Angular","ReactJS","MongoDB","NodeJS","ExpressJS"],
      mycourseList:[
        {courseId: "C-101", courseName: "ReactJS", price: 15000, trainer: "Satish Prasad"},
        {courseId: "C-102", courseName: "SpringBoot", price: 5000, trainer: "Satish Prasad"},
        {courseId: "C-103", courseName: "Angular", price: 20000, trainer: "Satish Prasad"},
        {courseId: "C-104", courseName: "NodeJS", price: 12000, trainer: "Satish Prasad"},
        {courseId: "C-105", courseName: "ExpressJS", price: 10000, trainer: "Satish Prasad"},
      ]
    }

    showMoreInfo = (mycid) =>{
      console.log("Course Id : ",mycid);
    }

  render(){
    console.log("I am App Component...");
     // Format the date to a readable string
     const formattedDOB = this.state.dob.toDateString(); // or you can use toLocaleDateString()
    let mycourseNamesDisplay = this.state.mycourseNames.map(
      (courseName,myindex) => (
      <li key={myindex}>{myindex} - {courseName}</li>
      )
    );

    let mycourseListDisplay = this.state.mycourseList.map(
      (mycourse) =>(
        <tr key={mycourse.courseId}>
          <td>{mycourse.courseId}</td>
          <td>{mycourse.courseName}</td>
          <td>{mycourse.price}</td>
          <td>{mycourse.trainer}</td>
          <td>
          <button onClick={this.showMoreInfo.bind(this,mycourse.courseId)} 
          className="mybutton"> 
          More Info 
          </button> 
          </td>
        </tr>
      )
    );

    return (
     
      <div className="mydata">
       <p>Welcome to {this.statecompanyName}!!</p>
       <p>You are learning {this.state.courseName} from Satish Prasad</p>
       <p><b>{this.state.myheader}</b></p>
       <div>
          <h3><u>1. Simple Types Of Properties:</u></h3>
          <p>Sid: {this.state.sid}</p>
          <p>Sname: {this.state.sname}</p>
          <p>Email: {this.state.email}</p>
          <p>Phone: {this.state.phone}</p>
          <p>City: {this.state.city}</p>
          <p>Dob: {formattedDOB}</p>
          <p>Active: {this.state.isActive ? 'Yes' : 'No'}</p>
       </div>
       <div>
        <h3><u>2. Object Types Of Properties:</u></h3>
        <p>CourseId: {this.state.mycourse.courseId}</p>
        <p>CourseName: {this.state.mycourse.courseName}</p>
        <p>Price: {this.state.mycourse.price}</p>
        <p>Trainer: {this.state.mycourse.trainer}</p>
        <p>Online: {this.state.mycourse.isOnline ? 'Yes' : 'No'}</p>
       </div>
       <div>
       <h3><u>3. Array Of Simple Type Properties:</u></h3>
        <h1>Courses Available: </h1>
        {mycourseNamesDisplay}
       </div>
        <h3>4. Array of Object Types </h3>
        <table>
          <thead>
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Pirce</th>
              <th>Trainer</th>
              <th></th>
            </tr>
            </thead>
          <tbody>
            {mycourseListDisplay}
          </tbody>
        </table>
       <br/>
      </div>
    );
  }

}

export default App;
