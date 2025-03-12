
import { Component, React } from 'react';
import './App.css';

class App extends Component{
    state ={
      mycoursesToDisplay : [],
      mystudentsData :[
        {
          studentId   : 5001,
          studentName : "Satish",
          emailId     : "sat@sprasd.com",
          phones       : {office: 11111,home: 2222},
          address     : {city: "Blore",state: "KA"},
          mycourses   :[
            { cid: 101, cname: "React", price: 15000, trainer: "Srinivas"},
            { cid: 102, cname: "Angular", price: 13000, trainer: "Srinivas"},
            { cid: 103, cname: "Spring", price: 10000, trainer: "Srinivas"}
          ]
        },
        {
          studentId   : 5002,
          studentName : "Prasad",
          emailId     : "pras@sprasd.com",
          phones       : {office: 101010,home: 2020},
          address     : {city: "Ranchi",state: "JH"},
          mycourses   :[
            { cid: 201, cname: "React", price: 15000, trainer: "Srinivas"},
            { cid: 202, cname: "Express", price: 13000, trainer: "Srinivas"},
            { cid: 203, cname: "Spring", price: 10000, trainer: "Srinivas"},
          ]
        },
        {
          studentId   : 5003,
          studentName : "Anu",
          emailId     : "anu@sprasd.com",
          phones       : {office: 111000,home: 2200},
          address     : {city: "Asnsol",state: "KO"},
          mycourses   :[
            { cid: 301, cname: "React", price: 15000, trainer: "Srinivas"},
            { cid: 302, cname: "Java", price: 13000, trainer: "Srinivas"},
            { cid: 303, cname: "Spring Boot", price: 10000, trainer: "Srinivas"}
          ]
        },
      ]
    }


    showCourseInfo = (mysid) =>{
      console.log("Sid : ",mysid);

      let filterStudent = this.state.mystudentsData.filter(
        (mystudent) => mystudent.studentId === mysid
      );

      //let mystu = filterStudent[0];
      //let coursesToDisplay = filterStudent[0].mycourses;

      let mycourseList = filterStudent[0].mycourses;
     // console.log("mystu: ",mycourseList);

 
       let tempCoursesToDisplay = mycourseList.map(
          (mycurse) => (
            <tr key={mycurse.cid}>
              <td>{mycurse.cid}</td>
              <td>{mycurse.cname}</td>
              <td>{mycurse.price}</td>
              <td>{mycurse.trainer}</td>
            </tr>
          )
        )


          let displayCourses = (
            <div>
            <h3>Course Details of Student: {mysid}</h3>
            <table>
            <thead>
              <tr>
                <th>CID</th>
                <th>CName</th>
                <th>Price</th>
                <th>Trainer</th>
              </tr>
            </thead>
            <tbody>
              {tempCoursesToDisplay}
            </tbody>
          </table>
          </div>
          );

        this.setState({
          mycoursesToDisplay: displayCourses
        })
  
    }

    showCourseData = (mystudent) =>{
      console.log("SID : ",mystudent.studentId);
      let mycourseList = mystudent.mycourses;
      let tempCoursesToDisplay = mycourseList.map(
        (mycurse) => (
          <tr key={mycurse.cid}>
            <td>{mycurse.cid}</td>
            <td>{mycurse.cname}</td>
            <td>{mycurse.price}</td>
            <td>{mycurse.trainer}</td>
          </tr>
        )
      )

      let displayCourses = (
        <div>
          <h3>Course Details of Student: {mystudent.studentId}</h3>
        <table>
        <thead>
          <tr>
            <th>CID</th>
            <th>CName</th>
            <th>Price</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {tempCoursesToDisplay}
        </tbody>
      </table>
      </div>
      );

      this.setState({
        mycoursesToDisplay:displayCourses,
      });

    }

  render(){
    console.log("I am app component!!");
    let mystudentsToDisplay = this.state.mystudentsData.map(
      (mystudent) => (
        <tr key={mystudent.studentId}>
            <td>{mystudent.studentId}</td>
            <td>{mystudent.studentName}</td>
            <td>{mystudent.emailId}</td>
            <td>{mystudent.phones.office}</td>
            <td>{mystudent.phones.home}</td>
            <td>{mystudent.address.city}</td>
            <td>{mystudent.address.state}</td>
            <td>
              <button onClick={this.showCourseInfo.bind(this,mystudent.studentId)} className="mybutton">
                Course Info
              </button>
            </td>
            <td>
              <button onClick={this.showCourseData.bind(this,mystudent)} className="mybutton">
                Course Data
              </button>
            </td>
        </tr>
      )
    );


  return(
    <div>
      <div className='myheader'>
        <p>Welcome to SatishLabs Center!!</p>
      </div>
      <div className='mydata'>
        <table>
          <thead>
            <tr>
              <th>Sid</th>
              <th>SName</th>
              <th>Email</th>
              <th>Office Phone</th>
              <th>Home Phone</th>
              <th>City</th>
              <th>State</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mystudentsToDisplay}
          </tbody>
        </table>
      </div>
      <div className='mydata'>
       {this.state.mycoursesToDisplay}
        
       {/*  {this.state.mycoursesToDisplay.length > 0 && (
      <div className='mydata'>
        <table>
          <thead>
            <tr>
              <th>CID</th>
              <th>CName</th>
              <th>Price</th>
              <th>Trainer</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mycoursesToDisplay}
          </tbody>
        </table>
      </div>
      )} */}

      </div>
    </div>
  )
  }

}

export default App;
