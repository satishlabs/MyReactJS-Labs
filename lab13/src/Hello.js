import { Component } from "react";

class Hello extends Component{
    static displayName = "MyHelloComponent";
    static defaultProps = {
        mytrainer : "Satish Prasad",
        mycolor : "Red"
    }
    constructor(props){
        super(props);
        console.log("[Hello] - constructor()");
        this.state = {
         message: "OK Guys!"
        }
      }

      static getDerivedStateFromProps(myprops, mystate){
        console.log("[Hello] - getDerivedStateFromProps()");
        console.log("[Hello] myprops",myprops);
        console.log("[Hello] mystate",mystate);
        return {
            message: "Updated Message here!! ",
            trainer: myprops.mytrainer,
            color: myprops.mycolor
        };
      }
     
      render(){
        console.log(1,"[Hello] - render()");
        //console.log(2,"[Hello] - ", Hello.displayName);
        //console.log(3,"[Hello] - ", Hello.defaultProps);
        console.log(4,"[Hello] - ", this.state);
        console.log(5,"[Hello] - ", this.props);
        return(
          <div className='container'>
            <h1 className='text-center'>I am Hello Component</h1>
            <h2>Trainer Name: {this.props.mytrainer}</h2>
            <h2>Color : {this.props.mycolor}</h2>
          </div>
        )
      }
    }
export default Hello;