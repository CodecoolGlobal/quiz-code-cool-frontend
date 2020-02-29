import React, { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import { ProgressContext } from "../../context/ProgressContext";

import {
  RadioButton,
  RadioButtonLabel,
  AnswerContainer
} from "../../style/MyStyle";

export default function Answers() {
  const { getAnswersZip } = useContext(QuestionContext);
  const [answersZip, setAnswersZip] = useState([]);

  useEffect(() => {
    setAnswersZip(getAnswersZip());
  }, [getAnswersZip]);

  const { processGuess } = useContext(ProgressContext);

  const chooseAnswer = event => {
    const guess = event.target.value;
    processGuess(guess);
  };

  return (
    <AnswerContainer>
      {answersZip.map((answerZip, index) => (
        <div key={index}>
          <RadioButton
            id={index}
            type='radio'
            name='answer'
            value={answerZip[1]}
            onClick={chooseAnswer}
            defaultChecked={false}
          />
          <RadioButtonLabel htmlFor={index}>{answerZip[0]}</RadioButtonLabel>
        </div>
      ))}
    </AnswerContainer>
  );
}
