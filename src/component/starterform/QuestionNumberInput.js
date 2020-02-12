import React, { useContext } from "react";
import { StarterFormContext } from "../../context/StarterFormContext";

import { TextInput, InputItem, InputLabel } from "../../style/MyStyle";

export default function QuestionNumberInput() {
  const setQuestionNumber = useContext(StarterFormContext)
    .questionNumberInput[1];
  const MIN_QUESTIONS = useContext(StarterFormContext).MIN_QUESTIONS;

  const handleNumberOfQuestions = e => {
    setQuestionNumber(2 * e.target.value);
  };

  return (
    <InputItem width='50'>
      <InputLabel htmlFor='numberOfQuestions'>Questions / Player</InputLabel>
      <TextInput
        placeholder='5'
        type='number'
        id='numberOfQuestions'
        required
        name='numberOfQuestions'
        min={MIN_QUESTIONS}
        max='25'
        onChange={handleNumberOfQuestions}
      ></TextInput>
    </InputItem>
  );
}
