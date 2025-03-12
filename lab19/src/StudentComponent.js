import { Component } from "react";
import { MyStudentConsumer } from "./studentContxt";

class StudentComponent extends Component{
    render(){
        return(
            <MyStudentConsumer>
                {
                    mystudentData =>{
                       // const{studentId,studentName,email,phone} = mystudentData;
                        return(
                            <div className="container">
                                <br/>
                                <b><u>
                                    <h2 className="text-center">StudentInfo</h2>
                                    </u></b>
                                    <br/>
                                    <div>
                                        <h3>Student ID: {mystudentData.studentId}</h3>
                                        <h3>Student Name: {mystudentData.studentName}</h3>
                                        <h3>Student Email: {mystudentData.email}</h3>
                                        <h3>Student Phone: {mystudentData.phone}</h3>
                                    </div>
                            </div>
                        )
                    }
                }
            </MyStudentConsumer>
        )
    }
}

export default StudentComponent;