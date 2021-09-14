import styled from 'styled-components';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';

/**
 * Styles for Primary Button.
 */
export const Primary = styled(Box)`
  height: 5rem;
  width: 14.6rem;
  min-width: 14.6rem !important;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.primary} !important;
`;

/**
 * styles for Button Label.
 */
export const ButtonText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;
  overflow: hidden;
`;

/**
 * Styles for Small Button.
 */
export const Small = styled(Box)`
  height: 4.2rem;
  width: 14.6rem;
  min-width: 14.6rem !important;
  background-color: ${({ theme: { colors } }) => colors.primary} !important;
  border: 1px solid white;
`;

/**
 * Styles for Ghost Button.
 */
export const GhostButton = styled(Box)`
  height: 5rem;
  width: 14.6rem !important;
  border-radius: 0.5rem;
  max-width: 240px !important;
  border: none;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.border} !important;
  border: 2px solid ${({ theme: { colors } }) => colors.textLighter} !important;
  background-color: transparent;
`;

/**
 * Styles for IconWrapper.
 */
export const IconWrapper = styled.span`
  margin: 0 2rem 0 -2rem;
`;
