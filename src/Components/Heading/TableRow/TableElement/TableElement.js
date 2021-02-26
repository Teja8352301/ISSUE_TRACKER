import React, { Component } from "react";
import classes from "./TableElement.module.css";
class TableElement extends Component {
  render() {
    let coloring = this.props.color;
    return (
      <td
        style={{ backgroundColor: coloring }}
        className={classes.TableElement}
      >
        {this.props.children}
      </td>
    );
  }
}
export default TableElement;
