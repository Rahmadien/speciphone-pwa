import React from "react";
import {Nav, Navbar, Container, NavLink } from 'react-bootstrap'



const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
      <Navbar.Brand>Spec<strong>iphone</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <NavLink href="/">Phone</NavLink>
          <NavLink href="/watch">Watch </NavLink>
          <NavLink href="/About">About </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
