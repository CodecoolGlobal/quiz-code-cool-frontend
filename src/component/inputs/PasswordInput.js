import React, { useContext, useEffect } from "react";
import {
  InputItem,
  InputLabel,
  TextInput,
  Help,
  InputHelperContainer
} from "style/MyStyle";
import { AuthContext } from "context/AuthContext";

export default function PasswordInput() {
  const { passwordState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [password, setPassword] = passwordState;

  useEffect(() => {
    recalculateIsReadyToProceed();
  }, [password]);

  const handleChange = event => {
    setPassword(event.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='password'>Password</InputLabel>
      <TextInput
        name='password'
        id='password'
        type='password'
        value={password}
        onChange={handleChange}
      />
      <InputHelperContainer>
        <Help>
          At least 8 characters including a number and a lowercase letter.{" "}
        </Help>
      </InputHelperContainer>
    </InputItem>
  );
}
