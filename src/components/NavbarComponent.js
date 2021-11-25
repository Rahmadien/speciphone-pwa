import React from "react";
import {Nav, Navbar, Container, NavLink } from 'react-bootstrap'



const NavbarComponent = () => {
  return (

    <footer style={{bottom: 0, left: 0, position: "fixed", 
    display:"flex", width:'100%', backgroundColor:"white", 
    
    justifyContent:"space-between"}}>
      <NavLink href="/">Phone</NavLink>
      <NavLink href="/watch">Watch</NavLink>
      <NavLink href="/About">About</NavLink>

   </footer>
  );
};

export default NavbarComponent;
