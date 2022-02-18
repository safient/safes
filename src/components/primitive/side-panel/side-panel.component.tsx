import React, { useEffect, useRef } from 'react';
import { styled } from 'themes';
import { SidePanelComponentProps } from './side-panel.component.props';
import { Card } from '../card/card.component';

const PanelContainer = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-radius: 0;
  z-index: 999;
  background-color: ${({ theme: { colors } }) => colors.white};
  transition: 0.8s ease;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30vw;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ContentContainer = styled(Card)`
  padding: 3rem !important;
`;

export const SidePanel: React.FC<SidePanelComponentProps> = (
  props: SidePanelComponentProps
) => {
  const { show, onClose, togglePanel, children } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const closePanel = () => {
    onClose();
  };

  const onEscapeKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
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
    return <></>;
  }

  return (
    <React.Fragment>
      <PanelContainer ref={wrapperRef}>
        <ContentContainer>{children}</ContentContainer>
      </PanelContainer>
    </React.Fragment>
  );
};
