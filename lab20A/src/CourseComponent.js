import { Component } from "react";
import { MyCourseConsumer } from "./courseContext";
import { UPDATE_CNAME,UPDATE_PRICE, UPDATE_DURATION, UPDATE_TRAINER, RESET } from "./courseTypes";



class CourseComponent extends Component{
    updateCourseName = (updateCname,mydispatch) =>{
        console.log("A","CourseComponent - updateCourseName",updateCname);
        mydispatch({
            type:UPDATE_CNAME,
            payload:updateCname
        });
    }

    updatePrice = (updatePrice,mydispatch) =>{
        console.log("A","CourseComponent - updatePrice",updatePrice);
        mydispatch({
            type:UPDATE_PRICE,
            payload:updatePrice
        });
    }

    updateDuration = (updateDuration,mydispatch) =>{
        console.log("A","CourseComponent - updateDuration",updateDuration);
        mydispatch({
            type:UPDATE_DURATION,
            payload:updateDuration
        });
    }

    updateTrainer = (updateTrainer,mydispatch) =>{
        console.log("A","CourseComponent - updateTrainer",updateTrainer);
        mydispatch({
            type:UPDATE_TRAINER,
            payload:updateTrainer
        });
    }

    resetState = (mydispatch,initialState) =>{
        console.log("A","CourseComponent - resetState");
        mydispatch({
            type: RESET, //Dispatch reset action
            payload: initialState
        });
    }

    render(){
        return(
            <MyCourseConsumer>
                {
                    mycoursetData =>{
                       const{courseId, courseName, price, duration, trainer} = mycoursetData;
                       const{ mydispatch} = mycoursetData;
                        return(
                            <div className="container">
                                <br/>
                                <b><u>
                                    <h2 className="text-center">CourseInfo</h2>
                                    </u></b>
                                    <br/>
                                    <div>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>  <h4>Course ID: {courseId}</h4></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                   <td><h4>Course Name: {courseName}</h4></td>
                                                    <td><button onClick={this.updateCourseName.bind(this,"Master React 17",mydispatch)} className="btn btn-success">Update Course Name</button></td>
                                                </tr>
                                                <tr>
                                                    <td>   <h4> Price: {price}</h4></td>
                                                    <td><button onClick={this.updatePrice.bind(this,20000,mydispatch)} className="btn btn-success">Update Price</button></td>
                                                </tr>
                                                <tr>
                                                    <td>  <h4> Duration: {duration}</h4></td>
                                                    <td><button onClick={this.updateDuration.bind(this,"30Hours",mydispatch)} className="btn btn-success">Update Duration</button></td>
                                                </tr>
                                                <tr>
                                                    <td>   <h4> Trainer: {trainer}</h4></td>
                                                    <td><button onClick={this.updateTrainer.bind(this,"DS",mydispatch)} className="btn btn-success">Update Trainer</button></td>
                                                </tr>
                                                <tr>
    <td colSpan="2" className="text-center">
        <button 
            onClick={() => this.resetState(mydispatch, mycoursetData.initialState)} 
            className="btn btn-danger">
            Reset
        </button>
    </td>
</tr>
                                            </tbody>
                                        </table>
                                      
                                       
                                       
                                       
                                       
                                    </div>
                            </div>
                        )
                    }
                }
            </MyCourseConsumer>
        )
    }
}

export default CourseComponent;