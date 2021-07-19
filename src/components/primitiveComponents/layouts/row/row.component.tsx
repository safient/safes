import React from 'react';
import { RowComponentProps } from './row.component.props';
import { Spacing } from '../types';

const Div = 'div';

export const Row: React.FC<RowComponentProps> = ({
  align: alignItems,
  justify: justifyContent,
  debug,
  gutterWidth,
  nowrap,
  children,
  style,
  ...rest
}) => {
  const styles: React.CSSProperties = {
    alignItems,
    justifyContent,
    padding: `0 ${Spacing[gutterWidth] ?? gutterWidth ?? 0}px`, // Revisit units
    ...style,
  };

  return <Div style={styles}>{children}</Div>;
};
