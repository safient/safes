import styled from 'styled-components';

export const InputWrapperContainer = styled.fieldset`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input`
  /* todo- change font color */
  color: #555770;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
  /* todo- change border color */
  border: 1px solid ${({ theme: { colors } }) => colors.borderLighter};
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
    font-weight: 500;
    font-size: 1.6rem;
    /* color: #8e90a6 !important; */

    /* todo- replace color */
    color: ${({ theme: { colors } }) => colors.textLight};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const InputLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500 !important;
  margin-bottom: 1rem;
`;

export const ErrorMessageContainer = styled.fieldset`
  margin: 4px 0 4px 0;
`;
