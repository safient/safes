import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Text, Input, Box, Alert } from "components/primitive";
import { observer } from "mobx-react-lite";

import { Header } from "components/common/auth-header.component";
import {
  LoginContainer,
  LoginFormContainer,
  LoginText,
  FormContainer,
  StyledButton,
  TermsContainer,
  StyledCheckbox,
  StyledLink,
} from "./register.screen.styles";
import { useServices } from "services";
import { useStores } from "store";
import { RoutePath } from "navigation/route-path";

export const RegisterScreen = observer(() => {


  const { accountService } = useServices();
  const { accountStore } = useStores();
  let history = useHistory();
  const [registering, setRegistering] = useState(false);

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
    <LoginContainer>
      <Header />

      <LoginFormContainer>
        <FormContainer>
          <Alert variant="error">
            We couldn't find your account. Please register here.
          </Alert>
          <LoginText variant="contentHeader" center tx="auth.createAccount" />

          <Box style={{ gap: "2.6rem" }}>
            <Input
              type="text"
              label="Enter your Full Name"
              placeholder="John Doe"
              onChange={(e: any) => {
                setFullName(e.target.value);
              }}
            />
            <Input
              type="text"
              label="Enter your Email"
              placeholder="johndoe@example.com"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Box>

          <TermsContainer>
            <StyledCheckbox type="checkbox" />
            <Text variant="content">
              By clicking, you agree to{" "}
              <StyledLink to={"safient.io"}>Safient's Terms </StyledLink>
              of Use &{" "}
              <StyledLink to={"safient.io"}> Privacy Policy.</StyledLink>
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
      </LoginFormContainer>
    </LoginContainer>
  );
});
