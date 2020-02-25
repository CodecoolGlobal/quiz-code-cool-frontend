import React, { useContext } from "react";
import { RandomStarterFormContext } from "../../context/RandomStarterFormContext";

import { TextInput, InputItem, InputLabel } from "../../style/MyStyle";

export default function QuestionNumberInput() {
  const setQuestionNumber = useContext(RandomStarterFormContext)
    .questionNumberInput[1];
  const MIN_QUESTIONS = useContext(RandomStarterFormContext).MIN_QUESTIONS;

  const handleNumberOfQuestions = e => {
    setQuestionNumber(2 * e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='numberOfQuestions'>Questions / Player</InputLabel>
      <TextInput
        placeholder='5'
        type='number'
        id='numberOfQuestions'
        style
        required
        name='numberOfQuestions'
        min={MIN_QUESTIONS}
        max='25'
        onChange={handleNumberOfQuestions}
      ></TextInput>
    </InputItem>
  );
}
