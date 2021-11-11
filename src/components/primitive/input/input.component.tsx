import { Props } from './input.component.props';
import {
  InputWrapperContainer,
  InputLabel,
  InputWrapper,
  StyledInput,
  ErrorMessageContainer,
} from './input.component.styles';
import { Text } from 'components/primitive';
import { createRef, useEffect, useRef } from 'react';

const Input = ({ value, type = 'text', label, isDisabled, ...rest }: Props) => {
  const inputAddonRef = useRef(null);

  return (
    <InputWrapperContainer>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <StyledInput value={value} type={type} ref={inputAddonRef} {...rest} />
      </InputWrapper>
      <ErrorMessageContainer>
        <Text variant='small' color='error'>
          errorrr
        </Text>
      </ErrorMessageContainer>
    </InputWrapperContainer>
  );
};

export default Input;
