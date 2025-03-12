import { Component } from "react";
import { MyCourseConsumer } from "./courseContext";

class CourseComponent extends Component{
    render(){
        return(
            <MyCourseConsumer>
                {
                    mycoursetData =>{
                       const{courseId,courseName,cost,trainer} = mycoursetData;
                        return(
                            <div className="container">
                                <br/>
                                <b><u>
                                    <h2 className="text-center">CourseInfo</h2>
                                    </u></b>
                                    <br/>
                                    <div>
                                        <h3>Course ID: {courseId}</h3>
                                        <h3>Course Name: {courseName}</h3>
                                        <h3>Course Fee: {cost}</h3>
                                        <h3>Course Trainer: {trainer}</h3>
                                    </div>
                            </div>
                        )
                    }
                }
            </MyCourseConsumer>
        )
    }
}

export default CourseComponent;