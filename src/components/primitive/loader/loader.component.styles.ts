import styled, { keyframes } from 'styled-components';
import { BreakPoints } from 'utils';
import { Box, Text } from 'components/primitive';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 0.4rem solid ${({ theme: { colors } }) => colors.spinnerBorder};
  border-top: 0.4rem solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${spin} 0.6s linear infinite;
`;

export const SpinnerContainer = styled(Box)`
  flex: 0 0 20rem !important;
  background: ${({ theme: { colors } }) => colors.white};
  height: 20rem !important;
  width: 30rem !important;
  align-items: center;
  justify-content: center;
  align-content: normal !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};

  @media screen and (max-width: ${BreakPoints.medium}) {
    align-items: center;
    justify-content: center;
    align-content: normal !important;
    background: ${({ theme: { colors } }) => colors.white};
  }
  @media screen and (max-width: ${BreakPoints.small}) {
    align-items: center !important;
    justify-content: center !important;
    background: transparent;
    box-shadow: none;
  }
`;

export const LoaderText = styled(Text)`
  margin-top: 1.4rem;
`;
