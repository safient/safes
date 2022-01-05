import styled from 'styled-components';
import { BreakPoints } from 'utils';
import { Box, Input } from 'components/primitive';

export const ChipContainer = styled(Box)`
  display: grid !important;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);

  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    display: flex !important;
    flex-direction: column;
  }
`;

export const Container = styled(Box)<{ length: number }>`
  border-radius: 0.5rem;
  border: 1px solid ${({ error, theme: { colors } }: any) => (error ? colors.error : colors.borderLightest)} !important;
  border-radius: 0.5rem;
  width: 822px !important;
  height: ${({ length }) => (length === 0 ? '10rem' : length > 6 ? '18rem' : '13rem')} !important;

  @media screen and (max-width: 768px) {
    height: ${({ length }) => (length === 0 ? '10rem' : `${length * 5 + 11}rem`)} !important;
  }
`;

export const PhraseInput = styled(Input)`
  border: none !important;
  margin-top: -0.8rem;
  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme: { colors } }) => colors.textLighter};
  }
`;

export const InputLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 500 !important;
  margin-bottom: 1rem;
`;

export const ChipInputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  min-height: 9rem;
  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;
