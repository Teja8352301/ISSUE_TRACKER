import React, { Component } from "react";
import TableRow from "../../Components/Heading/TableRow/TableRow";
import classes from "./Table.module.css";
import TableHead from "../../Components/TableHead/TableHead";
import axios from "axios";
class Table extends Component {
  componentDidMount() {
    axios
      .get("http://35.194.23.15:2232/issues")
      .then(response => {
        this.setState({ data: response.data.data, stateData: true });
      })
      .catch(error => {
        console.log(error);
      });
  }
  state = {
    data: null,
    stateData: false,
  };
  render() {
    let tableData = null;
    if (this.state.stateData) {
      tableData = this.state.data.map((ele, index) => {
        let color = null;
        if (index % 2 === 1) {
          color = "#dedede";
        } else {
          color = "white";
        }
        return (
          <TableRow
            color={color}
            key={ele.issueId}
            issueId={ele.issueId}
            issueName={ele.issueName}
            startDate={ele.startDate}
            endDate={ele.endDate}
            issueDetails={ele.issuedetails}
            resolutionDetails={ele.resolutionDetails}
            category={ele.category}
            stakeHolder={ele.stakeHolder}
          />
        );
      });
    }

    return (
      <div>
        {this.state.stateData ? (
          <div>
            {this.state.data.length ? (
              <div className={classes.Table}>
                <table>
                  <thead>
                    <tr className={classes.Tr}>
                      <TableHead>ISSUE ID</TableHead>
                      <TableHead>ISSUE NAME</TableHead>
                      <TableHead>START DATE</TableHead>
                      <TableHead>END DATE</TableHead>
                      <TableHead>ISSUE DETAILS</TableHead>
                      <TableHead>RESOLUTION DETAILS</TableHead>
                      <TableHead>CATEGORY</TableHead>
                      <TableHead>STAKEHOLDER</TableHead>
                    </tr>
                  </thead>
                  <tbody>{tableData}</tbody>
                </table>
              </div>
            ) : (
              <h1 style={{ textAlign: "center" }}>No Data Found</h1>
            )}
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>Data Processing</h1>
        )}
      </div>
    );
  }
}
export default Table;
