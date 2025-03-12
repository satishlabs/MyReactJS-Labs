import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lead from "./Lead";
import { MyDataConsumer } from "../appContext";

class LeadsList extends Component{

    render(){
        return(
            <MyDataConsumer>
                {
                    value =>{
                        const {myLeadsList} = value;
                        return(
                            <div>
                               {myLeadsList.map(
                                    mylead => (
                                        <Lead
                                            key={mylead.leadId}
                                            lead = {mylead}
                                            />
                                    ))}
                            </div>
                        );
                    }
                }
            </MyDataConsumer>
        );
        
    }

}
export default LeadsList;