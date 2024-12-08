
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
          <h1>lifecycle-mounting-with-multiple-child-component</h1>
          <h2>Book List:</h2>
          <Book id={1} title="ReactJS" author="Satish"/>
          <Book id={2} title="Spring Boot" author="Prasad"/>
          <Book id={3} title="Microservices" author="Satish Prasad"/>
        </div>
      )
    }
}

export default App;
