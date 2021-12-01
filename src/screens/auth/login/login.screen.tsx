import React from 'react';
import styled from 'styled-components';
import { Text, Image, Input, Button } from 'components/primitive';
import { safientLogo } from 'assets';
import { BreakPoints } from 'utils';
//import { Input } from './sample-input';

export const LoginContainer = styled.section`
  width: 100%;
  padding: 2.8rem;
`;

export const LogoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${BreakPoints.medium}) {
    /* display: none !important; */
  }

  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    /* display: none !important; */
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 25px 140px;
`;

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LoginFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const FormContainer = styled.div`
  background-color: white;
  width: 543px;
  padding: 50px 80px 50px 80px;
`;

export const StyledButton = styled(Button)`
  width: 400px;
  /* background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%) !important;
  border-radius: 5px;
  color: white;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px; */
  /* or 150% */
  /* cursor: pointer;
  align-items: center;
  text-align: center; */
  margin-top: 4rem !important;
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledCheckbox = styled.input`
  border: 2px solid linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%) !important;
  height: 16px;
  width: 16px;
  /* width: auto !important; */
`;

export const TermsContainer = styled.section`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const LoginScreen = (props: any) => {
  return (
    <LoginContainer>
      <NavContainer>
        <LogoWrapper>
          <Image src={safientLogo} width={12.1} />
        </LogoWrapper>

        <StyledNav>
          <li>
            <Text variant='small'>Don't know what Safient does?</Text>
          </li>
          <li>
            <Button
              variant='ghost'
              label={{ text: 'Know more', color: 'textLight' }}
              onClick={() => console.log('clicked')}
            />
          </li>
        </StyledNav>
      </NavContainer>

      <LoginFormContainer>
        <FormContainer>
          <LoginText variant='contentHeader' center>
            Get Started
          </LoginText>
          <Input type='text' label='Enter your Email or DID' placeholder='hello@example.com' />
          <StyledButton
            variant='primary'
            label={{ text: 'Log In' }}
            onClick={() => 'clicked'}
            color='primaryGradient'
          />

          <SocialLoginContainer>
            <TextContainer>
              <Text variant='contentHeader' center>
                OR
              </Text>
              <Text variant='contentHeader' center>
                You can also continue with
              </Text>
            </TextContainer>

            <SocialIconsContainer>
              <Image name='LoginWithGitHub' height={5} width={7} />
              <Image name='LoginWithGoogle' height={5} width={7} />
              <Image name='LoginWithMetaMask' height={5} width={7} />
            </SocialIconsContainer>
          </SocialLoginContainer>
        </FormContainer>
        <TermsContainer>
          <StyledCheckbox type='checkbox' />
          <Text variant='content' center>
            By clicking, you agree to Safient's Terms of Use & Privacy Policy.
          </Text>
        </TermsContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};
