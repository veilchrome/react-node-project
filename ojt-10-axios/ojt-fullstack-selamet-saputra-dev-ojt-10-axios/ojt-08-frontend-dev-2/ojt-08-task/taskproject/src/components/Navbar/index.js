import React from "react";
import { Nav, Bars, NavLink, NavMenu } from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/"></NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/hook">Hook</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
