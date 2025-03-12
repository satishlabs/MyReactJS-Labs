import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';
import { MyDataConsumer } from "../appContext";

class Lead extends Component{
    state = {
        showLeadInfo : false
    }

    onShowClick = () =>{
        this.setState({
            showLeadInfo: !this.state.showLeadInfo
        })
    }
    
    onDeleteClick = (myleadId, mydispatch) =>{
        console.log("[Lead] - onDeleteClick");
        mydispatch({
                type: "DELETE_LEAD", 
                payload: myleadId
            });
    };

    render(){
        const {lead} = this.props;
        let myleadOtherInfo = null;
        if(this.state.showLeadInfo){
            console.log("Show Lead Info", this.state.showLeadInfo - lead.leadId);
            myleadOtherInfo = (
                <ul className="list-group">
                    <li className="list-group-item">Email: {lead.email}</li>
                    <li className="list-group-item">Phone: {lead.phone}</li>
                </ul>
            );
        }
        return(
            <MyDataConsumer>
                {
                    value =>{
                        const{mydispatch} = value;
                        const {lead} = this.props;
                        return(
                            <div className="card card-body mb-3">
                                <h4>{lead.name} - Interseted for {lead.course}
                                <i
                                onClick={this.onShowClick}
                                className="fas fa-sort-down"
                                style={{cursor:"pointer", color:"green", fontSize: "50px"}}
                                />
                                <i
                                onClick={this.onDeleteClick.bind(this, lead.leadId,mydispatch)}
                                className="fas fa-times"
                                style={{cursor:"pointer", float:"right", color:"red"}}
                                />
                                </h4>
                                {myleadOtherInfo}
                            </div>
                        )
                    }
                }
            </MyDataConsumer>
        )
       
    }

}

Lead.propTypes = {
    lead: PropTypes.object.isRequired,
    mydeleteClickHandler: PropTypes.func.isRequired
}
export default Lead;