
import './App.css';
import { Component } from 'react';
import Student from './student/Student';

class App extends Component{
  state={
    companyName:"SatishLabs",
    trainer:"Satish Prasad",
    myheader : "Passing Data from One Component to another Component",
     student:{
      sid:1000,
      sname:"Kaushik Prasad",
      email:"k@gmail",
      phone:12345,
      city:"Ranchi",
      course:{
          courseId:"c-100",
          courseName:"ReactJS",
          cost: 15000,
          trainer: "SP",
          duration: "50 Hours",
      }
  }
  
  }
  render(){
    console.log("I am app component");
    return(
      <div className="myheader">
        <p>Welcome to {this.state.companyName}!!</p>
        <p>You are learning ReactJS from {this.state.trainer}</p>
        <p><b>{this.state.myheader}</b></p>
        <br/>
        <Student mystudent = {this.state.student}/>
      </div>
    )
  }
}

export default App;
