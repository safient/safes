import styled from 'styled-components';
import { ChipInput } from 'components/primitive/chip-input/chip-input.component';
import { Button, Input, TextArea } from 'components/primitive';
import { BreakPoints } from 'utils';
import { DropDown } from 'components/primitive/drop-down/drop-down.component';

export const FormContainer = styled.section`
  background: white;
  width: 901px;
  height: auto;
  padding: 4rem 4rem;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  border-radius: 0.5rem 0.5rem 0 0;
  border: 0.01px solid ${({ theme: { colors } }) => colors.borderLightest};
  border-bottom: 0;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 340px;
    padding: 4rem 2rem 4rem 2rem;
  }
`;
export const Spacer = styled.div`
  margin-bottom: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  width: fit-content !important;
  gap: 2.2rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column !important;
  }
`;

export const ButtonContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.bottomAccent};
  display: flex !important;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px 40px;
  width: 901px;
  border: 0.01px solid ${({ theme: { colors } }) => colors.borderLightest};
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  border-top: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-bottom: 8rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column !important;
    width: 340px;
    padding: 4rem 2rem 4rem 2rem;
    gap: 10px;
    order: 2;
  }
`;

export const StyledInput = styled(Input)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const WideInput = styled(Input)`
  width: 82rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledChipInput = styled(ChipInput)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledTextArea = styled(TextArea)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledDropDown = styled(DropDown)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;

export const StyledButton = styled(Button)`
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 30rem !important;
  }
`;
