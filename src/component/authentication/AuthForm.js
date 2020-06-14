import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "util/routes";
import { ProgressContext } from "context/ProgressContext";
import { AuthContext } from "context/AuthContext";
import { NavLink } from "react-router-dom";

import {
  ThinnerContentContainer,
  H3,
  Button,
  AuthHelp,
} from "style/js/CommonStyles";
import UsernameInput from "component/inputs/UsernameInput";
import PasswordInput from "component/inputs/PasswordInput";
import EmailInput from "component/inputs/EmailInput";
import SimpleBackdrop from "component/loading/SimpleBackdrop";

export default function AuthForm() {
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);
  const { clearCredentials, signUp, signIn, backdropState } = useContext(
    AuthContext
  );
  const setIsBackdropActive = backdropState[1];
  const path = useHistory().location.pathname;

  useEffect(() => {
    clearCredentials();
  }, [path]);

  const submit = () => {
    setIsReadyToProceed(false);
    setIsBackdropActive(true);
    switch (path) {
      case routes.auth.signUp:
        signUp();
        break;
      default:
        signIn();
        break;
    }
  };

  const pasteEmail = () => {
    if (path === routes.auth.signUp) {
      return <EmailInput />;
    }
  };

  const pasteSignUpHelp = () => {
    if (path === routes.auth.signIn) {
      return (
        <AuthHelp>
          New to Codecool Quiz? Create an{" "}
          <NavLink to={routes.auth.signUp}>account.</NavLink>
        </AuthHelp>
      );
    }
  };

  const getTitle = () => {
    return path === routes.auth.signIn ? "Sign in" : "Sign up";
  };

  return (
    <ThinnerContentContainer>
      <SimpleBackdrop />
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
    </ThinnerContentContainer>
  );
}
