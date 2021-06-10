import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class EducationForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="education">
          <Form.Label>Education</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Tell us about your education"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="degree">
          <Form.Label>Degree?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Which type of degree do you have?"
          ></Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default EducationForm;
