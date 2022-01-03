import styled, { keyframes } from 'styled-components';
import { Text } from 'components/primitive';
import { BreakPoints } from 'utils';

/**
 * KeyFrame Animation.
 */
const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
       transform: rotate(360deg);
       }
`;

/**
 * Styles for Loading Spinner.
 */
export const Spinner = styled.div`
  border: 0.4rem solid ${({ theme: { colors } }) => colors.spinnerBorder};
  border-top: 0.4rem solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${spin} 0.6s linear infinite;
`;

/**
 * Styles for NoticeLoaderContainer.
 */
export const NoticeLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors } }) => colors.white};
  min-width: 20rem !important;
  word-wrap: break-word;
  align-items: center;
  justify-content: center;
  align-content: normal !important;

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

/**
 * Styles for Loader Text.
 */
export const LoaderText = styled(Text)`
  margin-top: 1.5rem;
`;

/**
 * Styles for optional Helper Text.
 */
export const HelperText = styled(Text)`
  ${({ text }) =>
    text &&
    `
    text-align: center;
    margin-top: 1.5rem;
    padding: 0 0.9rem;
    width: 300px;
  `}
`;
