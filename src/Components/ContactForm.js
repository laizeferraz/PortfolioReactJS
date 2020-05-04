import React from "react";
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="name" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="Name" id="exampleName" placeholder="Full Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default ContactForm;