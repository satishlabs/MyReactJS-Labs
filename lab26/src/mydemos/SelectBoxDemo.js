import { Component } from "react";
import MySelectBox from "../mycomponent/MySelectBox";
import MyButton from "../mycomponent/MyButton";

class SelectBoxDemo extends Component {
    constructor() {
        super();
        this.state = {
            timings: "",  // Default to an empty string instead of null
            courses: "",
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler = (event) => {
        console.log("onChangeHandler");
        this.setState({
            [event.target.name]: event.target.value,  // ✅ Update state dynamically
        });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log("Timings:", this.state.timings);
        console.log("Courses:", this.state.courses);

        // Reset state
        this.setState({
            timings: "",
            courses: "",
        });
    };

    render() {
        const timingsOptions = ["Select Timings", "WeekDays", "WeekEnds"];
        const courseOptions = ["ReactJS", "SpringBoot", "Angularjs"];

        return (
            <div className="card-body container col-md-6">
                <h3 className="text-center">SelectBoxDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MySelectBox
                        mylabel="Timings"
                        myname="timings"
                        myonChange={this.onChangeHandler}  // ✅ Fixed incorrect prop name
                        myoptions={timingsOptions}
                    />
                    <MySelectBox
                        mylabel="Courses"  // ✅ Fixed typo from "Curses"
                        myname="courses"
                        myonChange={this.onChangeHandler}  // ✅ Fixed incorrect prop name
                        myoptions={courseOptions}
                    />
                    <MyButton myvalue="Submit Now" />
                </form>
            </div>
        );
    }
}

export default SelectBoxDemo;
