import { Component } from "react";
import '../course/Course.css';

class Course extends Component{
    state={
        courseId:"c-100",
        courseName:"ReactJS",
        cost: 15000,
        trainer: "SP",
    }

    render(){
        console.log("I am course component");
        return(
            <div className="mycourse">
                <p>CourseID : {this.state.courseId}</p>
                <p>CourseName : {this.state.courseName}</p>
                <p>Cost : {this.state.cost}</p>
                <p>Trainer : {this.state.trainer}</p>
            </div>
        )
    }

}
export default Course;