import React from 'react';
import { Text, Image, Input } from 'components/primitive';
import { Header } from 'components/common/auth-header.component';
import {
  LoginContainer,
  LoginFormContainer,
  FormContainer,
  LoginText,
  StyledButton,
  SocialLoginContainer,
  TextContainer,
  SocialIconsContainer,
} from './login.screen.styles';

export const LoginScreen = () => {
  return (
    <LoginContainer>
      <Header />

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
      </LoginFormContainer>
    </LoginContainer>
  );
};
