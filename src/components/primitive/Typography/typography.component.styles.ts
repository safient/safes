import styled from 'styled-components';
import { FontSizes, TextProps } from './typography.component.props';

const Base = styled.h2<TextProps>`
  font-size: ${FontSizes.small}rem;
  font-weight: 600;
  color: #55577d;
  line-height: 1.4;
`;

const Title = styled(Base)<TextProps>`
  font-size: ${FontSizes.large}rem;
  color: #28293d;
`;

const ContentHeader = styled(Base)<TextProps>`
  font-size: ${FontSizes.medium}rem;
`;

const Description = styled(Base)<TextProps>`
  font-size: ${FontSizes.small}rem;
`;
const Content = styled(Base)<TextProps>`
  font-size: ${FontSizes.medium}rem;
  font-weight: 500;
`;

const Small = styled(Base)<TextProps>`
  font-size: ${FontSizes.small}rem;
  font-weight: 500;
`;

export { Base, Title, ContentHeader, Description, Content, Small };
