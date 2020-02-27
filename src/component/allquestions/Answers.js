import React, { useEffect, useState } from "react";

import { shuffle } from "../../Util";
import { ResultTableData } from "../../style/MyStyle";

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
    <ResultTableData>
      {answers.map(answer => (
        <div>{answer}</div>
      ))}
    </ResultTableData>
  );
}
