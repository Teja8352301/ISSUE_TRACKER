import React, { Component } from "react";
import classes from "./InputType.module.css";
class InputType extends Component {
  render() {
    return (
      <input
        className={classes.Input}
        id={this.props.id}
        onChange={event => this.props.changed(event)}
        type="text"
      />
    );
  }
}
export default InputType;
