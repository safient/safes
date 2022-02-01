import { useState } from "react";
import { useHistory } from "react-router-dom";
import { t } from 'i18n-js';
import { Text, Input, Box, Alert } from "components/primitive";
import { observer } from "mobx-react-lite";

import { Header } from "components/common/auth-header.component";
import {
  RegistrationContainer,
  RegistrationFormContainer,
  RegistrationText,
  FormContainer,
  StyledButton,
  TermsContainer,
  StyledCheckbox,
  LinkText,
  RegistrationFormBox,
  StyledInput,
} from "./register.screen.styles";
import { useServices } from "services";
import { useStores } from "store";
import { RoutePath } from "navigation/route-path";

export const RegisterScreen = observer(() => {


  const { accountService } = useServices();
  const { accountStore } = useStores();
  let history = useHistory();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const register = async () => {
    try {
      accountStore.setFetching(true)
      const account = await accountService.register(fullName, email);
      if (account.hasData()) {
        history.push(RoutePath.home);
      } else {
        console.log(account.getErrorMessage());
        history.push(RoutePath.register);
      }
      accountStore.setFetching(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <RegistrationContainer>
      <Header />

      <RegistrationFormContainer>
        <FormContainer>
          <Alert icon variant="warning" label={{tx: 'auth.registerAlert'}}/>
          <RegistrationText variant="contentHeader" center tx="auth.createAccount" />

          <RegistrationFormBox>
            <StyledInput
              type="text"
              label="Enter your Full Name"
              placeholder="John Doe"
              onChange={(e: any) => {
                setFullName(e.target.value);
              }}
            />
            <StyledInput
              type="text"
              label="Enter your Email"
              placeholder="johndoe@example.com"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            
          </RegistrationFormBox>
          <TermsContainer row>
            <StyledCheckbox type="checkbox" />
            <Text>
              By clicking, you agree to the
              <LinkText onClick={()=>window.location.href = 'https://resources.safient.io/terms'}> {t("auth.terms")} </LinkText>
              &
              <LinkText onClick={()=>window.location.href = 'https://resources.safient.io/terms'}> {t("auth.privacy")} </LinkText>
            </Text>
          </TermsContainer>
          <StyledButton
            variant="primary"
            loading={accountStore.fetching}
            label={{ text: accountStore.fetching ? "Registering.." : "Create" }}
            onClick={register}
            color="primaryGradient"
          />
        </FormContainer>
      </RegistrationFormContainer>
    </RegistrationContainer>
  );
});
