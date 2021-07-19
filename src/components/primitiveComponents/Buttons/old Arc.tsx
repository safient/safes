// import styled from 'styled-components';
// import { applyStyleModifiers } from 'styled-components-modifiers';

// //modifiers allows us to pass the array of different varients, note: this should be applied at the end of all styled components. coz it may override the inherited styles from base component.

// export const BUTTON_MODIFIERS = {
//   secondary: ({ theme }) => `
//   background-color: ${theme.BUTTON.secondary.backgroundColor};
//   color:${theme.BUTTON.secondary.color};
//   border: ${theme.BUTTON.secondary.border};
//   &:hover {
//     background-color:${theme.BUTTON.secondaryHover.backgroundColor};
//     border:  ${theme.BUTTON.secondaryHover.border};
//     color:  ${theme.BUTTON.secondaryHover.color};
//   }
//   &:disabled {
//     background-color:  ${theme.BUTTON.secondaryDisabled.backgroundColor};
//     color:  ${theme.BUTTON.secondaryDisabled.color};
//     cursor: not-allowed;
//   }

// `,

//   warning: ({ theme }) => `
//     background-color:${theme.BUTTON.warning.backgroundColor} ;
//     color:${theme.BUTTON.warning.color} ;
//     &:hover, &:focus {
//       background-color: ${theme.BUTTON.warningHover.backgroundColor};
//     }
//     &:active {
//       background-color: ${theme.BUTTON.warningActive.backgroundColor};
//     }
//   `,
//   error: ({ theme }) => `
//   background-color:${theme.BUTTON.error.backgroundColor};
//   color:${theme.BUTTON.error.color};
//   &:hover {
//     background-color:${theme.BUTTON.errorHover.backgroundColor};  ;
//   }
//   &:active {
//     background-color:${theme.BUTTON.errorActive.backgroundColor}; ;
//   }
//   `,
//   success: ({ theme }) => `
//   background-color:${theme.BUTTON.success.backgroundColor};
//   color:#fff;
//   &:hover {
//     background-color:${theme.BUTTON.success.hover}
//   }
//   &:active {
//     background-color: ${theme.BUTTON.successActive};
//   }
//   `,
// };

// // Reusable button- create a base button and make it to inherit

// export const BASE = styled.button`
//   padding: ${({ theme }) => theme.BUTTON.padding};
//   border-radius: ${({ theme }) => theme.BUTTON.borderRadius};
//   cursor: pointer;
//   font-size: ${({ theme }) => theme.FONT.normal};
//   transition: background-color 0.2s linear, color 0.2s linear;
//   &:hover,
//   &:active {
//     background-color: ${({ theme }) => theme.BUTTON.baseActive};
//   }
// `;

// // inherit from base button

// export const Button = styled(BASE)`
//   background-color: ${({ theme }) => theme.BUTTON.primaryButton.backgroundColor};
//   color: ${({ theme }) => theme.BUTTON.primaryButton.color};
//   border: 2px solid transparent;

//   &:disabled {
//     background-color: ${({ theme }) => theme.BUTTON.primaryButton.disabled};
//     cursor: not-allowed;
//   }
//   ${applyStyleModifiers(BUTTON_MODIFIERS)};
// `;

export const btn = '';
