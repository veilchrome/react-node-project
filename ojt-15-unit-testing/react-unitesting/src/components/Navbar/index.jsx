import styled from "styled-components";

const Navbar = () => {
  const NavbarStyle = styled.nav`
    background-color: #333;
    padding: 10px 20px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;
    }
    li {
      display: inline;
      margin-right: 10px;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
    li:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div className="Navbar" data-testid="navbar">
      <NavbarStyle>
        <ul>
          <li>Gandum A</li>
          <li>Gandum C</li>
          <li>Gandum B</li>
        </ul>
      </NavbarStyle>
    </div>
  );
};

export default Navbar;
