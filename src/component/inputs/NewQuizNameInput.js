import React, { useContext, useEffect } from "react";
import { InputItem, InputLabel, TextInput } from "style/js/CommonStyles";
import { NewQuizContext } from "context/NewQuizContext";

export default function NewQuizNameInput() {
  const { quizNameInputState, recalculateIsReadyToProceed } = useContext(NewQuizContext);
  const [quizNameInput, setQuizNameInput] = quizNameInputState;

  const handleChange = event => {
    setQuizNameInput(event.target.value)
  };

  useEffect(() => {
    recalculateIsReadyToProceed();
  }, [quizNameInput]);

  return (
    <InputItem>
      <InputLabel htmlFor='newQuiz'>Quiz name</InputLabel>
      <TextInput
        name='newQuiz'
        id='newQuiz'
        type='text'
        placeholder='New custom quiz'
        value={quizNameInput}
        onChange={handleChange}
      />
    </InputItem>
  );
}