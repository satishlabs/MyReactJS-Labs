
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    console.log("Inside Constructor()");
    super(props);
    
    this.state = {
      books:[]
    };
   
  }

  componentDidMount(){
    console.log("Inside componentDidMount()");
  }
    render(){
      console.log("Inside render()");
      return(
        <div className='App'>
          <h1>Creation Lifecycle</h1>
        </div>
      )
    }
}

export default App;
