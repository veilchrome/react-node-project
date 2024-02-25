import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <p>Buka Modal</p>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
