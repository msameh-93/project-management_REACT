import React from 'react';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
/***Components****/
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProject from "./components/project/AddProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/addProject"  component={AddProject} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
