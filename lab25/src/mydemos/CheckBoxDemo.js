import { Component } from "react";
import MyCheckBox from "../mycomponent/MyCheckBox";
import MyButton from "../mycomponent/MyButton";

class CheckBoxDemo extends Component{
    state = {
        mycourses:[
            {id:1, value:"React JS", isChecked:true},
            {id:2, value:"Angular", isChecked:false},
            {id:3, value:"Spring Boot", isChecked:true},
            {id:4, value:"Microservices", isChecked:false},
            {id:5, value:"DevOps", isChecked:false},
        ]
    }

    onChangeHandler  = (event) =>{
        console.log("onChangeHandler");
        let mycourses = this.state.mycourses;
        mycourses.forEach((mycourse) =>{
            if(mycourse.value === event.target.value)
               mycourse.isChecked = event.target.checked; 
        })
        this.setState({
            mycourses: mycourses
        });
    };

    onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log(this.state.mycourses);
        let mycoruseList =[];
        this.state.mycourses.forEach((mycourse) =>{
            if(mycourse.isChecked === true){
                mycoruseList.push(mycourse.value);
            }
        });
        console.log("Selected Courses: "+mycoruseList);

        //Reset
        this.setState({
            mycourses:[
                {id:1, value:"React JS", isChecked:true},
                {id:2, value:"Angular", isChecked:false},
                {id:3, value:"Spring Boot", isChecked:true},
                {id:4, value:"Microservices", isChecked:false},
                {id:5, value:"DevOps", isChecked:false},
            ]
        });
    };

    render(){
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">CheckBoxDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="checkbox">
                        {this.state.mycourses.map((mycourse) =>{
                            return(
                                <MyCheckBox
                                    key={mycourse.id}
                                    mylabel={mycourse.value}
                                    myvalue={mycourse.value}
                                    mychecked={mycourse.isChecked}
                                    myOnChange={this.onChangeHandler}
                                />
                            );
                        })}
                    </div>
                    <MyButton myvalue="Submit Now"/>
                </form>
            </div>
        )
    }
}
export default CheckBoxDemo;