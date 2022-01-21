import React, { useState } from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { GenericModal } from '../generic-modal/generic-modal.component';
import { IconSvg } from '../icon-svg/icon-svg.component';
import { Card } from '../card/card.component';
import { Text } from '../text/text.component';
import { CreateSafeModalProps } from './create-safe.component.props';
import { Box } from '../box/box.component';

export const SafeCard = styled(Card)`
  /* flex: 0 0 auto !important; */
  height: 22.3rem !important;
  width: 30rem !important;
  margin: 1.5rem !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.lightGray};

  &:hover {
    border: 1px solid ${({ theme: { colors } }) => colors.primary};
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    /* flex: 0 0 auto !important; */
    max-height: 24.3rem !important;
    max-width: 33rem !important;
    margin: 1.5rem 0 1.5rem !important;
  }
`;

export const SafeText = styled(Text)`
  margin-top: 2rem;
  font-weight: bold;
`;

export const Icon = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGray};
  border-radius: 1rem;
  padding: 1rem;
`;

export const CreateSafeModal: React.FC<CreateSafeModalProps> = (
  props: CreateSafeModalProps
) => {
  const { show, onClose } = props;
  return (
    <GenericModal
      show={show}
      onClose={onClose}
      title={{ text: 'Create a safe', bold: true }}
      onSubmit={{
        label: { text: 'Continue' },
        variant: 'primary',
        color: 'primaryGradient',
        onClick: () => {},
      }}
      onCancel={{
        label: { text: 'Cancel', color: 'textDark' },
        variant: 'primary',
        color: 'applicationBackground',
        onClick: () => {},
      }}
    >
      <Box row>
        <SafeCard hCenter vCenter>
          <Icon>
            <IconSvg name="signature" size="medium" />
          </Icon>
          <SafeText variant="small" tx="common.cryptoSafe" color="textLight" />
        </SafeCard>
        <SafeCard hCenter vCenter>
          <Icon>
            <IconSvg name="key" size="medium" />
          </Icon>
          <SafeText variant="small" tx="common.genericSafe" color="textLight" />
        </SafeCard>
      </Box>
    </GenericModal>
  );
};
