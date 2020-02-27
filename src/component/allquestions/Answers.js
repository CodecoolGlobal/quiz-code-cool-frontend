import React, { useEffect, useState } from "react";

import { QuestionsTr, AnswerTd } from "../../style/MyStyle";

export default function Answers(props) {
  const [answers, setAnswers] = useState([]);

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    let shuffledAnswers = [
      props.question.correctAnswer,
      ...props.question.incorrectAnswers
    ];
    shuffle(shuffledAnswers);
    setAnswers(shuffledAnswers);
  }, [
    props.question,
    props.question.correctAnswer,
    props.question.incorrectAnswers
  ]);

  return (
    <tbody>
      {answers.map(answer => (
        <QuestionsTr>
          <AnswerTd>{answer}</AnswerTd>
        </QuestionsTr>
      ))}
    </tbody>
  );
}
