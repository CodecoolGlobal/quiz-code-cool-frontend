import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InputItem, InputLabel, TextInput } from "style/js/CommonStyles";
import { AuthContext } from "context/AuthContext";

export default function EmailInput() {
  const history = useHistory();
  const { emailInputState, recalculateIsReadyToProceed } = useContext(AuthContext);
  const [emailInput, setEmailInput] = emailInputState;

  const handleChange = event => {
    setEmailInput(event.target.value)
    recalculateIsReadyToProceed(history.location.pathname);
  };

  useEffect(() => {
    recalculateIsReadyToProceed(history.location.pathname);
  }, [emailInput]);

  return (
    <InputItem>
      <InputLabel htmlFor='email'>Email</InputLabel>
      <TextInput
        name='email'
        id='email'
        type='text'
        placeholder={`example@codecool.com`}
        value={emailInput}
        onChange={handleChange}
      />
    </InputItem>
  );
}
