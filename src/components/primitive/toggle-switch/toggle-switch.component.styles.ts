import styled from 'styled-components';

// Todo - Fix the border latter
export const ToggleSwitchContainer = styled.div`
  .label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2rem;
  }
  .inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .inner:before,
  .inner:after {
    float: left;
    width: 3.4rem;
    height: 1.4rem;
    padding: 0;
    line-height: 3.6rem;
    background: ${({ theme: { colors } }) => colors.toggleSwitchBackground};
    opacity: 0.24;
    font-weight: bold;
    box-sizing: border-box;
  }
  .inner:before {
    content: '';
    color: #fff;
  }
  .inner:after {
    content: '';
    background: ${({ theme: { colors } }) => colors.toggleSwitchBackground};
    opacity: 0.24;
    border-left: 50%;
  }
  .switch {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0;
    background: ${({ theme: { colors } }) => colors.toggleSwitchBackground};
    position: absolute;
    top: -0.3rem;
    bottom: 0;
    right: 1.5rem;
    border-radius: 50%;
    transition: all 0.3s ease-in 0s;
  }
`;

export const Switch = styled.div`
  position: relative;
  width: 3.7rem;
  top: 0.8rem;
`;

export const StyledInput = styled.input`
  display: none;
  &:checked + .label .inner {
    margin-left: 0;
  }
  &:checked + .label .switch {
    right: 0;
  }
`;
