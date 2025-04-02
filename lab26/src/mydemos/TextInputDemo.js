import { Component } from "react";
import MyTextInput from "../mycomponent/MyTextInput";

class TextInputDemo extends Component{
    state = {
        username: "",
        password: "",
    };

    onChangeHandler = (event) =>{
        console.log("onChangeHandler");
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("onSubmitHandler");
        const {username,password} = this.state;
        console.log("username: ",username);
        console.log("password: ",password);
        this.setState({
            username: "",
            password:"",
        });
    }

    render(){
        const {username,password} = this.state;
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">InputTextDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MyTextInput
                        myname="username"
                        mylabel="User Name"
                        myvalue={username}
                        myonChange={this.onChangeHandler}
                    />
                     <MyTextInput
                        mytype="password"
                        myname="password"
                        mylabel="Password"
                        myvalue={password}
                        myonChange={this.onChangeHandler}
                    />
                    <input type="submit" value="Submit Now"
                    className="btn btn-primary btn-lg"/>
                </form>
            </div>
        );
    }
}
export default TextInputDemo;