import styled from 'styled-components';
import { FontSize, FontWeight, TextComponentProps, Variant } from './text.component.props';

/**
 * Base style for text component that can be extended.
 */
const Base = styled.h2<TextComponentProps>`
  font-size: ${FontSize.small}rem;
  font-weight: ${FontWeight.bold};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.4;
`;

/**
 * Large sized dark text, usually a large heading.
 */
const Title = styled(Base)<TextComponentProps>`
  font-size: ${FontSize.large}rem;
  color: ${({ theme }) => theme.colors.textDark};
`;

/**
 * A grayish  medium sized bold header.
 */
const ContentHeader = styled(Base)<TextComponentProps>`
  font-size: ${FontSize.medium}rem;
`;

/**
 * Common medium sized text used in description and other contents.
 */
const Content = styled.p<TextComponentProps>`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${FontWeight.semiBold};
  font-size: ${FontSize.small}rem;
  line-height: 1.4;
`;

/**
 * Renders a small gray text.
 */
const Small = styled(Base)<TextComponentProps>`
  font-size: ${FontSize.small}rem;
  font-weight: ${FontWeight.semiBold};
`;

/**
 * returns the Text style based on the variant passed by the user.
 */
const getVariant = (variant: keyof typeof Variant | undefined) => {
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

  const Typography = styled(TextComponent)<TextComponentProps>`
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
    font-size: ${({ size }) => size && `${FontSize[size]}rem`};
    font-size: ${({ size }) => size && `${size}rem`};
    color: ${({ color, theme: { colors } }) => color && colors[color]};
  `;
  return Typography;
};

export { Base, Title, ContentHeader, Content, Small, getVariant };
