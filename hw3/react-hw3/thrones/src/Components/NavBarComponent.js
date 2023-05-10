import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';

export default class NavBarComponent extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">GOT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/houses">Houses</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
