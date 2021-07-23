import styled, { css } from 'styled-components';
import { WrappedProps, InputProps } from './input.component.props';

const Wrapper = styled.div<WrappedProps>`
  display: inline-flex;
  flex-direction: column;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
`;

const StyledInput = styled.input<InputProps>`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1px 10px;
  border-radius: 5px;
  border: 1px solid #e3e4eb;
  outline: none;
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  background-color: transparent;
  transition: border 150ms ease-out;
  -moz-appearance: textfield;
  text-overflow: ellipsis;
  color: #555770;
  ${(props) =>
    props.height
      ? css`
          height: ${props.height}px;
        `
      : 'auto'};

  &:focus {
    border-color: #96b7ff;
    background-color: #f9faff;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    font-weight: 500;
    font-size: 1.6rem;
    color: #8e90a6 !important;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  // hide arrows when input type = number
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputLabel = styled.div`
  color: #555770;
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 10px;
  align-self: end;
`;

export { Wrapper, StyledInput, InputWrapper, InputLabel };
