import { Row } from 'react-grid-system';

const Rows = ({ children }: any) => {
  return <Row debug>{children}</Row>;
};

export { Rows as Row };
