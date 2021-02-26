import React, { Component } from "react";
import Label from "./Label/Label";
import Input from "./InputType/InputType";
import Header from "./Header/Header";
import classes from "./Form.module.css";
import Button from "./SendButton/SendButton";
import axios from "axios";
import Modal from "../Modal/Modal";
import { Redirect } from "react-router-dom";
class Form extends Component {
  reference = React.createRef();
  state = {
    modal: false,
    data: {
      issueId: {
        id: "a1",
        value: "",
      },
      issueName: {
        id: "a2",
        value: "",
      },
      startDate: {
        id: "a3",
        value: "",
      },
      endDate: {
        id: "a4",
        value: "",
      },
      issuedetails: {
        id: "a5",
        value: "",
      },
      resolutionDetails: {
        id: "a6",
        value: "",
      },
      category: {
        id: "a7",
        value: "",
      },
      stakeHolder: {
        id: "a8",
        value: "",
      },
    },
  };
  id = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];
  details = [
    "ISSUE ID",
    "ISSUE NAME",
    "START DATE",
    "END DATE",
    "ISSUE DETAILS",
    "RESOLUTION DETAILS",
    "CATEGORY",
    "STAKE HOLDER",
  ];
  changeData = event => {
    // console.log(event.target.id);
    let newState = this.state.data;
    for (var i in newState) {
      if (newState[i].id === event.target.id) {
        newState[i].value = event.target.value;
        this.setState({ data: newState });
      }
    }
  };
  sendData = () => {
    let data = {
      issueId: this.state.data.issueId.value,
      issueName: this.state.data.issueName.value,
      startDate: this.state.data.startDate.value,
      endDate: this.state.data.endDate.value,
      issuedetails: this.state.data.issuedetails.value,
      resolutionDetails: this.state.data.resolutionDetails.value,
      category: this.state.data.category.value,
      stakeHolder: this.state.data.stakeHolder.value,
    };
    for (var i in data) {
      if (data[i].length <= 0) {
        alert(i + " Should Not Be Empty");
        return;
      }
    }
    axios.post("http://35.194.23.15:2232/addissue", data).then(response => {
      if (response.data.status === 200 || response.data.status === 400) {
        this.setState({ modal: !this.state.modal });
      }
    });
  };
  setModalToFalse = () => {
    this.setState({ modal: !this.state.modal });
    this.props.history.push("/Home");
  };
  render() {
    let style = { overflow: "hidden" };
    let label = this.details.map((val, index) => {
      return (
        <div className={classes.InputData} key={this.id[index]}>
          <Label labelName={val}>{val}</Label>
          <Input changed={this.changeData} id={this.id[index]} />
          <br />
        </div>
      );
    });
    return (
      <div>
        <div className={classes.Form} ref={this.reference}>
          <Header />
          <div className={classes.labelForm}>{label}</div>
          <Button clicked={this.sendData} />
        </div>
        {this.state.modal ? (
          <Modal
            clicked={this.setModalToFalse}
            width={this.reference.current.offsetWidth}
            height={this.reference.current.offsetHeight}
          />
        ) : null}
      </div>
    );
  }
}
export default Form;
