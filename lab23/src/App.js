
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './AddBook';



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
          <AddBook/>
        </div>
      </div>
    );
  }
}

export default App;
