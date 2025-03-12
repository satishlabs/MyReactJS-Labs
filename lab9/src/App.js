import { Component, React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard/Dashboard';


class App extends Component{
  state ={
     companyName : "SatishLabs",
     courseName : "ReactJS",
   };
    render(){
      return (
        <div>
         <p className='text-center'>Welcome to {this.state.companyName}!!</p>
         <p className='text-center'>You are learning {this.state.courseName} from Satish Prasad</p>
         <ul class="nav justify-content-end">
         <li class="nav-item">
          <a class="nav-link active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Contact</a>
        </li>
        </ul>
        <br/>
        <Dashboard/>
        </div>
      );
    }

}

export default App;
