import React, { Component } from "react";
import classes from "./SendButton.module.css";
class SendButton extends Component {
  render() {
    return (
      <div className={classes.ButtonDiv}>
        <button onClick={this.props.clicked} className={classes.Button}>
          SEND
        </button>
      </div>
    );
  }
}
export default SendButton;
