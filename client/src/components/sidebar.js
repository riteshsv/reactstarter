import React from 'react';
import { Navbar,Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="text-white">Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      </Navbar>
      <Nav className="flex-column">
      <Nav.Item>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/users">
          Users
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/orders">
          Orders
        </Link>
      </Nav.Item>
    </Nav>
    
    </>
  
   
  );
}

export default Sidebar;
