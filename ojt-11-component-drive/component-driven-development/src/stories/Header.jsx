import styled from "styled-components";

import "./header.css";

// Styled Nav for Styling Navbar
const StyledNav = styled.nav`
  ul {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    list-style-type: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  li {
    margin-right: 30px;
    color: #1a1a1a;
    cursor: pointer;
  }
`;

export const Header = () => (
  <header>
    <div className="storybook-header">
      <div>
        <svg
          id="logo-35"
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            className="ccompli1"
            fill="#007AFF"
          ></path>{" "}
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            className="ccustom"
            fill="#312ECB"
          ></path>{" "}
        </svg>
        <h1>Flip.co</h1>
      </div>
      <div className="storybook-navbar">
        <StyledNav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </StyledNav>
      </div>
    </div>
  </header>
);
