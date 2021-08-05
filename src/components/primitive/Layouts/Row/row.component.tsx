import { Row as Rows } from 'react-grid-system';
// export const Rows = ({ children }: any): any => {
//   return;
//   <Row>{children}</Row>;
// };

export const Row = ({ children }: any) => {
  return <Rows debug>{children}</Rows>;
};
