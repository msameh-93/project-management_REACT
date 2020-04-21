import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <div className="collapse navbar-collapse navbar-brand" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                Personal Project Management Tool
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Header;