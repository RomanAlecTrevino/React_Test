import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import CardNav from './CardNav';
import BasicForm from './Form-Basic';
import EducationForm from './Form-Education';
import ProfessionalForm from './Form-Professional';

class thisCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: null,
    }
  }

  handleTab(event) {
    console.log(event.target);
  }

  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <CardNav />
        {/* <BasicForm /> */}
        {/* <EducationForm /> */}
        <ProfessionalForm />
        <Button type="submit" size="sm" variant="secondary" onClick={(event) => this.handleTab(event) }>
          It is working
        </Button>
      </Card>
    );
  }
}

export default thisCard;
