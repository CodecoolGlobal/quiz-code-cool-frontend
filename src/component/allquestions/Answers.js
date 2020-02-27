import React, { useEffect, useState } from "react";

import { shuffle } from "../../Util";
import { QuestionsTr, AnswerTd } from "../../style/MyStyle";

export default function Answers(props) {
  const [answers, setAnswers] = useState([]);

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
