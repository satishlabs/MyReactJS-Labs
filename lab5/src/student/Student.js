import { Component } from "react";
import "../student/Student.css";
import Course from '../course/Course';

class Student extends Component{
    

    render(){
        console.log("I am student component");
        return(
            <div className="mystudent">
              <p>Sid: {this.props.mystudent.sid}</p>
              <p>Sname: {this.props.mystudent.sname}</p>
              <p>Email: {this.props.mystudent.email}</p>
              <p>Phone: {this.props.mystudent.phone}</p>
              <p>City: {this.props.mystudent.city}</p>

              <Course mycourse={this.props.mystudent.course}/>
            </div>
        )
    };
}
export default Student;