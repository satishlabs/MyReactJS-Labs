import { Component } from "react";

class MyCourses extends Component {
    static displayName = "MyCoursesComponent";

    constructor(props) {
        super(props);
        console.log(1, "[MyCourses] - constructor()");
        this.state = {
            trainerName: "Satish Prasad",
            trainerEmail: "sat@gmail.com",
            mycourseList: [
                { cid: 101, cname: "ReactJS", price: 15000 },
                { cid: 102, cname: "Angular", price: 12000 },
                { cid: 103, cname: "VueJS", price: 10000 },
                { cid: 104, cname: "NodeJS", price: 20000 },
                { cid: 105, cname: "Boot", price: 25000 },
            ],
            filteredCourses: [], // Initially empty
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log(2, "[MyCourses] - getDerivedStateFromProps()");
        return null;
    }

    componentDidMount() {
        console.log(4, "[MyCourses] - componentDidMount()");
        // Populate filteredCourses with all courses initially
        this.setState({ filteredCourses: this.state.mycourseList });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(8, "[MyCourses] - shouldComponentUpdate()");
        return true; // Always update the component
    }   

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(7, "[MyCourses] - getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate(){
        console.log(6, "[MyCourses] - componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log(5, "[MyCourses] - componentWillUnmount()");
    }

    showAllCourses = () => {
        console.log("[MyCourses] - showAllCourses()");
        this.setState({
            filteredCourses: this.state.mycourseList,
        });
    };

    showLowPriceCourses = () => {
        console.log("[MyCourses] - showLowPriceCourses()");
        const lowPriceCourses = this.state.mycourseList.filter(
            (mycourse) => mycourse.price <= 15000
        );
        this.setState({
            filteredCourses: lowPriceCourses,
        });
    };

    showHighPriceCourses = () => {
        console.log("[MyCourses] - showHighPriceCourses()");
        const highPriceCourses = this.state.mycourseList.filter(
            (mycourse) => mycourse.price > 15000
        );
        this.setState({
            filteredCourses: highPriceCourses,
        });
    };

    render() {
        console.log(3, "[MyCourses] - render()");
        let mycourseListToDisplay = this.state.filteredCourses.map((mycourse) => {
            return (
                <tr key={mycourse.cid}>
                    <td><h6>{mycourse.cid}</h6></td>
                    <td><h6>{mycourse.cname}</h6></td>
                    <td><h6>{mycourse.price}</h6></td>
                </tr>
            );
        });

        return (
            <div className="container">
                <h1 className="text-center">My Courses</h1>
                <div className="text-center">
                    <button onClick={this.showAllCourses}>All Courses</button>
                    <button onClick={this.showLowPriceCourses}>Show Low Price Courses</button>
                    <button onClick={this.showHighPriceCourses}>Show High Price Courses</button>
                </div>
                <table className="table bordered">
                    <thead>
                        <tr>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Course Price</th>
                        </tr>
                    </thead>
                    <tbody>{mycourseListToDisplay}</tbody>
                </table>
            </div>
        );
    }
}

export default MyCourses;
