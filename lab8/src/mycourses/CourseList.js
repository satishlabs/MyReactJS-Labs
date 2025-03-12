import { Component } from "react";
import Course from "./Course";

class CourseList extends Component{
    state = {
        mycourseList : [],
        courseCount: 0
    }

    //Lifecycle method to load all courses on page load
    componentDidMount(){
        this.showAllCourses();
    }

    showAllCourses = () =>{
        console.log("Click on showAllCourses!!");
        this.setState({
            mycourseList: this.props.mycourses,
            courseCount: this.props.mycourses.length
        });
    }

    showLowPriceCourses = () =>{
        console.log("Click on showLowPriceCourses!!");
        let coursesToDisplay = this.props.mycourses.filter(
            mycourse => mycourse.price <= 20000
        );
        console.log("coursesToDisplay")
        this.setState({
            mycourseList: coursesToDisplay,
            courseCount: coursesToDisplay.length
        })
    }

    showOnlineCourses = () =>{
        console.log("Click on showOnlineCourses!!");
        let coursesToDisplay = this.props.mycourses.filter(
            mycourse => mycourse.isOnline === true
        );
            console.log(coursesToDisplay);
            this.setState({
                mycourseList:  coursesToDisplay,
                courseCount: coursesToDisplay.length
            });
    }


    render(){
        let courseListData  = this.state.mycourseList.map(mycourse =>{
            return <Course key={mycourse.cid}
            course = {mycourse}/>
        })

        return(
            <div className="container">
               <div className="container">
                <button className="btn btn-success mybutton" onClick={this.showAllCourses}>All Courses</button>
                <button className="btn btn-success mybutton" onClick={this.showLowPriceCourses}>Low Price Courses</button>
                <button className="btn btn-success mybutton" onClick={this.showOnlineCourses}>Online Courses</button>
               </div>
               <div>
               <h3> Result: {this.state.courseCount}</h3>
                <br/>
                {courseListData}
               </div>
            </div>
        )
    }
}
export default CourseList;