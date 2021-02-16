import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
     <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link> 
     <Link to="/services"> <Nav.Link href="#features">Services</Nav.Link></Link>
     <Link to="/about"><Nav.Link href="#About">About</Nav.Link></Link> 
     <Link to="/contact"><Nav.Link href="#contact">Contact Us</Nav.Link></Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
        </>
    );
}

export default Navi
