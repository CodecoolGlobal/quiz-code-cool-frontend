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

export default function UsernameInput() {
  const history = useHistory();
  const { usernameInputState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [usernameInput, setUsernameInput] = usernameInputState;

  const handleChange = event => {
    setUsernameInput(event.target.value);
    recalculateIsReadyToProceed(history.location.pathname);
  };

  useEffect(() => {
    recalculateIsReadyToProceed(history.location.pathname);
  }, [usernameInput]);

  const getHelperContainer = () => {
    switch (history.location.pathname) {
      case "/sign-up":
        return (
          <InputHelperContainer>
            <Help>Between 5 and 20 characters. </Help>
          </InputHelperContainer>
        );
      default:
        return "";
    }
  };

  return (
    <InputItem>
      <InputLabel htmlFor="username">Username</InputLabel>
      <TextInput
        name="username"
        id="username"
        type="text"
        placeholder={`codecooler`}
        value={usernameInput}
        onChange={handleChange}
      />
      {getHelperContainer()}
    </InputItem>
  );
}
