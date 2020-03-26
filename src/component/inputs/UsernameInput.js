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
  const { usernameState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [username, setUsername] = usernameState;

  const handleChange = event => {
    setUsername(event.target.value);
    recalculateIsReadyToProceed(history.location.pathname);
  };

  useEffect(() => {
    recalculateIsReadyToProceed(history.location.pathname);
  }, [username]);

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
        value={username}
        onChange={handleChange}
      />
      {getHelperContainer()}
    </InputItem>
  );
}
