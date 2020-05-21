import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  InputItem,
  InputLabel,
  TextInput,
  Help,
  InputHelperContainer
} from "style/js/MyStyle";
import { AuthContext } from "context/AuthContext";

export default function PasswordInput() {
  const history = useHistory();
  const { passwordInputState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [passwordInput, setPasswordInput] = passwordInputState;

  useEffect(() => {
    recalculateIsReadyToProceed(history.location.pathname);
  }, [passwordInput]);

  const handleChange = event => {
    setPasswordInput(event.target.value);
  };

  const getHelperContainer = () => {
    switch (history.location.pathname) {
      case "/sign-up":
        return (
          <InputHelperContainer>
          <Help>
            At least 8 characters including a number and a lowercase letter.{" "}
          </Help>
        </InputHelperContainer>
        );
      default:
        return "";
    }
  };

  return (
    <InputItem>
      <InputLabel htmlFor='password'>Password</InputLabel>
      <TextInput
        name='password'
        id='password'
        type='password'
        placeholder='**********'
        value={passwordInput}
        onChange={handleChange}
      />
      {getHelperContainer()}
    </InputItem>
  );
}
