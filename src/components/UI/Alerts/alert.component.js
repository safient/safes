import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const ALERT_MODIFIERS = {
  warning: ({ theme }) => `
  
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
    `,
  success: () => `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `,
  error: () => `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `,
};

export const BASE = styled.div`
  max-width: 55rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.8rem;
`;

export const Alert = styled(BASE)`
  color: ${({ theme }) => theme.TEXTS.textDark};
  background-color: #d1ecf1;
  border-color: #bee5eb;
  ${applyStyleModifiers(ALERT_MODIFIERS)};
`;
