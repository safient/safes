import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { DropDownComponentProps } from './drop-down.component.props';

/**
 * Styles for DropDown Select Wrapper
 */
export const DropdownWrapper = styled.div<DropDownComponentProps>`
  display: flex;
  width: ${({ wide }) => (wide ? '40rem' : '100%')} !important;
  flex-flow: column;
  justify-content: flex-start;

  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
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

/**
 * Error message container
 */
export const ErrorMessageContainer = styled.fieldset`
  margin: 0.4rem 0 0.4rem 0;
`;
