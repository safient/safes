import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Box } from 'components/primitive';
import { Header } from 'components/common/auth-header.component';
import {
  LoginContainer,
  LoginFormContainer,
  LoginText,
  FormContainer,
  StyledButton,
  TermsContainer,
  StyledCheckbox,
  StyledLink,
} from './register.screen.styles';

export const RegisterScreen = () => {
  return (
    <LoginContainer>
      <Header />

      <LoginFormContainer>
        <FormContainer>
          <LoginText variant='contentHeader' center tx='auth.createAccount' />

          <Box style={{ gap: '2.6rem' }}>
            <Input type='text' label='Enter your Full Name' placeholder='John Doe' />
            <Input type='text' label='Enter your Email' placeholder='johndoe@example.com' />
          </Box>

          <TermsContainer>
            <StyledCheckbox type='checkbox' />
            <Text variant='content'>
              By clicking, you agree to <StyledLink to={'safient.io'}>Safient's Terms </StyledLink>
              of Use & <StyledLink to={'safient.io'}> Privacy Policy.</StyledLink>
            </Text>
          </TermsContainer>

          <StyledButton
            variant='primary'
            label={{ text: 'Create' }}
            onClick={() => 'clicked'}
            color='primaryGradient'
          />
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};
