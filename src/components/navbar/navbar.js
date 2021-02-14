import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navi = () => {
    return (
        <>
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand>
     <h3>Foam wash</h3>
    </Navbar.Brand>
    <Nav className="mr-auto" style={{marginLeft: "50%"}}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Contact">Contact Us</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
        </>
    )
}

export default Navi
