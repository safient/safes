export const tuple = <T extends string[]>(...args: T) => args;

const normalSizes = tuple('mini', 'small', 'medium', 'large');

const normalTypes = tuple('default', 'secondary', 'success', 'warning', 'error');

export type NormalSizes = typeof normalSizes[number];

export type NormalTypes = typeof normalTypes[number];

export const withDefaults = <P, DP>(component: React.ComponentType<P>, defaultProps: DP) => {
  type Props = Partial<DP> & Omit<P, keyof DP>;
  component.defaultProps = defaultProps;
  return component as React.ComponentType<Props>;
};
