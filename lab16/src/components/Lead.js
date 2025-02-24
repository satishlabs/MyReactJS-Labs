import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';

class Lead extends Component{
    state = {
        showLeadInfo : false
    }

    onShowClick = () =>{
        this.setState({
            showLeadInfo: !this.state.showLeadInfo
        })
    }
    
    onDeleteClick = () =>{
        this.props.mydeleteClickHandler();
    }

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
            <div className="card card-body mb-3">
                <h4>{lead.name} - Interseted for {lead.course}
                <i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{cursor:"pointer", color:"green", fontSize: "50px"}}
                />
                <i
                onClick={this.onDeleteClick}
                className="fas fa-times"
                style={{cursor:"pointer", float:"right", color:"red"}}
                />
                </h4>
                {myleadOtherInfo}
            </div>
        )
    }

}

Lead.propTypes = {
    lead: PropTypes.object.isRequired,
    mydeleteClickHandler: PropTypes.func.isRequired
}
export default Lead;