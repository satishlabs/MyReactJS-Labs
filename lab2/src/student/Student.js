import { Component } from "react";
import "../student/Student.css";
import Course from "../course/Course";

class Student extends Component{
    state={
        sid:1000,
        sname:"Kaushik Prasad",
        email:"k@gmail",
        phone:12345,
        city:"Ranchi",
    }

    render(){
        console.log("I am student component");
        return(
            <div className="mystudent">
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
}
export default Student;