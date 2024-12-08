
import { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component{
  constructor(props){
    console.log("[App] - Inside Constructor()");
    super(props);
    
    this.state = {
      books:[]
    };
   
  }

  componentDidMount(){
    console.log("[App] - Inside componentDidMount()");
  }
    render(){
      console.log("[App] - Inside render()");
      return(
        <div className='App'>
          <h1>lifecycle mounting with child Components</h1>
          <h1>Book List:</h1>
          <Book title="The Cold Start Problem" author="Satish Prasad"/>
        </div>
      )
    }
}

export default App;
