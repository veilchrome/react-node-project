import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavbarStyle = styled.nav`
    background-color: #333;
    padding: 10px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    li {
      display: inline;
      margin: 10px;
      font-size: 18px;
      cursor: pointer;
    }
    li a {
      color: #fff;
      text-decoration: none;
    }
    li a:hover {
      text-decoration: underline;
    }
  `;

  const CustomNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div className="Navbar" data-testid="navbar">
      <NavbarStyle>
        <ul>
          <li>
            <CustomNavLink to="/">Home</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/registration">Registration</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/anilist">Anilist</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/todos">Todo List</CustomNavLink>
          </li>
        </ul>
      </NavbarStyle>
    </div>
  );
};

export default Navbar;
