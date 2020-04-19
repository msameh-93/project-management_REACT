import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
import { getProjects } from "./actions/projectActions";

class Dashboard extends Component {

    componentDidMount() {
        console.log("DID MOUNT!");
        this.props.getProjects();
    }
    render() {
        const myProjects= this.props.projectszzz;
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
        projectszzz: currState.projectsxxx.projects,
        project: currState.projectsxxx.project
    }
}

const ConnectedDashboard= connect( mapStatToProps, { getProjects } )( Dashboard );

export default ConnectedDashboard;