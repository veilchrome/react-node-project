import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  background-color: ${(props) => (props.isDarkMode ? "#0C2D57" : "#f4f4f4")};
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 15px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.isDarkMode ? "#0B60B0" : "#ccc")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? "#777" : "#aaa")};
  }

  &:focus {
    outline: none;
  }
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
    border-radius: 10px;
    text-decoration: none;

    /* Custom styles to remove blue color of active link */
    & > a {
      color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};
      text-decoration: none;
    }

    &:hover {
      background-color: ${(props) => (props.isDarkMode ? "#555" : "#ccc")};
      border-radius: 20px;
    }
  }
`;

const Navbar = ({ isDarkMode }) => {
  const [darkMode, setDarkMode] = useState(isDarkMode);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <NavContainer isDarkMode={darkMode}>
      <Button onClick={toggleMode} isDarkMode={darkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </Button>
      <Nav isDarkMode={darkMode}>
        <ul>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/opinion">Opinion</NavLink>
          </li>
          <li>
            <NavLink to="/sport">Sport</NavLink>
          </li>
          <li>
            <NavLink to="/culture">Culture</NavLink>
          </li>
          <li>
            <NavLink to="/lifestyle">Lifestyle</NavLink>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
