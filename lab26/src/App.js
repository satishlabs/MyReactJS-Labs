
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationFrom from './RegistrationForm';






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
          <RegistrationFrom/>
        </div>
      </div>
    );
  }
}

export default App;
