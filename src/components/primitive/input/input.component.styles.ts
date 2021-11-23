import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { InputComponentProps } from './input.component.props';

export const InputWrapperContainer = styled.fieldset<InputComponentProps>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ wide }) => (wide ? '40rem' : '100%')} !important;
  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

export const StyledInput = styled.input<InputComponentProps>`
  /* todo- change font color */
  color: ${({ error, theme: { colors } }) => (error ? colors.error : colors.textLighter)};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
  /* todo- change border color */
  /* border: 1px solid ${({ theme: { colors } }) => colors.borderLighter}; */

  /** todo- change the border color */
  border: 1px solid ${({ error, theme: { colors } }) => (error ? colors.error : colors.borderLighter)} !important;
  outline: none;
  width: 40rem;
  height: 5rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  transition: border 150ms ease-out;
  -moz-appearance: textfield;
  text-overflow: ellipsis;

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.primary};
    background-color: ${({ theme: { colors } }) => colors.white};
  }
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;

    /* todo- replace color */
    color: ${({ theme: { colors } }) => colors.textLighter};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

/**
 * This styled will be applied while using Validations
 */

export const Icon = styled.span`
  position: absolute;
  height: 4rem;
  width: 4rem;
  top: 1.5rem;
  left: 36.5rem;
`;

/**
 * Styles for Label
 */
export const InputLabel = styled.label`
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
