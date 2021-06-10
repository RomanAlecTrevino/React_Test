import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class ProfessionalForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="professional">
          <Form.Label>Professional</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Tell us about your professional experience"
          ></Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default ProfessionalForm;
