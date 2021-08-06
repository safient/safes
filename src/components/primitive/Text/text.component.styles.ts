import styled from 'styled-components';
import { FontSizes, FontWeight, TextProps } from './text.component.props';

const Base = styled.h2<TextProps>`
  font-size: ${FontSizes.small}rem;
  font-weight: ${FontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimaryLight};
  line-height: 1.4;
`;

const Title = styled(Base)<TextProps>`
  font-size: ${FontSizes.large}rem;
  color: ${({ theme }) => theme.colors.textPrimary}; ;
`;

const ContentHeader = styled(Base)<TextProps>`
  font-size: ${FontSizes.medium}rem;
`;

const Description = styled(Base)<TextProps>`
  font-size: ${FontSizes.small}rem;
`;
const Content = styled(Base)<TextProps>`
  font-size: ${FontSizes.medium}rem;
  font-weight: ${FontWeight.semiBold};
`;

const Small = styled(Base)<TextProps>`
  font-size: ${FontSizes.small}rem;
  font-weight: ${FontWeight.semiBold};
`;

export { Base, Title, ContentHeader, Description, Content, Small };
