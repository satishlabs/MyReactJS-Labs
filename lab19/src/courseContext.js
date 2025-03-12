import React, { Component } from "react";

//1. Create the context
const courseContxt = React.createContext(null);


export class MyCourseProvider extends Component{
    //2. Define the State
    state = {
        courseId: "C-101",
        courseName: "Spring Boot",
        cost: 15000,
        trainer:"Satish Prasad",
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

