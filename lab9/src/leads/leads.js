import { Component } from "react";

class Leads extends Component{
    state ={
        leadShow:true,
        leadList:[
            {leadId:101, name:"Satish",email:"satish@gmail.com",phone:11111,course: "Angular"},
            {leadId:102, name:"Vas",email:"vas@gmail.com",phone:22222,course: "React"},
            {leadId:103, name:"Sri",email:"sri@gmail.com",phone:33333,course: "Angular"},
            {leadId:104, name:"Vas",email:"vas@gmail.com",phone:11111,course: "React"},
            {leadId:105, name:"Satish",email:"satish@gmail.com",phone:11111,course: "Angular"},
        ]
    }

    render(){
        let myleadsToDisplay = null;
        if(this.state.leadShow === true){
            myleadsToDisplay = (
            <table className="table table-light">
                    <thead>
                        <tr>
                            <th>Lead ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.leadList.map((mylead) =>(
                             <tr key={mylead.leadId}>
                             <td><h6>{mylead.leadId}</h6></td>
                             <td><h6>{mylead.name}</h6></td>
                             <td><h6>{mylead.email}</h6></td>
                             <td><h6>{mylead.phone}</h6></td>
                             <td><h6>{mylead.course}</h6></td>
                         </tr>
                        ))}
                       
                    </tbody>
                </table>
            );
        }
        return(
            <div>
               <h5>Total Leads: {this.state.leadList.length}<br></br></h5>
               {myleadsToDisplay}
            </div>
        )
    }
}

export default Leads;