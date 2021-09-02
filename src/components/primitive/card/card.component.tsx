import React from 'react';
import styled, { withTheme } from 'styled-components';
import { IStyledTheme } from '../../../themes/styled-components';
import { CardComponentProps } from './card.component.props';
import { Box } from '../box/box.component';
import { BoxComponentProps } from '../box/box.component.props';

const CardBase = styled(Box).attrs({
  padding: 'tiny',
})<BoxComponentProps>`
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  -moz-box-shadow: 0 0 1px
    ${({
      theme: {
        colors: { shadow },
      },
    }) => shadow};
  -webkit-box-shadow: 0 0 1px
    ${({
      theme: {
        colors: { shadow },
      },
    }) => shadow};
  box-shadow: 0 0 1px
    ${({
      theme: {
        colors: { shadow },
      },
    }) => shadow};
`;

export const Card: React.FunctionComponent<CardComponentProps> = (
  props: CardComponentProps
) => (
  // @ts-ignore
  <CardBase {...props} />
);
