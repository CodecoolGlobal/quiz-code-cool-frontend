import React, {useContext, useEffect} from "react";
import {
  InputItem,
  InputLabel,
  TextInput,
  Help,
  InputHelperContainer
} from "style/MyStyle";
import { AuthContext } from "context/AuthContext";

export default function UsernameInput() {
    const {usernameState, recalculateIsReadyToProceed} = useContext(AuthContext);
    const [username, setUsername] = usernameState;
  
    const handleChange = event => {
        setUsername(
         event.target.value
      );  
      recalculateIsReadyToProceed();
    };

    useEffect(() => {
      recalculateIsReadyToProceed();
    }, [username]);

    return (
        <InputItem>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <TextInput
          name='username'
          id='username'
          type='text'
          placeholder={`codecooler`}
          value={username}
          onChange={handleChange}
        />
        <InputHelperContainer>
          <Help>Between 5 and 20 characters. </Help>
        </InputHelperContainer>
      </InputItem>
    )
}
