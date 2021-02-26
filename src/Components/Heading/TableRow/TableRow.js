import React, { Component } from "react";
import TableElement from "./TableElement/TableElement";
class TableRow extends Component {
  render() {
    return (
      <tr key={this.props.issueId}>
        <TableElement color={this.props.color}>
          {this.props.issueId}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.issueName}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.startDate}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.issueDetails}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.endDate}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.resolutionDetails}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.category}
        </TableElement>
        <TableElement color={this.props.color}>
          {this.props.stakeHolder}
        </TableElement>
      </tr>
    );
  }
}
export default TableRow;
