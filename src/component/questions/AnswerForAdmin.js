import React, { useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";

import { TableRow, TableHead, TableData } from "style/js/CommonStyles";

export default function AnswerForAdmin() {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];

  return (
    <React.Fragment>
      <TableRow>
        <TableHead>Correct Answer</TableHead>
        <TableData>
          <div>{question.correctAnswer}</div>
        </TableData>
      </TableRow>
      <TableRow>
        <TableHead>Incorrect Answers</TableHead>
        <TableData>
        {question.incorrectAnswers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
        </TableData>
      </TableRow>
    </React.Fragment>
  );
}
