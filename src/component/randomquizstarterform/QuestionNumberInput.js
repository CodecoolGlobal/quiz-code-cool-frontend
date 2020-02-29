import React, { useContext } from "react";
import { RandomQuizContext } from "context/RandomQuizContext";

import { TextInput, InputItem, InputLabel } from "style/MyStyle";

export default function QuestionNumberInput() {
  const { questionsPerPlayerState } = useContext(RandomQuizContext);

  const setQuestionsPerPlayer = questionsPerPlayerState[1];

  const handleNumberOfQuestions = e => {
    setQuestionsPerPlayer(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='numberOfQuestions'>Questions / Player</InputLabel>
      <TextInput
        placeholder='5'
        type='number'
        onChange={handleNumberOfQuestions}
      ></TextInput>
    </InputItem>
  );
}
