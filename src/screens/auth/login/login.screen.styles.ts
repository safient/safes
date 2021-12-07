import { Button, Text, Image } from 'components/primitive';
import styled from 'styled-components';

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
`;

export const StyledButton = styled(Button)`
  width: 40rem !important;
  margin-top: 3rem !important;
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
    border-image: ${({ theme: { colors } }) => colors.primaryGradient};
    border-image-slice: 1;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
