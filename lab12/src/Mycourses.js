import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCourses = () => {

   //const[state, setState] =  useState(initialState);
    
   //1. Using the useState() React Hook
    const[courseState, setCourseState] = useState(
        {
            trainerName: "Satish Prasad",
            trainerEmail: "satish.prasad@gamil.com",
            mycourseList:[
              {cid:101, cname:"Angular", price: 15000, active: true},
              {cid:102, cname:"React18", price: 15000, active: true},
              {cid:103, cname:"JAVA FSD", price: 35000, active: false},
              {cid:104, cname:"Microservices", price: 25000, active: true},
              {cid:105, cname:"DevOps", price: 15000, active: false},
            ],
          }
    );

     const showAllCourses=() =>{
        console.log("showAllCourses - clicked");
        let allCourses = [
            {cid:101, cname:"Angular", price: 15000, active: true},
            {cid:102, cname:"React18", price: 15000, active: true},
            {cid:103, cname:"JAVA FSD", price: 35000, active: false},
            {cid:104, cname:"Microservices", price: 25000, active: true},
            {cid:105, cname:"DevOps", price: 15000, active: false},
          ];
        setCourseState({
            trainerEmail:"prasadsatish.rnc@gmail.com",
            trainerName: courseState.trainerName,
            mycourseList: allCourses
        });

        //useState() replaces the new State with Current State
      }

     const showActiveCourses=() =>{
        console.log("showActiveCourses - clicked");
        let activeCourses = courseState.mycourseList.filter(mycourse => mycourse.active === true);

        setCourseState({
            trainerEmail:"prasad.satish@gmail.com",
            trainerName: courseState.trainerName,
            mycourseList: activeCourses
        });
        //useState() replaces the new State with Current State
      }

      let trainerInfo = null;
      if(courseState.trainerName){
        trainerInfo = (<h3>Trainer Name: {courseState.trainerName}</h3>);
      }

        let mucourseListToDisplay = courseState.mycourseList.map(
            (mycourse)=>(
                <tr key={mycourse.cid}>
                    <td><h6>{mycourse.cid}</h6></td>
                    <td><h6>{mycourse.cname}</h6></td>
                    <td><h6>{mycourse.price}</h6></td>
                    <td><h6>{mycourse.active}</h6></td>
                </tr>
            )
        )
        return(
            <div className="container">
                <div className="container">
                    <button onClick={showAllCourses} className="btn btn-success btn-lg mybutton">Show All Courses</button>
                    <button onClick={showActiveCourses} className="btn btn-success btn-lg mybutton">Show Active Courses</button>
                    <br/><br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th>Is Active</th>
                            </tr>
                        </thead>
                        <tbody>{mucourseListToDisplay}</tbody>
                    </table>
                    {trainerInfo}
                    <h3>Trainer Email: {courseState.trainerEmail}</h3>
                </div>

            </div>
        );
}
export default MyCourses;