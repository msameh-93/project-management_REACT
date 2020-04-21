import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createTask} from "./../../actions/taskActions";
import classnames from "classnames";
import PropTypes from "prop-types";

class AddProjectTaskForm extends Component {
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
        const newTask= {
            ...this.state
        }
        this.props.createTask(newTask, this.props.match.params.id, this.props.history)
    }
    componentWillReceiveProps(receivedProps) {
        this.state.errors= receivedProps.errors;
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
                                        value={this.state.dueDate}
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

AddProjectTaskForm.propTypes= {
    createTask: PropTypes.func.isRequired
}

const mapStateToProps= (currState) => {
    return {
        errors: currState.errorsReduxStore
    }
}
const ConnectedAddProjectTaskForm= connect(mapStateToProps, {createTask})(AddProjectTaskForm);

export default ConnectedAddProjectTaskForm;