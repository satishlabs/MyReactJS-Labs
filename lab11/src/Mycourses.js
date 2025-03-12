import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class MyCourses extends Component{
    state ={
        trainerName: "Satish Prasad",
        trainerEmail: "satish.prasad@gamil.com",
        actualCourseList:[
          {cid:101, cname:"Angular", price: 15000, active: true},
          {cid:102, cname:"React18", price: 15000, active: true},
          {cid:103, cname:"JAVA FSD", price: 35000, active: false},
          {cid:104, cname:"Microservices", price: 25000, active: true},
          {cid:105, cname:"DevOps", price: 15000, active: false},
        ],
        mycourseList:[],
      };

      showAllCourses=() =>{
        console.log("showAllCourses - clicked");
        this.setState({
            trainerEmail:"prasadsatish.rnc@gmail.com",
            mycourseList: this.state.actualCourseList
        });
      }

      showActiveCourses=() =>{
        console.log("showActiveCourses - clicked");
        let activeCourses = this.state.actualCourseList.filter(mycourse => mycourse.active === true);

        this.setState({
            trainerEmail:"prasad.satish@gmail.com",
            mycourseList: activeCourses
        });
        //setState() merges the new State with Current State
      }

      componentDidMount(){
        this.showAllCourses();
      }

      render(){
        let mucourseListToDisplay = this.state.mycourseList.map(
            (mycourse)=>(
                <tr>
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
                    <button onClick={this.showAllCourses} className="btn btn-success btn-lg mybutton">Show All Courses</button>
                    <button onClick={this.showActiveCourses} className="btn btn-success btn-lg mybutton">Show Active Courses</button>
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
                        <h3>Trainer Name: {this.state.trainerName}</h3>
                        <h3>Trainer Email: {this.state.trainerEmail}</h3>
                    </table>
                </div>

            </div>
        );
      }
}
export default MyCourses;