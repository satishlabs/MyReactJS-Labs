import { Component } from "react";
import "../student/Student.css";
import Course from '../course/Course';

class Student extends Component{
    state={
        sid:1000,
        sname:"Kaushik Prasad",
        email:"k@gmail",
        phone:12345,
        city:"Ranchi",
        showStudent: false,
    }

    showStudentInfo = () =>{
        console.log("Button is Clicked...");
        let studentFlag = this.state.showStudent;

        this.setState({
            showStudent:!studentFlag
        });
    }

    render(){
        console.log("I am student component");
        let mystudentInfo = null;
        if(this.state.showStudent === true){
          mystudentInfo = (
            <div>
                <p>SID: {this.state.sid}</p>
                <p>Sname: {this.state.sname}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <p>City: {this.state.city}</p>
                <br/>
                <Course/>
            </div>
          )  
        }

        return(
            <div className="mystudent">
                <button className="mybutton" onClick={this.showStudentInfo}>Student Details</button>
              {mystudentInfo}
            </div>
        )
    };
}
export default Student;