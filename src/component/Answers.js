import React, { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { ProgressContext } from "../context/ProgressContext";

import { decodeStringToHtml } from "../Util";

import { RadioButton, RadioButtonLabel } from "../style/MyStyle";

export default function Answers() {
  const [questions, setQuestions] = useContext(QuestionContext);

  const { proceed, correctness } = useContext(ProgressContext);
  const [isReadyToProceed, setIsReadyToProceed] = proceed;
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = correctness;

  const { incorrect_answers, correct_answer } = questions[0];
  const [answersZip, setAnswersZip] = useState([]);

  useEffect(() => {
    let answers = [correct_answer, ...incorrect_answers];
    answers.map(answer => (answer = decodeStringToHtml(answer)));
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

  const chooseAnswer = () => {
    const guess = document.querySelector('input[type="radio"]:checked').value;
    setSelectedAnswerCorrectness(guess);
    setIsReadyToProceed(true);
  };

  return (
    <div>
      {answersZip.map((answer, index) => (
        <div key={index}>
          <RadioButton
            id={index}
            type='radio'
            name='answer'
            value={answer[1]}
            onClick={chooseAnswer}
          />
          <RadioButtonLabel htmlFor={index}>{answer[0]}</RadioButtonLabel>
        </div>
      ))}
    </div>
  );
}
