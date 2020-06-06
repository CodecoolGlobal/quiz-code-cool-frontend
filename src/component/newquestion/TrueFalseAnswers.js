import React, { useContext } from "react";

import { NewQuestionFormContext } from "context/NewQuestionFormContext";

import {
  RadioButton,
  RadioButtonLabel,
  InputItem,
  InputLabel
} from "style/js/CommonStyles";

export default function TrueFalseAnswers() {
  const { possibleAnswersInput } = useContext(NewQuestionFormContext);
  const { correctAnswerInput } = useContext(NewQuestionFormContext);
  const { incorrectAnswersInput } = useContext(NewQuestionFormContext);

  const chooseAnswer = event => {
    const guess = event.target.value;
    correctAnswerInput[1](guess);
    incorrectAnswersInput[1](
      new Array(...possibleAnswersInput[0].filter(answer => answer !== guess))
    );
  };

  return (
    <InputItem>
      <InputLabel htmlFor='answer'>Click on the correct answer</InputLabel>
      {possibleAnswersInput[0].map(answer => (
        <div key={answer}>
          <RadioButton
            id={answer}
            type='radio'
            name='answer'
            value={answer}
            onClick={chooseAnswer}
            defaultChecked={false}
          />
          <RadioButtonLabel htmlFor={answer}>{answer}</RadioButtonLabel>
        </div>
      ))}
    </InputItem>
  );
}
