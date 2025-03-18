import { Component } from "react";

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    };

    myclickHandler = (event) => {
        event.preventDefault();  // Prevents page reload
        console.log("myclickHandler");
        console.log(this.state);
    };

    mychangeHandler = (myevent) =>{
        myevent.preventDefault();
        console.log("mychangeHandler");
        this.setState({
            [myevent.target.name]: myevent.target.value,
        });
    }

    mysubmitHandler = (myevent) =>{
        myevent.preventDefault();
        console.log("mysubmitHandler");
        console.log(this.state);
        //Do the validation
        //Make API Calls
        //Reset the Form

    }

    render() {
        return (
            <div className="container col-md-6">
                <h2 className="text-center">Login Form</h2>
                <form onSubmit={this.mysubmitHandler}>
                    <table className="table table-striped table-bordered table-light">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="username">Username</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Username..."
                                        value={this.state.username}
                                        onChange={this.mychangeHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password</label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Password..."
                                        value={this.state.password}
                                        onChange={this.mychangeHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="center">
                                    <button 
                                        type="submit"
                                        onClick={this.myclickHandler}
                                        className="btn btn-primary btn-lg"
                                    >
                                        <h2>Login Now</h2>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default LoginForm;
