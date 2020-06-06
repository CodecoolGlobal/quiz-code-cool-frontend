import React, { useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";

import { shuffle } from "util/arrayUtil";
import { TableRow, Th, TableData } from "style/js/CommonStyles";
import { TableDataWithElements } from "./style";

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
      <Th>Possible answers</Th>
      <TableDataWithElements>
        {getShuffledAnswers().map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
      </TableDataWithElements>
    </TableRow>
  );
}
