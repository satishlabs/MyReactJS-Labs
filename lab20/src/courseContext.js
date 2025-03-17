import React, { Component } from "react";
import { UPDATE_CNAME,UPDATE_PRICE, UPDATE_DURATION, UPDATE_TRAINER } from "./courseTypes";

//1. Create the context
const courseContxt = React.createContext(null);

const myreducer = (currentState,action) =>{
    console.log("C","[courseContxt]",action.type, action.payload);
    switch(action.type){
        case UPDATE_CNAME:
                return {
                    courseName:action.payload
                };
        case UPDATE_PRICE:
                return {
                    price : action.payload
                };
        case UPDATE_DURATION:
                return{
                    duration: action.payload
                };
        case UPDATE_TRAINER:
                return{
                    trainer: action.payload
                };
        default:
            return currentState;               
               
    }
}


export class MyCourseProvider extends Component{
    //2. Define the State With Properties and Dispatch function
    state = {
        courseId: "C-101",
        courseName: "Spring Boot",
        price: 15000,
        duration: "50Hours",
        trainer:"Satish Prasad",
        mydispatch:(action) =>{
            console.log("B","courseContxt - mydispatch");
            this.setState(state =>myreducer(this.state,action));
        }
    }

    render(){
        return(
            //3. Specify the Provider
            <courseContxt.Provider value={this.state}>
                {this.props.children}
            </courseContxt.Provider>
        )
    }
}

//4. Export the Consumer
//export const MyStudentConsumer = studentContxt;
export const MyCourseConsumer = courseContxt.Consumer;

