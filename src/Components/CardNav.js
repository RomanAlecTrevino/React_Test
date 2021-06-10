import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class CardNav extends Component {
  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">Basic</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#">Professional</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default CardNav