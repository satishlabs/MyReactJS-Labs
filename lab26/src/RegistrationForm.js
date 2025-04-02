import { Component } from "react";
import MyTextInput from "./mycomponent/MyTextInput";
import MyRadioButton from "./mycomponent/MyRadioButton";
import MyButton from "./mycomponent/MyButton";
import MySelectBox from "./mycomponent/MySelectBox";
import MyCheckBox from "./mycomponent/MyCheckBox";
import MyTextArea from "./mycomponent/MyTextArea";

class RegistrationForm extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        gender: "",
        timings:"",
        remarks: "",
        mycourses:[
            {id:1, value:"React JS", isChecked:true},
            {id:2, value:"Angular", isChecked:false},
            {id:3, value:"Spring Boot", isChecked:true},
            {id:4, value:"Microservices", isChecked:false},
            {id:5, value:"DevOps", isChecked:false},
        ]
    };

    onChangeHandler = (event) => {
        console.log("onChangeHandler", event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
        let mycourses = this.state.mycourses;
        mycourses.forEach((mycourse) =>{
            if(mycourse.value === event.target.value)
               mycourse.isChecked = event.target.checked; 
        })
        this.setState({
            mycourses: mycourses
        });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("onSubmitHandler");
        const { name, email, phone, gender, remarks } = this.state;
        console.log("name: ", name);
        console.log("email: ", email);
        console.log("phone: ", phone);
        console.log("gender: ", gender);
        console.log("Timings:", this.state.timings);
        console.log("remarks: ", remarks);
        // Reset form
        this.setState({
            name: "",
            email: "",
            phone: "",
            gender: "",
            timings: "",
            remarks:"",
        });

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

    render() {
        const { name, email, phone } = this.state;
        const timingsOptions = ["Select Timings", "WeekDays", "WeekEnds"];
        return (
            <div className="card-body container col-md-6">
                <h3 className="text-center">Registration Form</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MyTextInput
                        myname="name"
                        mylabel="Name"
                        myvalue={name}
                        myonChange={this.onChangeHandler}
                    />
                    <MyTextInput
                        mytype="email"
                        myname="email"
                        mylabel="Email"
                        myvalue={email}
                        myonChange={this.onChangeHandler}
                    />
                    <MyTextInput
                        mytype="tel"
                        myname="phone"
                        mylabel="Phone"
                        myvalue={phone}
                        myonChange={this.onChangeHandler}
                    />

                        <label className="form-label"><b>Gender:</b></label>
                        <div className="gender-options d-flex">
                            <MyRadioButton
                                mylabel="Male"
                                myvalue="Male"
                                myname="gender"
                                mychecked={this.state.gender === "Male"}
                                myOnChange={this.onChangeHandler}
                            />
                            <MyRadioButton
                                mylabel="Female"
                                myvalue="Female"
                                myname="gender"
                                mychecked={this.state.gender === "Female"}
                                myOnChange={this.onChangeHandler}
                            />
                    </div>
                    <div className="ms-4">
                   <MySelectBox
                        mylabel="Timings:"
                        myname="timings"
                        myonChange={this.onChangeHandler}  // ✅ Fixed incorrect prop name
                        myoptions={timingsOptions}
                    />
                    </div>
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
                    <MyTextArea
                        mylabel="Remarks"
                        myvalue={this.state.remarks}
                        myonChange={this.onChangeHandler} // ✅ Fixed Prop Name
                    />
                    <MyButton myvalue="Submit Now" />
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
