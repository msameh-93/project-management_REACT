import React from 'react';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
/***Components****/
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
