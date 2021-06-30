import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

// modifiers allows us to pass the array of different varients, note: this should be applied at the end of all styled components. coz it may override the inherited styles from base component.

export const BUTTON_MODIFIERS = {
  //   small: () => `
  //   padding: 8px;
  //   font-size: ${typeScale.helperText};
  //   `,
  //   large: () => `
  //   padding: 16px 24px;
  //   font-size: ${typeScale.header5};
  //   `,
  warning: () => `
    background-color: #CAB23F;
    color: #fff;
    &:hover, &:focus {
      background-color: #cab23f;
    }
    &:active {
      background-color: #b49e35; 
    }
  `,
  error: () => `
  background-color:#DB2A30;
  color: #fff;
  &:hover {
    background-color: #b54248;
  }
  &:active {
    background-color: #95353a;
  }
  `,
  success: () => `
  background-color: #0B7247;
  color:#fff;
  &:hover {
    background-color: #367b48;
  }
  &:active {
    background-color: #276738;
  }
  `,
};

// const primaryBlue = '#030086';

// Reusable button- create a base button and make it to inherit

export const BASE = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 0.2rem;
  /* min-width: 10rem; */
  cursor: pointer;

  font-size: 1.6rem;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: #3d24f1;
    color: #fff;
  }

  &:active {
    background-color: #3d24f1;
    border-color: #fff;
    color: #fff;
  }
`;

// inherit from above base button

export const PrimaryButton = styled(BASE)`
  background-color: #422ed1;
  color: #fff;
  border: 2px solid transparent;

  &:disabled {
    background-color: rgba(66, 46, 209, 0.45);
    color: #fff;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(BASE)`
  background-color: #fff;
  color: rgba(142, 144, 166, 1);
  border: 1px solid rgba(142, 144, 166, 1);
  &:hover {
    background-color: #fff;
    border: 1px solid #422ed1;
    color: #422ed1;
  }
  &:disabled {
    background-color: rgba(66, 46, 209, 0.45);
    color: #fff;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
