import React, { useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";

import { TableRow, Th, TableData } from "style/js/CommonStyles";

export default function AnswerForAdmin() {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];

  return (
    <React.Fragment>
      <TableRow>
        <Th>Correct Answer</Th>
        <TableData>
          <div>{question.correctAnswer}</div>
        </TableData>
      </TableRow>
      <TableRow>
        <Th>Incorrect Answers</Th>
        <TableData>
        {question.incorrectAnswers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
        </TableData>
      </TableRow>
    </React.Fragment>
  );
}
