import React from 'react';
import { Form, Input, TextArea, Button } from "semantic-ui-react";

const Contact = () => {
    return (
        <div style={{paddingTop: "200px", background: "rgba(19, 19, 19, 0.6)", height: "730px", color: "white"}}>
    <Form style={{margin: "0 auto", width: "50%"}}>
    <Form.Field required>
      <label style={{color: "white"}}>Name</label>
      <Input placeholder='Full name' />
    </Form.Field>
    <Form.Field required>
      <label style={{color: "white"}}>Mobile</label>
      <Input placeholder='Your contact number' />
    </Form.Field>
    <Form.Field id='form-textarea-control-opinion' required>
        <label style={{color: "white"}}>Message</label>
      <TextArea placeholder='Type your Message here' />
    </Form.Field>
    <Button basic inverted color='green'>
        Send
      </Button>
  </Form>
        </div>
    );
}

export default Contact
