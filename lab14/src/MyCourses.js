import { Component } from "react";

class MyCourses extends Component{
    static displayName = "MyCoursesComponent";

    constructor(props){
        super(props);
        console.log("[MyCourses] - constructor()");
        this.state = {
            trainerName: "Satish Prasad",
            trainerEmail: "sat@gmail.com",
            mycourseList: [
                {cid: 101, cname:"ReactJS",price: 15000},
                {cid: 102, cname:"Angular",price: 12000},
                {cid: 103, cname:"VueJS",price: 10000},
                {cid: 104, cname:"NodeJS",price: 20000},
                {cid: 105, cname:"Boot",price: 25000}
            ]
        };
    }
    render(){
        console.log("[MyCourses] - render()");
       let mycourseListToDisplay = this.state.mycourseList.map(
        (mycourse)=>{
            <tr key={mycourse.cid}>
                <td><h6>{mycourse.cid}</h6></td>
                <td><h6>{mycourse.cname}</h6></td>
                <td><h6>{mycourse.price}</h6></td>
            </tr>
        }
       );
       return(
        <div className="container">
            <h1 className="text-center">My Courses</h1>
            <table className="table bordered">
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Course Price</th>
                    </tr>
                </thead>
                <tbody>
                    {mycourseListToDisplay}
                </tbody>
            </table>
        </div>
       );
    }
    }

export default MyCourses;