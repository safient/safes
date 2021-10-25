import styled from 'styled-components';
import { Box, Card, Text } from '../../components/primitive';
import { BreakPoints } from '../../utils';

/**
 * Main container of the home screen.
 */
export const HomeScreenContainer = styled(Box)`
  height: 90vh;
  width: 100vw;
  margin: 3rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    height: 80vh;
    width: 100vw;
  }
`;

/**
 * Styles for Title Text.
 */
export const Title = styled(Text)`
  margin-left: 1.5rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    margin-left: 0.1rem;
  }
`;

/**
 * Styles for text inside the cards.
 */
export const SafeText = styled(Text)`
  margin-top: 2rem;
`;

/**
 * Container that holds all Cards.
 */
export const CardsContainer = styled(Box)`
  display: flex;
  flex-direction: row !important;
  flex: 4;
  flex-wrap: wrap;
  background-color: ${({ theme: { colors } }) => colors.applicationBackground};

  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column !important;
    justify-content: flex-start;
    align-items: center;
  }
`;

/**
 * Styles for the Create Safe Card.
 */
export const SafeCard = styled(Card)`
  flex: 0 0 auto !important;
  height: 24.3rem !important;
  max-width: 33rem !important;
  margin: 1.5rem !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background-color: ${({ theme: { colors } }) => colors.white};

  @media screen and (max-width: ${BreakPoints.small}) {
    flex: 0 0 auto !important;
    max-height: 24.3rem !important;
    max-width: 33rem !important;
    margin: 1.5rem 0 1.5rem !important;
  }
`;
