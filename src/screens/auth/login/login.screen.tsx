import React from 'react';
import { useHistory } from 'react-router-dom';

import { Text, Input, Loader } from 'components/primitive';
import { Header } from 'components/common/auth-header.component';
import { RoutePath } from '../../../navigation/route-path';
import { useServices } from '../../../services';
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

  const { accountService } = useServices();
  let history = useHistory();  

  const login = async () => {
    try {
    const account = await accountService.login();
    if (account.hasData())
    history.push(RoutePath.home);
  }
  
  catch(e) {
    console.log(e)
  }
}

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
            onClick={() => {}}
            color='primaryGradient'
          />

          <SocialLoginContainer>
            <TextContainer>
              <Text variant='contentHeader' center tx='common.or' />
              <Text variant='contentHeader' center tx='common.alternativeOption' />
            </TextContainer>

            <SocialIconsContainer>
              <SocialIcon name='LoginWithGitHub' height={5} width={7} />
              <SocialIcon name='LoginWithGoogle' height={5} width={7} />
              <SocialIcon name='LoginWithMetaMask' height={5} width={7} onClick={login}/>
            </SocialIconsContainer>
          </SocialLoginContainer>
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};