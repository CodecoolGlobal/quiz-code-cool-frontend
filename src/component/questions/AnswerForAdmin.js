import React, { useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";

import { TableRow, Th } from "style/js/CommonStyles";
import { TableDataWithElements } from "./style";

export default function AnswerForAdmin() {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];

  return (
    <React.Fragment>
      <TableRow>
        <Th>Correct Answer</Th>
        <TableDataWithElements>
          <div>{question.correctAnswer}</div>
        </TableDataWithElements>
      </TableRow>
      <TableRow>
        <Th>Incorrect Answers</Th>
        <TableDataWithElements>
        {question.incorrectAnswers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
        </TableDataWithElements>
      </TableRow>
    </React.Fragment>
  );
}
