import React, { useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import UsernameInput from "component/inputs/UsernameInput";
import EmailInput from "component/inputs/EmailInput";
import PasswordInput from "component/inputs/PasswordInput";
import { AuthContext } from "context/AuthContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function SignUpForm() {
  const isReadyToProceed = useContext(ProgressContext)[0];
  const {signUp} = useContext(AuthContext);

  const submit = () => {
    signUp();
  };

  return (
    <ContentContainer>
      <H3>Sign Up</H3>
      <div>
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
      </div>
      <Button disabled={!isReadyToProceed} onClick={submit}>
        Sign up
      </Button>
    </ContentContainer>
  );
}
