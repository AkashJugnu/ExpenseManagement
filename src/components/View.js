import React from "react";
import {Table} from "react-bootstrap";



const View = ({list}) => {
    return(
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Expense Type</th>
      <th>Category</th>
      <th>Description</th>
      <th>Debit</th>
      <th>Credit</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    {list.map((TableRow,index) => {
        return(<tr>
            <td>{index+1}</td>
            <td>{TableRow.date}</td>
            <td>{TableRow.expenseType}</td>
            <td>{TableRow.category}</td>
            <td>{TableRow.description}</td>
            <td style={{backgroundColor: TableRow.credit>0 ? "" : "red"}}>{TableRow.debit}</td>
            <td style={{backgroundColor: TableRow.credit>0 ? "green" : ""}}>{TableRow.credit}</td>
            <td>{TableRow.balance}</td>
          </tr>
        )
    })}
   
   
  </tbody>
</Table>
    )
}

export default View;