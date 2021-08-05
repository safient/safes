import { Row } from 'react-grid-system';
// export const Rows = ({ children }: any): any => {
//   return;
//   <Row>{children}</Row>;
// };

const Rows = ({ children }: any) => {
  return <Row debug>{children}</Row>;
};

export { Rows as Row };
