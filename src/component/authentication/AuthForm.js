import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProgressContext } from "context/ProgressContext";
import { AuthContext } from "context/AuthContext";
import { NavLink } from "react-router-dom";

import { ContentContainer, H3, Button, Help } from "style/MyStyle";
import UsernameInput from "component/inputs/UsernameInput";
import PasswordInput from "component/inputs/PasswordInput";
import EmailInput from "component/inputs/EmailInput";

export default function AuthForm() {
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);
  const { clearCredentials, signUp, signIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    clearCredentials();
  }, []);

  const submit = () => {
    setIsReadyToProceed(false);
    switch (history.location.pathname) {
      case "/sign-up":
        signUp();
        break;
      default:
        signIn(history);
        break;
    }
  };

  const pasteEmail = () => {
    if(history.location.pathname === "/sign-up") {
      return <EmailInput />;
    }
  }

  const pasteSignUpHelp = () => {
    if(history.location.pathname === "/sign-in") {
      return <Help>
      New to Codecool Quiz? Create an{" "}
      <NavLink to="/sign-up">account.</NavLink>
    </Help>;
    }
  }

  const getTitle = () => {
    return history.location.pathname === "/sign-in" ? "Sign in" : "Sign up";
  }

  return (
    <ContentContainer>
      <H3>{getTitle()}</H3>
      <div>
        <UsernameInput />
        {pasteEmail()}
        <PasswordInput />
      </div>
      {pasteSignUpHelp()}
      <Button disabled={!isReadyToProceed} onClick={submit}>
      {getTitle()}
      </Button>
    </ContentContainer>
  );
}
