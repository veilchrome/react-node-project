import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#007bff" : "#555")};
  color: ${(props) => (props.primary ? "#fff" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#777")};
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, primary, onClick }) => (
  <StyledButton primary={primary} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: () => {},
};

export default Button;
