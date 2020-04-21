import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
import { getProjects } from "./actions/projectActions";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getProjects();
    }
    render() {
        const myProjects= this.props.projectszzz;  //Props are passed from mapped props
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />                         
                            {myProjects.map(el => {
                                return (
                                    <ProjectItem key={el.id} project={el} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes= {
    projectszzz: PropTypes.array.isRequired,
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}
const mapStatToProps= ( currState ) => {
    return {
        //projectReduxStore is assigned in combine reducers which is passed to store creation
        projectszzz: currState.projectReduxStore.projects,  //component props mapped to redux store state
        project: currState.projectReduxStore.project        
    }
}

const ConnectedDashboard= connect( mapStatToProps, { getProjects } )( Dashboard );

export default ConnectedDashboard;