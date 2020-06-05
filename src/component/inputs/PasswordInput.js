import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  InputItem,
  InputLabel,
  TextInput,
  AuthHelp,
  LeftTextAlignContainer
} from "style/js/CommonStyles";
import { AuthContext } from "context/AuthContext";

export default function PasswordInput() {
  const history = useHistory();
  const { passwordInputState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [passwordInput, setPasswordInput] = passwordInputState;

  const handleChange = event => {
    setPasswordInput(event.target.value);
  };

  useEffect(() => {
    recalculateIsReadyToProceed();
  }, [passwordInput]);


  const getHelperContainer = () => {
    switch (history.location.pathname) {
      case "/sign-up":
        return (
          <LeftTextAlignContainer>
          <AuthHelp>
            Between 8-20 characters including a number and a lowercase letter, without special characters.
          </AuthHelp>
        </LeftTextAlignContainer>
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
