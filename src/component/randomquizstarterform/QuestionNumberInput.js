import React, { useContext } from "react";
import { RandomQuizContext } from "../../context/RandomQuizContext";

import { TextInput, InputItem, InputLabel } from "../../style/MyStyle";

export default function QuestionNumberInput() {
  const setQuestionsPerPlayer = useContext(RandomQuizContext)
    .questionsPerPlayerState[1];
  const MIN_QUESTIONS = useContext(RandomQuizContext).MIN_QUESTIONS;

  const handleNumberOfQuestions = e => {
    setQuestionsPerPlayer(e.target.value);
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
