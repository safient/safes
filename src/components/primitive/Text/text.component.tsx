import * as React from 'react';
import styled from 'styled-components';
import { Base, Title, ContentHeader, Small, Content, Description } from './text.component.styles';
import { TextPresets, TextProps } from './text.component.props';

const Text: React.FC<TextProps> = ({
  size,
  capitalize,
  upperCase,
  lowerCase,
  variant,
  children,
  paddingLeft,
  paddingRight,
  center,
  left,
  right,
}) => {
  let TextComponent;

  switch (variant) {
    case TextPresets.TITLE:
      TextComponent = Title;
      break;
    case TextPresets.CONTENT_HEADER:
      TextComponent = ContentHeader;
      break;
    case TextPresets.CONTENT:
      TextComponent = Content;
      break;
    case TextPresets.DESCRIPTION:
      TextComponent = Description;
      break;

    case TextPresets.SMALL:
      TextComponent = Small;
      break;

    default:
      TextComponent = Base;
  }

  const Typography = styled(TextComponent)`
    /* custom styles goes here */

    text-transform: ${({ upperCase }) => (upperCase ? `uppercase` : '')};
    text-transform: ${({ lowerCase }) => (lowerCase ? `lowercase` : '')};
    text-transform: ${({ capitalize }) => (capitalize ? `lowercase` : '')};
    text-align: ${({ center }) => (center ? `center` : '')};
    text-align: ${({ left }) => (left ? `left` : '')};
    text-align: ${({ right }) => (right ? `right` : '')};
    line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}em` : '')};
    padding-left: ${({ paddingLeft }) => (paddingLeft ? ` ${paddingLeft}rem` : '')};
    padding-right: ${({ paddingRight }) => (paddingRight ? ` ${paddingRight}rem` : '')};
    font-weight: ${({ noBold }) => (noBold ? `normal` : '')};
    font-size: ${({ size }) => (size ? `${size}rem` : '')};
  `;

  return (
    <Typography
      upperCase={upperCase}
      lowerCase={lowerCase}
      capitalize={capitalize}
      center={center}
      left={left}
      right={right}
      size={size}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export { Text };
