import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";
import { Button } from "..";

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const ModalButton = styled(Button)`
  height: 4rem !important;
  width: 2rem !important;
  margin: 0.5rem !important;
  cursor: pointer;
`;

export const StyledModal = Modal.styled`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  opacity: 1;
  padding: 1rem;
  transition : all 0.3s ease-in-out;
  position: relative;
`;

export const CloseModal = styled.h1`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textLight};
  z-index: 999;

  &:hover {
    cursor: pointer;
  }
`;
