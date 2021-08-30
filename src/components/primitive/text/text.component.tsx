import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Base, Title, ContentHeader, Small, Content } from './text.component.styles';
import { FontSizes, TextPresets, TextComponentProps } from './text.component.props';
import { translate } from '../../../i18n/translate';
import { IStyledTheme } from '../../../themes/styled-components';

export const Text: React.FunctionComponent<TextComponentProps> = withTheme(
  (props: TextComponentProps & IStyledTheme) => {
    const {
      bold600,
      bold,
      noBold,
      paddingLeft,
      paddingRight,
      center,
      left,
      right,
      capitalize,
      upperCase,
      lowerCase,
      text,
      tx,
      txOptions,
      size,
      variant,
      children,
      color = 'textDark',
      theme: { colors },
      ...rest
    } = props;

    const i18nText = tx && translate(tx, txOptions);
    const content = i18nText || text || children;

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
      font-weight: ${({ bold600 }) => (bold600 ? `600` : '')};
      font-size: ${({ size }) => (size ? `${FontSizes[size]}rem` : '')};
      color: ${colors[color]} !important;
    `;

    return <Typography {...rest}>{content}</Typography>;
  }
);
