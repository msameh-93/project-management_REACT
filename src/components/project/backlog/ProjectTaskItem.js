import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {deleteTask} from "./../../actions/taskActions";

class ProjectTaskItem extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
        this.onDeleteClick= this.onDeleteClick.bind(this);
    }
    onDeleteClick(e) {
        this.props.deleteTask(this.props.task.projectIdentifier, this.props.task.projectSequence);
    }
    render() {
        return (
            <div className="card mb-1 bg-light">
                <div className="card-header text-primary">
                    ID: {this.props.task.projectSequence} -- Priority: {this.props.task.priority}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{this.props.task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {this.props.task.acceptanceCriteria}
                    </p>
                    <Link 
                        to={`/updatetaskform/${this.props.task.projectIdentifier}/${this.props.task.projectSequence}`} 
                        className="btn btn-primary">
                        Update
                    </Link>
                    <button onClick={this.onDeleteClick} className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

ProjectTaskItem.propTypes= {
    deleteTask: PropTypes.func.isRequired
}

const ConnectedProjectTaskItem= connect(null, {deleteTask})(ProjectTaskItem);

export default ConnectedProjectTaskItem;