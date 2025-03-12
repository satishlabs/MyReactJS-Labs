import { Component, React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component{
  state ={
     companyName : "SatishLabs",
     courseName : "ReactJS",
     styleFlag:false,
     classFlag:false,
   };

   changeStyles = () => {
    let myflag = this.state.styleFlag;
    
    this.setState({
      styleFlag:!myflag
    });
   }

   changesClasses = () => {
    let myFlag = this.state.classFlag;

    this.setState({
      classFlag:!myFlag
    });
   }

    render(){
      let mystyles = {
        color:'blue',
        fontSize:'25px',
        border:'2px solid red',
        borderRadius:'5px',
        padding:'10px',
        fontFamily:'Cambria'
      };

      if(this.state.styleFlag === true){
        mystyles={
          color:'blue',
          fontSize:'25px',
          border:'5px solid red',
          borderRadius:'15px',
          padding:'10px'
        };
      }else{
        mystyles={
          color:'red',
          fontSize:'25px',
          border:'2px solid blue',
          borderRadius:'5px',
          padding:'10px'
        };
      }

      //Define Array of CSS Classes
      let myclassList = ["myclass1","myclass2"];
      console.log(myclassList.join(" "));

      if(this.state.classFlag===false){
        myclassList.slice(2,1);
        myclassList.push("myred");
      }else{
        myclassList.slice(2,1);
        myclassList.push("myblue");
      }

      return (
        <div className='container'>
        <h2 className='text-center'>Welcome to SatishLabs Center!!</h2>
        <br/>
        <p>1. Applying Styles- Static Way</p>
          <div style={{color:'red', fontSize:'25px', border:'2px solid blue',borderRadius:'5px',padding:'10px', fontFamily:'Cambria'}}>
            You are learning {this.state.courseName} from {this.state.companyName}
          </div>
        <br/>
        <p>2. Applying Styles- Dynamic Way</p>
          <div style={mystyles}>
            You are learning {this.state.courseName} from {this.state.companyName}
          </div>
        <br/>
        <button onClick={this.changeStyles} className='btn btn-success'>Change Styles</button>
        <br/>
        <p>3. Applying Claases- Static Way</p>
          <div className='myclass1 myclass2 myblue'>
            You are learning {this.state.courseName} from {this.state.companyName}
          </div>
        <br/>
        <br/>
        <p>4. Applying Classes- Dynamic Way</p>
          <div className={myclassList.join(" ")}>
            You are learning {this.state.courseName} from {this.state.companyName}
          </div>
          <br/>
          <button onClick={this.changesClasses} className='btn btn-success'>Change Classes</button>
        <br/>
        </div>
      );
    }

}

export default App;
