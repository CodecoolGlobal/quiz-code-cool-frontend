import React, { useContext, useState, useEffect } from "react";
import { AddNewQuestionFormContext } from "../../context/AddNewQuestionFormContext";
import { ProgressContext } from "../../context/ProgressContext";

import {
  RadioButton,
  RadioButtonLabel,
  AnswerContainer,
  InputLabel
} from "../../style/MyStyle";

export default function TrueFalseAnswers() {
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);
  const [possibleAnswers] = useContext(AddNewQuestionFormContext);
  const [correctAnswer, setCorrectAnswer] = useContext(
    AddNewQuestionFormContext
  );
  const [incorrectAnswers, setIncorrectAnswers] = useContext(
    AddNewQuestionFormContext
  );

  const chooseAnswer = event => {
    const guess = event.target.value;
    setCorrectAnswer(guess);
    setIncorrectAnswers(...possibleAnswers.filter(answer => answer !== guess));
    setIsReadyToProceed(true);
  };

  return (
    <AnswerContainer>
      <InputLabel htmlFor="answer">Click on the correct answer</InputLabel>
      {possibleAnswers.map(answer => (
        <div key={answer}>
          <RadioButton
            type="radio"
            name="answer"
            value={answer}
            onClick={chooseAnswer}
            defaultChecked={false}
          />
          <RadioButtonLabel htmlFor={answer}>{answer}</RadioButtonLabel>
        </div>
      ))}
    </AnswerContainer>
  );
}
