import * as React from 'react';
import styled from 'styled-components';
import { Base, Title, ContentHeader, Small, Content, Description } from './typography.component.styles';
import { TextPresets, TextProps } from './typography.component.props';

const Text: React.FC<TextProps> = ({ size, color, lineHeight, upperCase, variant, children }) => {
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

    ${({ center }) => (center ? `text-align: center` : '')};
    ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px` : '')};

    ${({ upperCase }) => (upperCase ? `text-transform: uppercase` : '')};
    ${({ lowerCase }) => (lowerCase ? `text-transform: lowercase` : '')};
    ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft}px` : '')};
    ${({ paddingRight }) => (paddingRight ? `padding-left: ${paddingRight}px` : '')};

    ${({ noBold }) => (noBold ? `font-weight: normal` : '')};
  `;

  return <Typography>{children}</Typography>;
};

export { Text };
