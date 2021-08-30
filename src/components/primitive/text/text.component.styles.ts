import styled from 'styled-components';
import { FontSizes, FontWeight, TextComponentProps } from './text.component.props';

const Base = styled.h2<TextComponentProps>`
  font-size: ${FontSizes.small}rem;
  font-weight: ${FontWeight.bold};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.4;
`;

const Title = styled(Base)<TextComponentProps>`
  font-size: ${FontSizes.large}rem;
  color: ${({ theme }) => theme.colors.textDark} !important;
`;

const ContentHeader = styled(Base)<TextComponentProps>`
  font-size: ${FontSizes.medium}rem;
`;

const Content = styled.p<TextComponentProps>`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${FontWeight.semiBold};
  font-size: ${FontSizes.small}rem;
  line-height: 1.4;
`;

const Small = styled(Base)<TextComponentProps>`
  font-size: ${FontSizes.small}rem;
  font-weight: ${FontWeight.semiBold};
`;

export { Base, Title, ContentHeader, Content, Small };
