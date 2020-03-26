import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InputItem, InputLabel, TextInput } from "style/MyStyle";
import { AuthContext } from "context/AuthContext";

export default function EmailInput() {
  const history = useHistory();
  const { emailState, recalculateIsReadyToProceed } = useContext(AuthContext);
  const [email, setEmail] = emailState;

  const handleChange = event => {
    setEmail(event.target.value)
    recalculateIsReadyToProceed(history.location.pathname);
  };

  useEffect(() => {
    recalculateIsReadyToProceed(history.location.pathname);
  }, [email]);

  return (
    <InputItem>
      <InputLabel htmlFor='email'>Email</InputLabel>
      <TextInput
        name='email'
        id='email'
        type='text'
        placeholder={`example@codecool.com`}
        value={email}
        onChange={handleChange}
      />
    </InputItem>
  );
}
