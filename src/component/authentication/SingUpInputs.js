import React from "react";
import { InputItem, InputLabel, TextInput, Help } from "style/MyStyle";

export default function SingUpInputs() {
  return (
    <div>
      <InputItem>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <TextInput
          name='username'
          id='username'
          type='text'
          placeholder={`codecooler`}
        />
        <Help>Between 5 and 20 characters. </Help>
      </InputItem>
      <InputItem>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <TextInput
          name='email'
          id='email'
          type='text'
          placeholder={`example@codecool.com`}
        />
      </InputItem>
      <InputItem>
        <InputLabel htmlFor='password1'>Password</InputLabel>
        <TextInput name='password1' id='password1' type='text' />
        <Help>
          At least 8 characters including a number and a lowercase letter.{" "}
        </Help>
      </InputItem>
    </div>
  );
}
