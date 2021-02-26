import React, { Component } from "react";
import Heading from "../Heading/Heading";
import classes from "./Header.module.css";
import Button from "../Heading/Button/Button";
class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Heading />
        <Button>ADD NEW ITEM</Button>
      </div>
    );
  }
}
export default Header;
