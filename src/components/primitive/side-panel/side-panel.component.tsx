import React, { useEffect, useRef } from 'react';
import { styled } from 'themes';
import { SidePanelComponentProps } from './side-panel.component.props';

const Container = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-radius: 0;
  z-index: 999;
  background-color: red;
  transition: 0.8s ease;
`;

const OpenButton = styled.div`
  height: 50px !important;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 9rem;
  width: 20px !important;
  position: absolute;
  right: 0;
  top: 4rem;
  outline: none;
  z-index: 1;
  background-color: rgba(64, 194, 133, 0.693);
  border-color: rgba(64, 194, 133, 0.693);
  border-left: 0;
  cursor: pointer;
`;

const CloseButton = styled.div`
  height: 50px;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 9rem;
  width: 20px;
  position: absolute;
  right: 25vw;
  top: 0rem;
  outline: none;
  z-index: 9999;
  background-color: rgba(64, 194, 133, 0.693);
  border-color: rgba(64, 194, 133, 0.693);
  border-left: 0;
  cursor: pointer;
`;

export const SidePanel: React.FC<SidePanelComponentProps> = (
  props: SidePanelComponentProps
) => {
  const { innerWidth: vw, innerHeight: vh } = window;
  const { show, onClose, togglePanel, children } = props;

  const wrapperRef = useRef<any>(null);

  const closePanel = () => {
    onClose();
  };

  const onEscapeKeydown = (event: any) => {
    if (event.keyCode === 27) {
      closePanel();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onEscapeKeydown, false);
    return () => {
      document.removeEventListener('keydown', onEscapeKeydown, false);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
        closePanel();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  if (!show) {
    return (
      <>
        <OpenButton onClick={togglePanel} className="toggle-menu" />
      </>
    );
  }

  return (
    <React.Fragment>
      <Container
        ref={wrapperRef}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 0.25 * vw,
          minHeight: vh,
        }}
      >
        <div className="content">{children}</div>
      </Container>
      <CloseButton onClick={closePanel} className="toggle-menu2" />
    </React.Fragment>
  );
};
