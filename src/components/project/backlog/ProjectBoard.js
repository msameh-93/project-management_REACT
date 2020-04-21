import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Backlog from "./Backlog";
import { getAllTasks } from "../../actions/taskActions";

class ProjectBoard extends Component {
    constructor(props) {
        super(props);
        this.state= {
            tasks: [],
            errors: {}
        }
    }
    componentDidMount() {
        this.props.getAllTasks(this.props.match.params.id);
    }
    componentWillReceiveProps(receivedProps) {
        if(receivedProps.errors) {
            this.setState({
                ...this.state,
                errors: receivedProps.errors
            })
        }
    }
    render() {
        return (
            <div className="container">
                <Link to={`/addtaskform/${this.props.match.params.id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                {this.state.errors.identifier && 
                    (<div className="alert alert-danger text-center">
                        {this.state.errors.identifier}
                    </div>)}
                <Backlog tasks={this.props.tasks}/>
            </div>
        )
    }
}

const mapStateToProps= (currState) => {
    return {
        tasks: currState.taskReduxStore.tasks,
        errors: currState.errorsReduxStore
    }
}
const ConnectedProjectBoard= connect(mapStateToProps, {getAllTasks})(ProjectBoard);

export default ConnectedProjectBoard;
