import React, { Component } from "react";

const myContext = React.createContext();

const myreducer = (state,action) =>{
 console.log("[appContext] -In myreducer",action.type);
 switch(action.type){
    case "DELETE_LEAD":
        return{
          //  ...state,
            myLeadsList:state.myLeadsList.filter(
                mylead => mylead.leadId !== action.payload
            )
        };
    default:
        return state;    
 }
};

export class MyApplicationData extends Component{
    state = {
        myLeadsList:[
            {leadId: 101, name: "Satish", email: "satish@gmail.com",phone: 12345, course: "ReactJS"},
            {leadId: 102, name: "Prasad", email: "prasad@gmail.com",phone: 22222,course: "SpringBoot"},
            {leadId: 103, name: "SP", email: "sp@gmail.com",phone: 33333,course: "Microservices"},
            {leadId: 104, name: "PS", email: "ps@gmail.com",phone: 11111,course: "AngularJS"},
        ],
        mydispatch:(action) =>{
            this.setState(state => myreducer(state,action));
        }
    }

    render(){
        return(
            <myContext.Provider value={this.state}>
                {this.props.children}
            </myContext.Provider>
        );
    }
}
//export default MyApplicationData;
export const MyDataConsumer = myContext.Consumer;