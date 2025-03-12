import { Component } from "react";
import { MyStudentConsumer } from "./studentContxt";
import { MyCourseConsumer } from "./courseContext";

class TestComponent extends Component{
    render(){
        return(
            <MyStudentConsumer>
                {
                    mystudentData =>{
                        const{studentId,studentName,email,phone} = mystudentData;
                        return(
                            <MyCourseConsumer>
                                {
                                    mycoursetData =>{
                                    const{courseId,courseName,cost,trainer} = mycoursetData;
                                    return(
                                        <div className="container">
                                            <br/>
                                            <b><u>
                                            <h2 className="text-center">Test Component Info</h2>
                                    </u></b>
                                    <br/>
                                    <div>
                                        <h3>Student ID: {studentId}</h3>
                                        <h3>Student Name: {studentName}</h3>
                                        <h3>Student Email: {email}</h3>
                                        <h3>Student Phone: {phone}</h3>
                                        <h3>Course Id: {courseId}</h3>
                                        <h3>Course Name: {courseName}</h3>
                                        <h3>Course cost: {cost}</h3>
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
            </MyStudentConsumer>
        )
    }
}

export default TestComponent;