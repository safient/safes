import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { Text } from 'components/primitive';
export const SafeFormContainer = styled.section`
  width: 100%;
  padding-left: 7rem;
  top: 10%;
  left: 17%;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: ${BreakPoints.medium}) {
    padding: 0 1rem 1rem 1rem;
    position: static;
    margin-top: 10rem;
    width: 100vw;
  }
`;

export const AccountInfoContainer = styled.section`
  @media screen and (max-width: ${BreakPoints.medium}) {
    margin-top: 0.1rem;
  }
`;

export const FormHeading = styled(Text)`
  margin-bottom: 2rem;
`;
