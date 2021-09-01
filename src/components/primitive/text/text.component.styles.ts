import styled from 'styled-components';
import { FontSize, FontWeight, TextComponentProps } from './text.component.props';

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

export { Base, Title, ContentHeader, Content, Small };
