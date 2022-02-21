import styled, { keyframes } from 'styled-components';
import { Text } from '../text/text.component';

/**
 * Key Frame for spinner.
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
 * Styles for Spinner
 */
export const SpinnerContainer = styled.div`
  border: 0.3rem solid ${({ theme: { colors } }) => colors.primary};
  border-top: 0.3rem solid ${({ theme: { colors } }) => colors.white};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${spin} 0.6s linear infinite;
`;

export const Spinner = () => {
  return (
    <>
      <SpinnerContainer />;
      <Text variant='small' text='Loading' />
    </>
  );
};
