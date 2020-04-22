import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
/***Styling****/
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
/***Components****/
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import AddProject from "./components/project/AddProject";
import UpdateProject from "./components/project/UpdateProject";
import ProjectBoard from "./components/project/backlog/ProjectBoard";
import AddProjectTaskForm from "./components/project/backlog/AddProjectTaskForm";
import UpdateProjectTaskForm from "./components/project/backlog/UpdateProjectTaskForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
              <Route path="/dashboard" component={Dashboard} exact={true} />
              <Route path="/addProject"  component={AddProject} exact={true}/>
              <Route path="/updateProject/:id" component={UpdateProject} exact={true} />
              <Route path="/projectboard/:id" component={ProjectBoard} exact={true} />
              <Route path="/addtaskform/:id" component={AddProjectTaskForm} exact={true} />
              <Route path="/updatetaskform/:id/:projectSequence" component={UpdateProjectTaskForm} exact={true} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
