import { Component } from "react";
import Leads from "../leads/leads";
import Enrollments from "../enrollments/Enrollments";

class Dashboard extends Component{
    state ={

    }

    render(){
        return(
            <div className="container">
                <div className="alert alert-primary" role="alert">
                    <h3 className="text-center">My Dashboard</h3>
                <div className="row">
                <div className="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h4 className="card-title">Leads Data</h4>
                    <Leads/>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h4 className="card-title">Enrollments Data</h4>
                    <Enrollments/>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;