import React, { Component } from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
class Button extends Component {
  render() {
    return (
      <Link to="/ADDITEM" className={classes.Button}>
        {this.props.children}
      </Link>
    );
  }
}
export default Button;
