import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "./../actions/projectActions";
import classnames from "classnames";

class AddProject extends Component {
    constructor(props) {
        super(props);
        //initial state
        this.state= {
            name: "",
            identifier: "",
            description: "",
            startDate: "",
            endDate: "",
            errors: {}  // used by component to render error messages - SET BY lifecycle hooks - lifecycle hook is fired by changes on mapped state changes (errorszzz @errorReducer)
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    onChange(e) {   //this.onChange.bind(this) bound on tag
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const newProjectObj= this.state;    //this case we will not have more states than project form
        //better to assign each key to each value
        console.log(newProjectObj);
        this.props.createProject(newProjectObj, this.props.history);
    }
    componentWillReceiveProps(propsReceived) {
        if(propsReceived.errorszzz) {   //check new errorszzz property
            this.setState({             //set this component state
                errors: propsReceived.errorszzz
            })
        }
    }
    render() {
        const {errors}= this.state; //Destructure errors from component state
        return (
            <div>  
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create Project form</h5>
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
                                              {errors.projectName}
                                            </div>
                                          )}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
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
                                        {errors.identifier && (
                                            <div className="invalid-feedback">
                                              {errors.identifier}
                                            </div>
                                          )}
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChange}/>
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="endDate"
                                        value={this.state.endDate}
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
    };
}

//Function validation
AddProject.propTypes= {
    //Ensure createProject action function is supplied
    createProject: PropTypes.func.isRequired,
    errorszzz: PropTypes.object.isRequired
};

const mapStateToProps= (currState) => { //arg is current state and returns an object
    return {
        errorszzz: currState.errorsxxx
        //erros: sets a new prop (errorszzz) that is mapped to state
        //currState.errors is from redux store current state
    }
}
//function connect({mapStateToProps}?, {mapDispatchToProps}?, {mergeProps}?, options?)
const ConnectedAddProject= connect(mapStateToProps, {createProject})(AddProject); //connect this component to store

export default ConnectedAddProject;