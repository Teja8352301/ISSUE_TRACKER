import React, { Component } from "react";
import Table from "../../Containers/table/Table";
import Header from "../Header/Header";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Table />
      </React.Fragment>
    );
  }
}
export default Home;
