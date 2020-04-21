import React, {Component} from "react";
import {connect} from "react-redux";

class ProjectTaskItem extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const ConnectedProjectTaskItem= connect(null, null)(ProjectTaskItem);

export default ConnectedProjectTaskItem;