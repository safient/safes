import React from 'react';
import { Text, IconSvg } from 'components/primitive';
import {
  InputContainer,
  InputLabel,
  InputWrapper,
  StyledInput,
  ErrorMessageContainer,
  Icon,
} from './input.component.styles';
import { InputComponentProps } from './input.component.props';

export const Input = ({ value, type = 'text', label, isDisabled, error, ...rest }: InputComponentProps) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <StyledInput autoFocus value={value} type={type} error={error} {...rest} />
        {error && (
          <Icon>
            <IconSvg name='error' size='medium' />
          </Icon>
        )}
      </InputWrapper>
      {error && (
        <ErrorMessageContainer>
          <Text variant='small' color='error'>
            {error}
          </Text>
        </ErrorMessageContainer>
      )}
    </InputContainer>
  );
};
