import React, { useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";

import { TableRow, TableHead, ResultTableData } from "style/js/MyStyle";

export default function AnswerForAdmin() {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];

  return (
    <React.Fragment>
      <TableRow>
        <TableHead>Correct Answer</TableHead>
        <ResultTableData>
          <div>{question.correctAnswer}</div>
        </ResultTableData>
      </TableRow>
      <TableRow>
        <TableHead>Incorrect Answers</TableHead>
        <ResultTableData>
        {question.incorrectAnswers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
        </ResultTableData>
      </TableRow>
    </React.Fragment>
  );
}
