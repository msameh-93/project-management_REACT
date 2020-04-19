import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "./../actions/projectActions";


class AddProject extends Component {
    constructor(props) {
        super(props);
        //initial state
        this.state= {
            name: "",
            identifier: "",
            description: "",
            startDate: "",
            endDate: ""
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
    render() {
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
                                        <input type="text" className="form-control form-control-lg " placeholder="Project Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                                        name="identifier"
                                        value={this.state.identifier}
                                        onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg" placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}></textarea>
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
    createProject: PropTypes.func.isRequired
};

//function connect({mapStateToProps}?, {mapDispatchToProps}?, {mergeProps}?, options?)
const ConnectedAddProject= connect(null, {createProject})(AddProject); //connect this component to store

export default ConnectedAddProject;