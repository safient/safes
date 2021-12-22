import React from 'react';
import { Text, IconSvg } from 'components/primitive';
import {
  TextAreaContainer,
  TextAreaLabel,
  TextAreaWrapper,
  StyledTextArea,
  ErrorMessageContainer,
  Icon,
} from './text-area.component.styles';
import { TextAreaComponentProps } from './text-area.component.props';

export const TextArea = ({ value, label, isDisabled, error, ...rest }: TextAreaComponentProps) => {
  return (
    <TextAreaContainer>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaWrapper>
        <StyledTextArea autoFocus value={value} error={error} {...rest} />
        {error && (
          <Icon>
            <IconSvg name='error' size='medium' />
          </Icon>
        )}
      </TextAreaWrapper>
      {error && (
        <ErrorMessageContainer>
          <Text variant='small' color='error'>
            {error}
          </Text>
        </ErrorMessageContainer>
      )}
    </TextAreaContainer>
  );
};
