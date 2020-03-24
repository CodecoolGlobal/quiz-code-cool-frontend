import React, { useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import { NavLink } from "react-router-dom";

import { ContentContainer, H3, Button, Help } from "style/MyStyle";
import UsernameInput from "component/inputs/UsernameInput";
import PasswordInput from "component/inputs/PasswordInput";

export default function SignUpForm() {
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  const submit = () => {
    setIsReadyToProceed(false);
  };

  return (
    <ContentContainer>
      <H3>Sign In</H3>
      <div>
        <UsernameInput />
        <PasswordInput />
      </div>
      <Help>New to Codecool Quiz? Create an <NavLink to="/sign-up">account.</NavLink></Help>
      <Button disabled={!isReadyToProceed} onClick={submit}>
        Sign in
      </Button>
    </ContentContainer>
  );
}
