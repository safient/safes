import { useState } from "react";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { GenericModalComponentProps } from "./generic-modal.component.props";
import { Box, Text, Button } from "..";

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

const ModalButton = styled(Button)`
  height: 4rem !important;
  width: 2rem !important;
  margin: 0.5rem !important;
  cursor: pointer;
`;

const StyledModal = Modal.styled`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  opacity: 1;
  padding: 1rem;
  transition : all 0.3s ease-in-out;
  position: relative;
`;

const CloseModal = styled.h1`
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

const GenericModal: React.FunctionComponent<GenericModalComponentProps> = (
  props: GenericModalComponentProps
) => {
  const { show, onClose, title, onSubmit, onCancel, children, hide } = props;

  const [isOpen, setIsOpen] = useState(show);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e: any) {
    setOpacity(0);
    setIsOpen(!isOpen);
    onClose();
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        backgroundProps={{ opacity }}
      >
        {!hide && <CloseModal onClick={toggleModal}>X</CloseModal>}
        {!!title && <Box vCenter hCenter paddingTop={2}>
          <Text bold {...title} />
        </Box>}
        <Box paddingVertical={2}>{children}</Box>
        {!hide && <Box row rightAlign paddingTop={2}>
          <ModalButton
            label={{ text: "Close", color: "black" }}
            variant="ghost"
            onClick={onClose}
          />
          <ModalButton
            label={{ text: "Continue" }}
            variant="small"
            onClick={onClose}
          />
        </Box>}
      </StyledModal>
    </ModalProvider>
  );
};

export default GenericModal;
