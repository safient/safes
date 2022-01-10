import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { TextAreaComponentProps } from './text-area.component.props';

/**
 * Styles for TextArea Container.
 */
export const TextAreaContainer = styled.fieldset<TextAreaComponentProps>`
  display: inline-flex;
  flex-direction: column;

  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

/**
 * Styles for TextArea Field.
 */
export const StyledTextArea = styled.textarea<TextAreaComponentProps>`
  color: ${({ error, theme: { colors } }) => (error ? colors.error : colors.textLight)};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5em 3.5em 0.5em 1em;
  border-radius: 0.5rem;
  border: 1px solid ${({ error, theme: { colors } }) => (error ? colors.error : colors.borderLightest)} !important;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-sizing: border-box;
  width: ${({ wide }) => (wide ? '82.0rem' : '40rem')} !important;
  height: 11.1rem;
  outline: none;
  resize: none;
  overflow: hidden;
  -moz-appearance: textfield;
  transition: border 150ms ease-out;
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
    color: ${({ theme: { colors } }) => colors.textLighter};
  }
`;

/**
 * Styles for TextAreaField Wrapper.
 */
export const TextAreaWrapper = styled.div`
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
 * Styles for TextArea Label.
 */
export const TextAreaLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500 !important;
  margin-bottom: 1rem;
`;

/**
 * Error message container.
 */
export const ErrorMessageContainer = styled.fieldset`
  margin: 0.4rem 0 0.4rem 0;
`;
