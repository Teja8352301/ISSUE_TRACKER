import React, { Component } from "react";
import classes from "./TableHead.module.css";
class TableHead extends Component {
  render() {
    return <th className={classes.TableHead}>{this.props.children}</th>;
  }
}
export default TableHead;
