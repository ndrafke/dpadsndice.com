import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <Navbar className="nav-color" fixed="top" bg="dark" expand="sm">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Stream</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#follow">Follow</Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}