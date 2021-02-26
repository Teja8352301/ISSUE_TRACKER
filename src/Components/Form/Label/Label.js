import React, { Component } from "react";
import classes from "./Label.module.css";
class Label extends Component {
  render() {
    return (
      <label className={classes.Label}>
        <strong>{this.props.children}</strong>
      </label>
    );
  }
}
export default Label;
