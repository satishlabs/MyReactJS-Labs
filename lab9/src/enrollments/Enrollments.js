import { Component } from "react";

class Enrollments extends Component{
    state ={
        enrollmentShow: true,
        enrollmentList:[
            {leadId:201, sid: 501, name:"Satish",email:"satish@gmail.com",phone:11111,course: "Angular"},
            {leadId:202, sid: 502, name:"Vas",email:"vas@gmail.com",phone:22222,course: "React"},
            {leadId:203, sid: 503, name:"Sri",email:"sri@gmail.com",phone:33333,course: "Angular"},
            {leadId:204, sid: 504, name:"Vas",email:"vas@gmail.com",phone:11111,course: "React"},
            {leadId:205, sid: 505, name:"Satish",email:"satish@gmail.com",phone:11111,course: "Angular"},
        ]
    }
    render(){
        let myenrollmentsToDisplay = null;
        if(this.state.enrollmentShow === true){
            myenrollmentsToDisplay = (
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th>Lead ID</th>
                            <th>SID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.enrollmentList.map((mylead) =>(
                            <tr key={mylead.leadId}>
                            <td><h6>{mylead.leadId}</h6></td>
                            <td><h6>{mylead.sid}</h6></td>
                             <td><h6>{mylead.name}</h6></td>
                             <td><h6>{mylead.email}</h6></td>
                             <td><h6>{mylead.phone}</h6></td>
                             <td><h6>{mylead.course}</h6></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
        return(
            <div>
            <h5>Total Enrollments: {this.state.enrollmentList.length}<br></br></h5>
            {myenrollmentsToDisplay}
         </div>
        )
    }
}

export default Enrollments;