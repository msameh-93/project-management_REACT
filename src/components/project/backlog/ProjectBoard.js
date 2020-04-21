import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Backlog from "./Backlog";
import { getAllTasks } from "../../actions/taskActions";

class ProjectBoard extends Component {
    componentDidMount() {
        this.props.getAllTasks(this.props.match.params.id);
    }
    render() {
        return (
            <div className="container">
                <Link to={`/addtaskform/${this.props.match.params.id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                <Backlog tasks={this.props.tasks}/>
            </div>
        )
    }
}

const mapStateToProps= (currState) => {
    return {
        tasks: currState.taskReduxStore.tasks
    }
}
const ConnectedProjectBoard= connect(mapStateToProps, {getAllTasks})(ProjectBoard);

export default ConnectedProjectBoard;
