import { Component } from "react";
import MyTextArea from "../mycomponent/MyTextArea";

class TextAreaDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remarks: "",
        };
    }

    onChangeHandler = (event) => {
        console.log("onChangeHandler");
        this.setState({
            remarks: event.target.value,
        });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log(this.state.remarks);
        this.setState({
            remarks: "",
        });
    };

    render() {
        return (
            <div className="card-body container col-md-6">
                <h3 className="text-center">TextAreaDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MyTextArea
                        mylabel="Remarks"
                        myvalue={this.state.remarks}
                        myonChange={this.onChangeHandler} // ✅ Fixed Prop Name
                    />
                    <input
                        type="submit"
                        value="Submit Now"
                        className="btn btn-primary btn-lg"
                    />
                </form>
            </div>
        );
    }
}

export default TextAreaDemo;
