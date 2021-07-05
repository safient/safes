import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

// styled component doesnt support variations  natively
export const TEXT_MODIFIERS = {
  success: ({ theme }) => `
  color: ${theme.STATUS.successColor};
  `,
  warning: ({ theme }) => `
    color: ${theme.STATUS.warningColor};
  `,

  error: ({ theme }) => `
  color: ${theme.STATUS.errorColor};
  `,
};

export const Base = styled.h2`
  font-size: ${({ theme }) => theme.FONT.heading};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  line-height: 1;
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;
// heading has 2 different size and weight- visit later- color should be coming from theme.
export const Heading = styled(Base)`
  color: ${({ theme }) => theme.TEXTS.textDark};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;

export const SubHeading = styled(Base)`
  color: ${({ theme }) => theme.TEXTS.textDark};
  font-size: ${({ theme }) => theme.FONT.normal};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};

  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.FONT.normal};
  color: ${({ theme }) => theme.TEXTS.textLight};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;
