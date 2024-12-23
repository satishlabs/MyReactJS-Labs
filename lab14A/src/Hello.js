import { Component } from "react";
import Hai from "./Hai";

class Hello extends Component{
    static displayName = "MyHelloComponent";
    static defaultProps = {
        mytrainer : "Satish Prasad",
        mycolor : "Red"
    }
    constructor(props){
        super(props);
        console.log(1, "[Hello] - constructor()");
        this.state = {
         message: "OK Guys!"
        }
      }

      static getDerivedStateFromProps(myprops, mystate){
        console.log(2, "[Hello] - getDerivedStateFromProps()");
        return null;
      }

      componentDidMount(){
        console.log(4, "[Hello] - componentDidMount()");
      }
      
    
      render(){
        console.log(3,"[Hello] - render()");
        //console.log(2,"[Hello] - ", Hello.displayName);
        //console.log(3,"[Hello] - ", Hello.defaultProps);
       // console.log(4,"[Hello] - ", this.state);
        //console.log(5,"[Hello] - ", this.props);
        return(
          <div className='container'>
            <h1 className='text-center'>I am Hello Component</h1>
            <h2>Trainer Name: {this.props.mytrainer}</h2>
            <br/>
            <Hai mycolor="Pink"/>
          </div>
        )
      }
    }
export default Hello;