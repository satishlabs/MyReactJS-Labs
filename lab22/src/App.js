
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';


class App extends Component{


  render(){
    console.log(3,"[App] - render()");
     
    
    return(
      <div className='card'>
        <div className='card-reader'>
        <h1 className='text-center'>Welcome to SatishLabs!!</h1>
        <br/>
        </div>
        <div className='card-body'>
          <LoginForm/>
          <LoginForm username = "satish123" password="password123"/>
        </div>
      </div>
    );
  }
}

export default App;
