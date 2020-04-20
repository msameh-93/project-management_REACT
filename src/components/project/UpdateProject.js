import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

import { getProject, createProject } from "./../actions/projectActions";

class UpdateProject extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id: "",
            name: "",
            identifier: "",
            description: "",
            startDate: "",
            endDate: "",
            errors: {}
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getProject(this.props.match.params.id, this.props.history);
    }
    componentWillReceiveProps(receivedProps) {
        if(receivedProps.thisProject) {
            this.setState({
                id: receivedProps.thisProject.id,
                ...receivedProps.thisProject    //Set from mapped props to sore stats
            })
        }
        if(receivedProps.errors) {
            this.setState({
                errors: receivedProps.errors
            })
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const updatedProjectObject= this.state;
        this.props.createProject(updatedProjectObject, this.props.history);
    }
    render() {
        const {errors}= this.state;
        return (
            <div>  
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Update Project form</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" 
                                        className={classnames("form-control form-control-lg", {
                                                    "is-invalid": errors.name
                                                })} 
                                        placeholder="Project Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                        {errors.name && (
                                            <div className="invalid-feedback">
                                              {errors.name}
                                            </div>
                                          )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                        disabled 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                                    "is-invalid": errors.identifier
                                                })} 
                                        placeholder="Unique Project ID"
                                        name="identifier"
                                        value={this.state.identifier}
                                        onChange={this.onChange}/>
                                        {errors.identifier && (
                                            <div className="invalid-feedback">
                                              {errors.identifier}
                                            </div>
                                          )}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.description
                                        })} 
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}></textarea>
                                        {errors.description && (
                                            <div className="invalid-feedback">
                                              {errors.description}
                                            </div>
                                          )}
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="startDate"
                                        value={this.state.startDate || ""}
                                        onChange={this.onChange}/>
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="endDate"
                                        value={this.state.endDate || ""}
                                        onChange={this.onChange}/>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProject.propTypes= {
    thisProject: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps= (currState) => {
    return {
        thisProject: currState.projectReduxStore.project,
        errors: currState.errorsReduxStore
    }
}
const ConnectedUpdateProject= connect(mapStateToProps, {getProject, createProject})(UpdateProject);

export default ConnectedUpdateProject;