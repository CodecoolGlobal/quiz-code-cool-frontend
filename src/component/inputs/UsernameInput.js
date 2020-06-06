import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {routes} from "util/routes"
import {
  InputItem,
  InputLabel,
  TextInput,
  AuthHelp,
  LeftTextAlignContainer
} from "style/js/CommonStyles";
import { AuthContext } from "context/AuthContext";

export default function UsernameInput() {
  const history = useHistory();
  const { usernameInputState, recalculateIsReadyToProceed } = useContext(
    AuthContext
  );
  const [usernameInput, setUsernameInput] = usernameInputState;

  const handleChange = event => {
    setUsernameInput(event.target.value);
  };

  useEffect(() => {
    recalculateIsReadyToProceed();
  }, [usernameInput]);

  const getHelperContainer = () => {
    switch (history.location.pathname) {
      case routes.auth.signUp:
        return (
          <LeftTextAlignContainer>
            <AuthHelp>Between 5 and 20 characters. </AuthHelp>
          </LeftTextAlignContainer>
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
