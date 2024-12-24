import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) =>{
    const[courseState, setCourseState] = useState({
        trainerName:  "Prasad",
        trainerEmail: "prasad@gmail",
        myCourseList: [
            {cid: 101, cname: "Angular", price: 15000},
            {cid: 102, cname: "React", price: 15000},
            {cid: 103, cname: "DevOps", price: 12000},
            {cid: 104, cname: "MS", price: 15000},
            {cid: 105, cname: "Java FSD", price: 30000},
        ]
    })

    useEffect(() =>{
        console.log("[Courses] - 1st - useEffect()]");
        //Do Initilization
        //Timers
        return () =>{
            //CleanUp
            console.log("[Courses] - Cleanup - 1st - useEffect()");
        }
    });

    useEffect(() =>{
        console.log("[Courses] - 2nd - useEffect()]");
        //Do Initilization
        //Timers
        return () =>{
            //CleanUp
            console.log("[Courses] - Cleanup - 2nd - useEffect()");
        }
    },[]);

    useEffect(() =>{
        console.log("[Courses] - 3rd - useEffect()]");
        //Do Initilization
        //Timers
        return () =>{
            //CleanUp
            console.log("[Courses] - Cleanup - 3rd - useEffect()");
        }
    },[courseState.trainerName]);

    const showAllCourses = () =>{
        console.log("[Courses] - showAllCourses()] - Button - Clicked");
        setCourseState({
            trainerName: "Satish Prasad",
            trainerEmail: "satish@gmail",
            myCourseList: [
                {cid: 101, cname: "Angular", price: 12000},
                {cid: 102, cname: "React", price: 15000},
                {cid: 103, cname: "DevOps", price: 12000},
            ]
        });
    }   

    let courseListToDisplay = courseState.myCourseList.map((mycourse, myindex) => (
        <tr key={myindex}>
            <td><h6>{mycourse.cid}</h6></td>
            <td><h6>{mycourse.cname}</h6></td>
            <td><h6>{mycourse.price}</h6></td>
        </tr>
    ));

    return(
        <div className="container">
            <button  className="btn btn-primary" onClick={showAllCourses}>Show All Courses</button>
        <br/>
        <div className="container">
            <table className="table">
                <tbody>
                    {courseListToDisplay}
                </tbody>
            </table>
        </div>
        <h3>Trainer Name: {courseState.trainerName}</h3>
        <h3>Trainer Email: {courseState.trainerEmail}</h3>
        </div>
    )
}
export default Courses;