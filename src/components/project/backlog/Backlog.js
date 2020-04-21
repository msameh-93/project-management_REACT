import React, {Component} from "react";
import {connect} from "react-redux";
import ProjectTaskItem from "./ProjectTaskItem";

class Backlog extends Component {
    render() {
        const tasks= this.props.tasks.map(el => {
            return (
                <ProjectTaskItem key={el.id} task={el} />
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        {tasks.filter(el => el.props.task.status === "TO_DO")}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {tasks.filter(el => el.props.task.status === "IN_PROGRESS")}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {tasks.filter(el => el.props.task.status === "DONE")}
                    </div>
                </div>
            </div>
        )
    }
}


const ConnectedBacklog= connect(null, null)(Backlog);

export default ConnectedBacklog;