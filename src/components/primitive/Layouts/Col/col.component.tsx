import { Col } from 'react-grid-system';

const Column = ({ children }: any) => {
  return <Col debug>{children}</Col>;
};

export { Column as Col };
