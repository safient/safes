import styled from 'styled-components';

/**
 * Styling for AppContainer.
 */
export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

/**
 * styling for main container.
 */
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 4;
  background-color: ${({ theme: { colors } }) => colors.applicationBackground};
  justify-content: center;
  flex-wrap: wrap;
`;
