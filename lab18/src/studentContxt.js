import React, { Component } from "react";

//1. Create the context
const studentContxt = React.createContext(null);


export class MyStudentProvider extends Component{
    //2. Define the State
    state = {
        studentId: 101,
        studentName: "Satish",
        email: "satish@gmail",
        phone:11111
    }

    render(){
        return(
            //3. Specify the Provider
            <studentContxt.Provider value={this.state}>
                {this.props.children}
            </studentContxt.Provider>
        )
    }
}

//4. Export the Consumer
//export const MyStudentConsumer = studentContxt;
export const MyStudentConsumer = studentContxt.Consumer;

