import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

// styled component doesnt support variant  natively
export const TEXT_MODIFIERS = {
  success: (props) => `
  color: #118D4E;
  `,
  warning: (props) => `
    color: #DBC72A;
  `,

  error: (props) => `
  color: #DB2A30;
  `,
};

export const Base = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;
// heading has 2 different size and weight- visit later- color should be coming from theme.
export const Heading = styled(Base)`
  color: #28293d;
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;

export const SubHeading = styled(Base)`
  color: #28293d;
  font-size: 1.6rem;
  font-weight: ${({ bold }) => (bold ? 600 : 500)};

  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;

export const Text = styled.p`
  font-size: 1.6rem;
  color: #555770;
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;
