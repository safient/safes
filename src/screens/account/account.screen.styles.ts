import styled from 'styled-components';
import { Box, Text } from '../../components/primitive';
import { BreakPoints } from '../../utils';

/**
 * Main container of the home screen.
 */
export const AccountScreenContainer = styled(Box)`
  height: 95%;
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
