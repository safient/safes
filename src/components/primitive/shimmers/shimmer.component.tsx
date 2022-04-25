import styled, { keyframes } from 'styled-components';

/**
 * Keyframe animation for shimmer effect.
 */

export const placeholderShimmer = keyframes`
 0% {
  background-position: -46.8rem 0;
}
100% {
  background-position: 46.8rem 0;
}
`;

/**
 * Base style which can be inherited.
 */
export const BaseStyle = styled.div`
  background: ${({ theme: { colors } }) => colors.shimmer};
  background-image: linear-gradient(
    to right,
    ${({ theme: { colors } }) => colors.shimmer} 0%,
    #edeef1 20%,
    ${({ theme: { colors } }) => colors.shimmer} 40%,
    ${({ theme: { colors } }) => colors.shimmer} 100%
  );
  background-repeat: no-repeat;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;

export const Square = styled(BaseStyle)`
  height: 6rem;
  width: 6rem;
  border-radius: 0.5rem;
`;

export const Line = styled(BaseStyle)`
  border-radius: 0.4rem;
  width: 10rem;
  height: 2rem;
`;

export const Circle = styled(BaseStyle)`
  border-radius: 5rem;
  width: 5.5rem;
  height: 5.5rem;
`;
