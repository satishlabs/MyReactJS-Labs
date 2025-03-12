import { Component } from "react";
import '../course/Course.css';

class Course extends Component{
    state={
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
                <p>CourseID : {this.props.mycourse.courseId}</p>
                <p>CourseName : {this.props.mycourse.courseName}</p>
                <p>Cost : {this.props.mycourse.cost}</p>
                <p>Trainer : {this.props.mycourse.trainer}</p>
                <p>Duration : {this.props.mycourse.duration}</p>
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