import React, { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import { ProgressContext } from "../../context/ProgressContext";

import { decodeStringToHtml } from "../../Util";

import { RadioButton, RadioButtonLabel } from "../../style/MyStyle";

export default function Answers() {
  const questions = useContext(QuestionContext)[0];

  const { readyToProceed, correctness } = useContext(ProgressContext);
  const setIsReadyToProceed = readyToProceed[1];
  const setSelectedAnswerCorrectness = correctness[1];

  const { incorrect_answers, correct_answer } = questions[0];
  const [answersZip, setAnswersZip] = useState([]);

  useEffect(() => {
    let answers = [correct_answer, ...incorrect_answers];
    answers = answers.map(answer => (answer = decodeStringToHtml(answer)));
    const zip = zipAnswers(incorrect_answers.length, answers);
    shuffle(zip);
    setAnswersZip(zip);
  }, [correct_answer, incorrect_answers]);

  const zipAnswers = (incorrectAnswersLength, answers) => {
    let mapAnswers = [1];
    for (let i = 0; i < incorrectAnswersLength; i++) {
      mapAnswers[i + 1] = 0;
    }
    const answerZip = answers.map((answers, index) => [
      answers,
      mapAnswers[index]
    ]);
    return answerZip;
  };

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const chooseAnswer = event => {
    const guess = event.target.value;
    setSelectedAnswerCorrectness(guess);
    setIsReadyToProceed(true);
  };

  return (
    <div>
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
    </div>
  );
}