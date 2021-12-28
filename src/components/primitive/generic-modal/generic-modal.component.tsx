import { useState } from "react";
import { ModalProvider } from "styled-react-modal";
import { GenericModalComponentProps } from "./generic-modal.component.props";
import { Box, Text } from "..";
import {
  FadingBackground,
  StyledModal,
  CloseModal,
  ModalButton,
} from "./generic-modal.component.style";

const GenericModal: React.FunctionComponent<GenericModalComponentProps> = (
  props: GenericModalComponentProps
) => {
  const {
    show,
    onClose,
    title,
    onSubmit,
    onCancel,
    children,
    hide,
    noClose,
  } = props;

  const [isOpen, setIsOpen] = useState(show);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e: any) {
    setOpacity(0);
    setIsOpen(!isOpen);
    if (onClose) onClose();
  }

  const handleClose = () => {
    if (onClose) onClose();
  };

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
        onBackgroundClick={noClose ? () => {} : toggleModal}
        onEscapeKeydown={noClose ? () => {} : toggleModal}
        backgroundProps={{ opacity }}
      >
        {!hide && <CloseModal onClick={toggleModal}>X</CloseModal>}
        {!!title && (
          <Box vCenter hCenter paddingTop={2}>
            <Text bold {...title} />
          </Box>
        )}
        <Box paddingVertical={2}>{children}</Box>
        {!hide && (
          <Box row rightAlign paddingTop={2}>
            {!onCancel && (
              <ModalButton
                label={{ text: "Close", color: "black" }}
                variant="ghost"
                onClick={handleClose}
              />
            )}
            {!onSubmit && (
              <ModalButton
                label={{ text: "Continue" }}
                variant="small"
                onClick={handleClose}
              />
            )}
          </Box>
        )}
      </StyledModal>
    </ModalProvider>
  );
};

export default GenericModal;
