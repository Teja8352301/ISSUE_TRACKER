import React, { Component } from "react";
import classes from "./Modal.module.css";
class Modal extends Component {
  render() {
    let style = {
      width: `${this.props.width + 50}px`,
      height: `${this.props.height + 50}px`,
    };
    return (
      <div className={classes.Modal} style={style}>
        <h1>Data Added Successfully</h1>
        <button className={classes.Button} onClick={this.props.clicked}>
          ok
        </button>
      </div>
    );
  }
}
export default Modal;
