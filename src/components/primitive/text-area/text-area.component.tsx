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

export const TextArea = ({ value, label, isDisabled, error, errorMsg, ...rest }: TextAreaComponentProps) => {
  return (
    <TextAreaContainer>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaWrapper>
        <StyledTextArea autoFocus value={value} error={error} {...rest} />
      </TextAreaWrapper>
      {error && (
        <ErrorMessageContainer>
          <Icon>
            <IconSvg name='error' size='medium' />
          </Icon>
          <Text variant='small' color='error' paddingLeft={2.4}>
            {errorMsg}
          </Text>
        </ErrorMessageContainer>
      )}
    </TextAreaContainer>
  );
};
