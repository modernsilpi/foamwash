import React, {useState} from 'react';
import { Form, Input, TextArea, Button, FormSelect } from "semantic-ui-react";
import DateTimePicker from 'react-datetime-picker';

const Book = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div style={{paddingTop: "100px", background: "rgba(19, 19, 19, 0.6)", height: "730px", color: "white"}}>
           <div style={{margin: "0 auto", width: "200px"}}><label>Pick your date and time:</label></div> 
          <div style={{margin: "0 auto", background: "white", width: "200px", color: "black"}}> 
        <DateTimePicker
        onChange={onChange}
        value={value}
      /></div>
    <Form style={{margin: "0 auto", width: "50%"}}>
    <Form.Field required>
      <label style={{color: "white"}}>Name</label>
      <Input placeholder='Full name' />
    </Form.Field>
    <Form.Field required>
      <label style={{color: "white"}}>Mobile</label>
      <Input placeholder='Your contact number' />
    </Form.Field>

    <Form.Field required>
      <label style={{color: "white"}}>D.no:</label>
      <Input placeholder='Your door number' />
    </Form.Field>

    <Form.Field required>
      <label style={{color: "white"}}>Area and landmark:</label>
      <Input placeholder='Full Street name/ area/ landmark' />
    </Form.Field>

    <Form.Field id='form-textarea-control-opinion'>
        <label style={{color: "white"}}>Message (optional)</label>
      <TextArea placeholder='Type your Message here' />
    </Form.Field>
    <Button basic inverted color='green' style={{margin: "0 auto"}}>
        Book
      </Button>
  </Form>
        </div>
    )
}

export default Book
