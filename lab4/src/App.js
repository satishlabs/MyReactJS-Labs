
import './App.css';
import { Component } from 'react';
import Student from './student/Student';

class App extends Component{
  state={
    companyName:"SatishLabs",
    trainer:"Satish Prasad"
  }
  render(){
    console.log("I am app component");
    return(
      <div className="myheader">
        <p>Welcome to {this.state.companyName}!!</p>
        <p>You are learning ReactJS from {this.state.trainer}</p>
        <p><b>Passing Data from One Component to another Component</b></p>
        <br/>
        <Student/>
      </div>
    )
  }
}

export default App;
