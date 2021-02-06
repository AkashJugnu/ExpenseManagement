import React, {useState} from "react";
import {Button, Form, Col, Row} from "react-bootstrap";
import Modal from "./modal";
// <td>{index+1}</td>
// <td>{TableRow.date}</td>
// <td>{TableRow.category}</td>
// <td>{TableRow.description}</td>
// <td>{TableRow.debit}</td>
// <td>{TableRow.credit}</td>
// <td>{TableRow.balance}</td>


const ButtonComponent = ({setListData,listData}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState([null, "credit", "debit"])

    const submitData=(event)=> {
        event.preventDefault()
        const {date,expense,category,description,expenseType} = event.target;
        const data = {
            date:date.value,
            description:description.value,
            category: category.value,
            expenseType: expenseType.value
        }

        const CurrentBalance = parseInt(listData[0] ? (listData[0].balance || 0) : 0, 10);
        const CurrentExpense = parseInt(expense.value, 10);
       
        if (type === "credit") {
            data['credit'] = CurrentExpense;
            data['balance'] = CurrentBalance + CurrentExpense;
            data['debit'] = 0;
        } else {
            data['debit'] = CurrentExpense
            data['balance'] = CurrentBalance - CurrentExpense;
            data['credit'] = 0;
        }
      
        setListData([data, ...listData])
        setIsOpen(false)
    }

    return (
    <>
  
  <Button onClick={() => {
    setType("credit")  
    setIsOpen(true)}} variant="success">Add Credit</Button>{' '}
  <Button onClick={() => {
      setType("debit")
      setIsOpen(true)}} variant="danger">Add Debit</Button>{' '}
  
  <div>
        <Modal open={isOpen} onclose={() => setIsOpen(false)}>
        <Form onSubmit={submitData}>
        
       
        <Form.Group as={Col}>
        <Form.Label>Expense Type</Form.Label>
        <div style={{backgroundColor:"lightGray", borderRadius: "7px", display:"flex", justifyContent:"center"}}> 
        <Row>
        <div style={{display:"flex", justifyContent:"space-evenly", width:"400px"}}>
            <Form.Check
              type="radio"
              label="Daily"
              defaultChecked 
              name="expenseType"
              id="expenseTypeDaily"
              value= "Daily"
            />
            <Form.Check
              type="radio"
              label="Weekly"
              name="expenseType"
              id="expenseTypeWeekly"
              value= "Weekly"
            />
            <Form.Check
              type="radio"
              label="Monthly"
              name="expenseType"
              id="expenseTypeMonthly"
              value= "Monthly"
            />
            </div>
          </Row>
          </div>
 
        </Form.Group>
       
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
            type="date"
            placeholder="Enter date"
            name="date"
          />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridExpense">
            <Form.Label>{type === "credit" ? "Credit" : "Debit"} Amount</Form.Label>
            <Form.Control type="number" placeholder="Amount" name="expense"/>
          </Form.Group>
        </Form.Row>
      
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" defaultValue=" " name="category">
              <option>Select Any...</option>
              <option>Foods</option>
              <option>Automobile</option>
              <option>Entertainment</option>
              <option>Clothing</option>
              <option>HealthCare</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Personal Care</option>
              <option>Investment</option>
              <option>Gifts & Donations</option>
              <option>Bills & Utilities</option>
              <option>Others</option>
            </Form.Control>
          </Form.Group>
      
        
      
        <Form.Group controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Category descriptions" name="description" />
      </Form.Group>
      
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
        </Modal>
  </div>
  
</>
)
}

export default ButtonComponent;