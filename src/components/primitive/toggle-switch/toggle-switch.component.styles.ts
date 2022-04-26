import styled from 'styled-components';

export const ToggleSwitchContainer = styled.div`
  .custom-classname.react-toggle--checked .react-toggle-track {
    background-color: ${({ theme: { colors } }) => colors.toggleSwitchBackground};
  }
`;
