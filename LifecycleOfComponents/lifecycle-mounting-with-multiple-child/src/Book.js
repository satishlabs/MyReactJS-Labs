import { Component } from "react";

class Book extends Component{
    constructor(props){
        console.log("[Book] - constructor()");
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
        }

    }

    componentDidMount(){
        console.log("[Book] - componentDidMount()");
    }

    render(){
        console.log("[Book] - render()");
        return(
            <div className="">
                <h1>Title: {this.state.title}</h1>
                <h1>Author: {this.state.author}</h1>
            </div>
        )
    }
}
export default Book;