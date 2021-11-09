import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Box, Button, Text } from "..";
import "./Modal.css";

const ModalButton = styled(Button)`
  height: 4rem !important;
  width: 2rem !important;
  margin: 0.5rem !important;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  .enter-done {
    opacity: 1;
    pointer-events: visible;
    transform: translateY(0);
  }
  
  .exit {
    opacity: 0;
    transform: translateY(-200px);
  }
`;

const Content = styled.div`
  /* width: 50rem; */
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  transform: translateY(-200px);
  padding: 1rem;

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Modal = (props: any) => {
  const {show, onClose, title, children} = props

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <ModalContainer className="modal" onClick={onClose}>
        <Content className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Box vCenter hCenter paddingTop={2}>
            <Text bold {...title} />
          </Box>
          <Box paddingVertical={2}>{children}</Box>
          <Box row rightAlign paddingTop={2}>
            <ModalButton
              label={{ text: "Close" }}
              variant="ghost"
              onClick={onClose}
            />
            <ModalButton
              label={{ text: "Continue" }}
              variant="small"
              onClick={onClose}
            />
          </Box>
        </Content>
      </ModalContainer>
    </CSSTransition>
  );
};

export default Modal;
