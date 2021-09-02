import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Title, ContentHeader, Content, Small, Base } from './text.component.styles';
import { TextComponentProps, Variant, FontSize } from './text.component.props';
import { translate } from '../../../i18n/translate';
import { IStyledTheme } from '../../../themes/styled-components';

export const Text: React.FunctionComponent<TextComponentProps> = withTheme(
  (props: TextComponentProps & IStyledTheme) => {
    const { text, tx, txOptions, variant, children, ...rest } = props;
    const i18nText = tx && translate(tx, txOptions);
    const content = i18nText || text || children;

    const getVariant = (variant: Variant = Variant.content) => {
      let TextComponent;
      switch (variant) {
        case Variant.title:
          TextComponent = Title;
          break;
        case Variant.contentHeader:
          TextComponent = ContentHeader;
          break;
        case Variant.content:
          TextComponent = Content;
          break;
        case Variant.small:
          TextComponent = Small;
          break;
        default:
          TextComponent = Base;
      }
      return TextComponent;
    };

    const StyledText = getVariant(variant ? Variant[variant] : undefined);
    const Typography = styled(StyledText)<TextComponentProps>`
      /* custom styles goes here */
      text-transform: ${({ upperCase }) => upperCase && `uppercase`};
      text-transform: ${({ lowerCase }) => lowerCase && `lowercase`};
      text-transform: ${({ capitalize }) => capitalize && `lowercase`};
      text-align: ${({ center }) => center && 'center'};
      text-align: ${({ left }) => left && `left`};
      text-align: ${({ right }) => right && `right`};
      line-height: ${({ lineHeight }) => lineHeight && `${lineHeight}em`};
      padding-left: ${({ paddingLeft }) => paddingLeft && ` ${paddingLeft}rem`};
      padding-right: ${({ paddingRight }) => paddingRight && ` ${paddingRight}rem`};
      font-weight: ${({ noBold }) => noBold && `normal`};
      font-weight: ${({ bold500 }) => bold500 && `500`};
      font-weight: ${({ bold600 }) => bold600 && `600`};
      font-size: ${({ size }) => size && `${FontSize[size]} rem`};
      font-size: ${({ size }) => size && `${size}rem`};
      color: ${({ color, theme: { colors } }) => color && colors[color]};
    `;

    return <Typography {...rest}>{content}</Typography>;
  }
);
