import React, { useContext } from "react";
import { StarterFormContext } from "../../context/StarterFormContext";

export default function QuestionNumberInput() {
  const setQuestionNumber = useContext(StarterFormContext)
    .questionNumberInput[1];
  const MIN_QUESTIONS = useContext(StarterFormContext).MIN_QUESTIONS;

  const handleNumberOfQuestions = e => {
    setQuestionNumber(2 * e.target.value);
  };

  return (
    <div>
      <label htmlFor='numberOfQuestions'>Questions / Player: </label>
      <input
        placeholder='5'
        type='number'
        id='numberOfQuestions'
        required
        name='numberOfQuestions'
        min={MIN_QUESTIONS}
        max='25'
        onChange={handleNumberOfQuestions}
      ></input>
    </div>
  );
}
