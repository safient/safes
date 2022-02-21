import styled from 'styled-components';
import { ChipInput } from 'components/primitive/chip-input/chip-input.component';
import { Box, Button, Input, TextArea } from 'components/primitive';
import { BreakPoints } from 'utils';

export const FormContainer = styled(Box)`
  padding: 4rem 4rem !important;
  position: relative;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  border-radius: 0.5rem 0.5rem 0 0;
  border: 0.01px solid ${({ theme: { colors } }) => colors.borderLightest};
  border-bottom: 0;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 34rem;
    padding: 4rem 2rem 4rem 2rem;
  }
`;

export const FlexContainer = styled(Box)`
  flex-direction: row !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column !important;
  }
`;

export const ButtonContainer = styled(Box)`
  padding: 2rem 4rem !important;
  border: 0.01px solid ${({ theme: { colors } }) => colors.borderLightest};
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  border-top: 0;
  border-radius: 0 0 0.5rem 0.5rem;

  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column !important;
    width: 34rem;
    padding: 4rem 2rem 4rem 2rem;
    gap: 1rem;
    order: 2;
  }
`;

export const StyledInput = styled(Input)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const WideInput = styled(Input)`
  width: 82rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledChipInput = styled(ChipInput)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledTextArea = styled(TextArea)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledButton = styled(Button)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;
