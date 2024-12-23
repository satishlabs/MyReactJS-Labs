
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hello';
import Hai from './Hai';
import MyCourses from './MyCourses';




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

  shouldComponentUpdate(nextProps,nextState){
    console.log("[App] - shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[App] - getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate(prevProps, prevState, mysnapshot){
    console.log("[App] - componentDidUpdate()");
  }

  componentWillUnmount(){
    console.log("[App] - componentWillUnmount()");
  }

  showHideCourses = () =>{
    let mycourseFlag = this.state.courseFlag;
    this.setState({
      courseFlag: !mycourseFlag
    });
  }

  render(){
    console.log(3,"[App] -M3 - render()");
     
    let displayCourses = null;
    if(this.state.courseFlag === true){
      displayCourses = (
        <MyCourses
        hell = "Hello Guys"
        hai = "Hai Guys"
        />
      )
    }
    
    return(
      <div className='container'>
        <h1 className='text-center'>Welcome to SatishLabs!!</h1>
        <br/>
        <button className='btn btn-danger' onClick={this.showHideCourses}>Show Hide Courses</button>
        <br/><br/>
        {displayCourses}
        <br/>
        {/* <table className='table bordered'>
          <tbody>
            <tr>
              <td>
              <Hello mytrainer="Srikanth"/>
              </td>
              <td>
              <Hai mycolor="Red"/>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default App;
