
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hello';
import Hai from './Hai';




class App extends Component{

  constructor(props){
    super(props);
    console.log(1,"[App]- M1 - constructor()");
    this.state = {
      companyName : "SatishLabs",
      courseFlag:true
    }
  }
 
  static getDerivedStateFromProps(myprops, mystate){
    console.log(2, "[App]- M2 - getDerivedStateFromProps()");
    return null;
  }

  componentDidMount(){
    console.log(4, "[App]- M4 - componentDidMount()");
  }


  showHideCourses = () =>{
    let mycourseFlag = this.state.courseFlag;
    this.setState({
      courseFlag: !mycourseFlag
    });
  }

  render(){
    console.log(3,"[App] -M3 - render()");
     
    
    return(
      <div className='container'>
        <h1 className='text-center'>Welcome to SatishLabs!!</h1>
        <br/>
        <button className='btn btn-danger'>Show Hide Courses</button>
        <br/>
       
        <Hello mytrainer="Srikanth"/>
        <Hai mycolor="Red"></Hai>
        {/* <Hello mytrainer="Srikanth"/>
        <Hello mytrainer="Srikanth" mycolor="Pink"/> */}
      </div>
    );
  }
}

export default App;
