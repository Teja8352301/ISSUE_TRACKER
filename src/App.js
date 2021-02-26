import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Main/Home";
import { Route, Redirect } from "react-router-dom";
import Form from "./Components/Form/Form";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Redirect to="/Home" />
        <Route path="/Home" component={Home} />
        <Route path="/ADDITEM" component={Form} />
      </div>
    );
  }
}

export default App;
