import { Component } from "react";

class Hai extends Component{
    static displayName = "MyHaiComponent";
    constructor(props){
        super(props);
        console.log(1, "[Hai] - constructor()");
        this.state = {
           
        }
    }

    static getDerivedStateFromProps(myprops, mystate){
        console.log(2, "[Hai] - getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log(4, "[Hai] - componentDidMount()");
    }

    render(){
        console.log(3, "[Hai] - render()");
        return(
            <div className="container">
                <h3 className="text-center">I am Hai Component!!</h3>
                <h3>Color : {this.props.mycolor}</h3>
            </div>
        );
    }
}
export default Hai;