import { Component } from "react";
import MyRadioButton from "../mycomponent/MyRadioButton";
import MyButton from "../mycomponent/MyButton";

class RadioButtonDemo extends Component {
    state = {
        gender: "",
    };

    onChangeHandler = (event) => {
        console.log("onChangeHandler");
        this.setState({
            gender: event.target.value,
        });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log(this.state.gender);
        this.setState({
            gender: "",
        });
    };

    render() {
        return (
            <div className="card-body container col-md-6">
                <h3 className="text-center">RadioButtonDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="radio">
                        <MyRadioButton
                            mylabel="Male"  // ✅ Fixed typo from "mylable"
                            myvalue="Male"
                            myname="gender"
                            mychecked={this.state.gender === "Male"} // ✅ Correct checked logic
                            myOnChange={this.onChangeHandler} // ✅ Corrected prop name
                        />
                        <MyRadioButton
                            mylabel="Female"  // ✅ Fixed typo from "mylable"
                            myvalue="Female"
                            myname="gender"
                            mychecked={this.state.gender === "Female"} // ✅ Correct checked logic
                            myOnChange={this.onChangeHandler} // ✅ Corrected prop name
                        />
                    </div>
                    <MyButton myvalue="Submit Now" />
                </form>
            </div>
        );
    }
}

export default RadioButtonDemo;
