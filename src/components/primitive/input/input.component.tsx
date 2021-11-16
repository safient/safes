import React from 'react';
import { Text } from 'components/primitive';
import {
  InputWrapperContainer,
  InputLabel,
  InputWrapper,
  StyledInput,
  ErrorMessageContainer,
} from './input.component.styles';
import { InputComponentProps } from './input.component.props';

export const Input = ({ value, type = 'text', label, isDisabled, error, ...rest }: InputComponentProps) => {
  return (
    <InputWrapperContainer>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <StyledInput autoFocus value={value} type={type} error={error} {...rest} />
      </InputWrapper>
      {error && (
        <ErrorMessageContainer>
          <Text variant='small' color='error'>
            {error}
          </Text>
        </ErrorMessageContainer>
      )}
    </InputWrapperContainer>
  );
};
