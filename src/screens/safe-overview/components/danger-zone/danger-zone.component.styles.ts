import styled from 'styled-components';
import { Button } from 'components/primitive';

export const StyledRow = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center !important;
  gap: 1.2rem;

  margin-bottom: 2.4rem !important;
  &:last-child {
    margin-bottom: 0 !important;
  }
`;

export const DangerZoneButton = styled(Button)`
  width: 170px;
  height: 50px;
  border: none !important;
  padding-left: 20px !important;
`;
