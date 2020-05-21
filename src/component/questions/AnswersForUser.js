import React, { useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";

import { shuffle } from "util/arrayUtil";
import { TableRow, TableHead, ResultTableData } from "style/MyStyle";

export default function AnswersForUser() {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];

  const getShuffledAnswers = () => {
    let shuffledAnswers = [
      question.correctAnswer,
      ...question.incorrectAnswers,
    ];
    shuffle(shuffledAnswers);
    return shuffledAnswers;
  };

  return (
    <TableRow>
      <TableHead>Possible answers</TableHead>
      <ResultTableData>
        {getShuffledAnswers().map((answer, index) => (
          <p key={index}>{answer}</p>
        ))}
      </ResultTableData>
    </TableRow>
  );
}
