import styled from 'styled-components';
import { DropDownComponentProps } from './drop-down.component.props';

/**
 * Styles for DropDown Select Wrapper
 */
export const DropdownWrapper = styled.div<DropDownComponentProps>`
  display: flex;
  width: ${({ wide }) => (wide ? '40rem' : '100%')} !important;
  flex-flow: column;
  justify-content: flex-start;
`;

/**
 * Styles for Select Feild
 */
export const StyledSelect = styled.select`
  appearance: none;
  font-size: 1.6rem;
  height: 5rem;
  padding: 0.5em 3.5em 0.5em 1em;
  color: ${({ theme: { colors } }) => colors.textLight};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.borderLightest};
  border-radius: 0.5rem;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, white, white);
  background-position: calc(100% - 2rem) calc(1em + 0.2rem), calc(100% - 1.5rem) calc(1em + 0.2rem), 100% 0;
  background-size: 0.5rem 0.5rem, 0.5rem 0.5rem, 2.5em 2.5em;
  background-repeat: no-repeat;
  &:active {
    border: 1px solid ${({ theme: { colors } }) => colors.primary};
  }
  &:focus {
    background-image: linear-gradient(45deg, gray 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, gray 50%), linear-gradient(to right, white, white);
    background-position: calc(100% - 1.5rem) 1em, calc(100% - 20px) 1em, 100% 0;
    background-repeat: no-repeat;
    outline: 0;
    border: 1px solid ${({ theme: { colors } }) => colors.primary};
  }
  &:hover {
    cursor: pointer;
  }
`;

/**
 * Styles for Dropdown options
 */
export const StyledOption = styled.option`
  background: ${({ theme: { colors } }) => colors.white};
  padding: 1rem !important;
  display: flex;
  white-space: pre;
  color: ${({ theme: { colors } }) => colors.textDark};
`;

/**
 * Styles for Label
 */
export const StyledLabel = styled.label`
  display: inline;
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500 !important;
  margin-bottom: 1rem;
`;
