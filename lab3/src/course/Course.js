import { Component } from "react";
import '../course/Course.css';

class Course extends Component{
    state={
        courseId:"c-100",
        courseName:"ReactJS",
        cost: 15000,
        trainer: "SP",
        showCourse: false,
    }

    showCourseInfo = () =>{
        console.log("Course Button Clicked...");
        let courseFlag = this.state.showCourse;

        this.setState({
            showCourse: !courseFlag
        });
    }

    render(){
        console.log("I am course component");
        let mycourseInfo = null;
        if(this.state.showCourse === true){
            mycourseInfo = (
                <div>
                <p>CourseID : {this.state.courseId}</p>
                <p>CourseName : {this.state.courseName}</p>
                <p>Cost : {this.state.cost}</p>
                <p>Trainer : {this.state.trainer}</p>
                </div>
            )
        }
        return(
            <div className="mycourse">
                <button className="mybutton" onClick={this.showCourseInfo}> Course Details</button>
                {mycourseInfo}
            </div>
        )
    }

}
export default Course;