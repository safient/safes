import styled from 'styled-components';
import { Button, Text, Image } from 'components/primitive';
import { BreakPoints } from 'utils';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const LoginFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 53.4rem;
  padding: 5rem 8rem 5rem 8rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    margin-top: -4rem;
    width: 320px;
    padding: 3rem 1.5rem 3rem 1.5rem;
  }
`;

export const StyledButton = styled(Button)`
  width: 40rem !important;
  margin-top: 3rem !important;
  @media screen and (max-width: ${BreakPoints.small}) {
    width: 100% !important;
  }
`;

export const LoginText = styled(Text)`
  margin-bottom: 6rem;
`;

export const SocialLoginContainer = styled.div`
  margin-top: 4rem;
`;

export const SocialIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: 3rem;
`;

export const SocialIcon = styled(Image)`
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1) !important;
    border: 1px solid;
    border-radius: 0.5rem !important;
    border-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
