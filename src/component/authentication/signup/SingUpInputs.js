import React from "react";
import { InputItem, InputLabel, TextInput, Help, InputHelperContainer } from "style/MyStyle";

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
        <InputHelperContainer>
        <Help>Between 5 and 20 characters. </Help>
        </InputHelperContainer>
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
        <InputLabel htmlFor='password'>Password</InputLabel>
        <TextInput name='password' id='password' type='text' />
        <InputHelperContainer>
        <Help>
          At least 8 characters including a number and a lowercase letter.{" "}
        </Help>
        </InputHelperContainer>
      </InputItem>
    </div>
  );
}
