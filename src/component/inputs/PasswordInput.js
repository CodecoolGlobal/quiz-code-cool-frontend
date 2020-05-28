import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  InputItem,
  InputLabel,
  TextInput,
  Help,
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
          <Help>
            At least 8 characters including a number and a lowercase letter.{" "}
          </Help>
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
