import React, {Component} from "react";
import {connect} from "react-redux";
import { getAllTasks } from "./../actions/taskActions";

class Backlog extends Component {
    componentDidMount() {
        this.props.getAllTasks(this.props.match.params.id);
        console.log(this.props.tasks);
    }
    render() {
        return (
            <div>
                Backlog
            </div>
        )
    }
}

const mapStateToProps= (currState) => {
    return {
        tasks: currState.taskReduxStore.tasks
    }
}
const ConnectedBacklog= connect(mapStateToProps, {getAllTasks})(Backlog);

export default ConnectedBacklog;