import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lead from "./Lead";

class LeadsList extends Component{
    state = {
        myLeadsList: [
            {leadId: 101, name: "Satish", email: "satish@gmail.com",phone: 12345, course: "ReactJS"},
            {leadId: 102, name: "Prasad", email: "prasad@gmail.com",phone: 22222,course: "SpringBoot"},
            {leadId: 103, name: "SP", email: "sp@gmail.com",phone: 33333,course: "Microservices"},
        ]
    };

    deleteMyLead = (leadId) =>{
        console.log("Lead Id to be deleted", leadId);
        const myleads = this.state.myLeadsList.filter(
            mylead =>mylead.leadId !== leadId
        );

        this.setState({
            myLeadsList: myleads
        });
    };

    render(){
        return(
            <div>
               {this.state.myLeadsList.map(
                    mylead => (
                        <Lead
                            key={mylead.leadId}
                            lead = {mylead}
                            mydeleteClickHandler = {this.deleteMyLead.bind(this, mylead.leadId)}
                            />
                    ))}
            </div>
        );
    }

}
export default LeadsList;