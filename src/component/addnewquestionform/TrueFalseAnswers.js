import React, { useContext } from "react";
import { AddNewQuestionFormContext } from "../../context/AddNewQuestionFormContext";
import { ProgressContext } from "../../context/ProgressContext";

import {
  RadioButton,
  RadioButtonLabel,
  AnswerContainer,
  InputLabel
} from "../../style/MyStyle";

export default function TrueFalseAnswers() {
  const { readyToProceed } = useContext(ProgressContext);
  const setIsReadyToProceed = readyToProceed[1];
  const { possibleAnswersInput } = useContext(AddNewQuestionFormContext);
  const { correctAnswerInput } = useContext(AddNewQuestionFormContext);
  const { incorrectAnswersInput } = useContext(AddNewQuestionFormContext);

  const chooseAnswer = event => {
    const guess = event.target.value;
    correctAnswerInput[1](guess);
    incorrectAnswersInput[1](
      new Array(...possibleAnswersInput[0].filter(answer => answer !== guess))
    );
    setIsReadyToProceed(true);
  };

  return (
    <AnswerContainer>
      <InputLabel htmlFor="answer">Click on the correct answer</InputLabel>
      {possibleAnswersInput[0].map(answer => (
        <div key={answer}>
          <RadioButton
            id={answer}
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
