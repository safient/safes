import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';

/**
 * Styles for DateLabel.
 */
export const DateLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500 !important;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

/**
 * Styles for input Container
 */
export const StyledInput = styled(Flatpickr)`
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme: { colors } }) => colors.borderLightest} !important;
  outline: none;
  box-sizing: border-box;
  min-width: 100%;
  height: 5rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  transition: border 150ms ease-out;
  -moz-appearance: textfield;
  text-overflow: ellipsis;
  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme: { colors } }) => colors.textLighter};
  }
`;
