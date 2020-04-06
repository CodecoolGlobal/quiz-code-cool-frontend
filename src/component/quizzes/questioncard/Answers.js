import React, { useContext, useState, useEffect } from "react";

import { QuestionContext } from "context/QuizContext";
import { ProgressContext } from "context/ProgressContext";
import { AnswerCorrectnessContext } from "context/AnswerCorrectnessContext";

import { RadioButton, RadioButtonLabel, AnswerContainer } from "style/MyStyle";

export default function Answers() {
  const { getAnswersZip } = useContext(QuestionContext);
  const [answersZip, setAnswersZip] = useState([]);

  useEffect(() => {
    setAnswersZip(getAnswersZip());
  }, [getAnswersZip]);

  const setIsReadyToProceed = useContext(ProgressContext)[1];
  const setSelectedAnswerCorrectness = useContext(AnswerCorrectnessContext)[1];

  const chooseAnswer = event => {
    const guess = event.target.value;
    setIsReadyToProceed(true);
    setSelectedAnswerCorrectness(guess);
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
