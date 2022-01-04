import React from 'react';
import { Text, Input } from 'components/primitive';
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
  SocialIcon,
} from './login.screen.styles';

export const LoginScreen = () => {
  return (
    <LoginContainer>
      <Header />

      <LoginFormContainer>
        <FormContainer>
          <LoginText variant='contentHeader' center tx='auth.getStarted' />
          <Input type='text' label='Enter your Email or DID' placeholder='hello@example.com' />

          <StyledButton
            variant='primary'
            label={{ tx: 'auth.login' }}
            onClick={() => 'clicked'}
            color='primaryGradient'
          />

          <SocialLoginContainer>
            <TextContainer>
              <Text variant='contentHeader' center tx='common.or' />
              <Text variant='contentHeader' center tx='common.alternativeOption' />
            </TextContainer>

            <SocialIconsContainer>
              <SocialIcon name='loginWithGitHub' height={5} width={7} />
              <SocialIcon name='loginWithGoogle' height={5} width={7} />
              <SocialIcon name='loginWithMetaMask' height={5} width={7} />
            </SocialIconsContainer>
          </SocialLoginContainer>
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};
