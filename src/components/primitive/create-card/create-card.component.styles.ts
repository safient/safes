import styled from 'styled-components';
import { Card, Text } from 'components/primitive';
import { BreakPoints } from 'utils';

/**
 * Styles for the Create Safe Card.
 */
export const CardContainer = styled(Card)`
  height: 24.3rem !important;
  max-width: 33rem !important;
  margin: 1.5rem !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background-color: ${({ theme: { colors } }) => colors.white};
  @media screen and (max-width: ${BreakPoints.small}) {
    height: 24.3rem !important;
    max-width: 33rem !important;
    margin: 1.5rem 0 1.5rem !important;
  }
`;

/**
 * Styles for text inside the cards.
 */
export const Label = styled(Text)`
  margin-top: 2rem;
`;
