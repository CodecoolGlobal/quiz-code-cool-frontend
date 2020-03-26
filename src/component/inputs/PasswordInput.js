import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  InputItem,
  InputLabel,
  TextInput,
  Help,
  InputHelperContainer
} from "style/MyStyle";
import { AuthContext } from "context/AuthContext";

export default function PasswordInput() {
  const history = useHistory();
  const { passwordState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [password, setPassword] = passwordState;

  useEffect(() => {
    recalculateIsReadyToProceed(history.location.pathname);
  }, [password]);

  const handleChange = event => {
    setPassword(event.target.value);
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
        value={password}
        onChange={handleChange}
      />
      {getHelperContainer()}
    </InputItem>
  );
}
