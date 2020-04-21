import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {updateTask, getTask} from "./../../actions/taskActions";
import classnames from "classnames";
import PropTypes from "prop-types";

class UpdateProjectTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            summary: "",
            acceptanceCriteria: "",
            dueDate: "",
            priority: "",
            status: "",
            errors: {}
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const updatedTask= {
            ...this.state
        }
        this.props.updateTask(updatedTask, 
                            this.props.match.params.id, 
                            this.props.task.projectSequence, 
                            this.props.history)
    }
    componentDidMount() {
        this.props.getTask(this.props.match.params.id, 
                        this.props.match.params.projectSequence, 
                        this.props.history);
    }
    componentWillReceiveProps(receivedProps) {
        if(receivedProps.errors) {
            this.setState({
                errors: receivedProps.errors
            });
        }
        if(receivedProps.task) {
            this.setState({
                ...receivedProps.task
            })
        }
    }
    render() {
        const {errors}= this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectboard/${this.props.match.params.id}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Add Project Task</h4>
                            <p className="lead text-center">Project Name + Project Code</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.summary
                                        })} 
                                        name="summary" 
                                        placeholder="Project Task summary" 
                                        value={this.state.summary}
                                        onChange={this.onChange}/>
                                        {errors.summary && (
                                            <div className="invalid-feedback">
                                              {errors.summary}
                                            </div>
                                          )}
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        placeholder="Acceptance Criteria" 
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange}></textarea>
                                </div>
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="dueDate" 
                                        value={this.state.dueDate || ""}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <select 
                                        className="form-control form-control-lg" 
                                        name="priority"
                                        value={this.state.priority}
                                        onChange={this.onChange}>
                                        <option value={0}>Select Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
        
                                <div className="form-group">
                                    <select 
                                        className="form-control form-control-lg" 
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}>
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
        
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateProjectTaskForm.propTypes= {
    updateTask: PropTypes.func.isRequired,
    getTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps= (currState) => {
    return {
        errors: currState.errorsReduxStore,
        task: currState.taskReduxStore.task
    }
}

const ConnectedUpdateProjectTaskForm= 
    connect(mapStateToProps, {updateTask, getTask})(UpdateProjectTaskForm);

export default ConnectedUpdateProjectTaskForm;