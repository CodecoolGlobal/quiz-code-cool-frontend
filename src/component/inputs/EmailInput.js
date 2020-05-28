import React, { useContext, useEffect } from "react";
import { InputItem, InputLabel, TextInput } from "style/js/CommonStyles";
import { AuthContext } from "context/AuthContext";

export default function EmailInput() {
  const { emailInputState, recalculateIsReadyToProceed } = useContext(AuthContext);
  const [emailInput, setEmailInput] = emailInputState;

  const handleChange = event => {
    setEmailInput(event.target.value)
  };

  useEffect(() => {
    recalculateIsReadyToProceed();
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
