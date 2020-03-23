import React from "react";
import { InputItem, InputLabel, TextInput } from "style/MyStyle";

export default function SingInInputs() {
  return (
    <div>
      <InputItem>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <TextInput
          name='username'
          id='username'
          type='text'
        />
      </InputItem>
      <InputItem>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <TextInput name='password' id='password' type='text' />
      </InputItem>
    </div>
  );
}
