import React, { useEffect, useState } from "react";
import axios from "axios";

import Question from "../../context/Question";
import Answers from "./Answers";

import {
  Table,
  CategoryTitle,
  ResultTableRow,
  ResultTableHead,
  QuestionListContainer,
  TableContainer,
  H3
} from "../../style/MyStyle";

export default function QuestionDetails(props) {
  const [question, setQuestion] = useState(new Question("", "", "", "", []));

  const { id } = props.match.params;
  const url = `http://localhost:8080/questions/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then(resp =>
        setQuestion(
          new Question(
            resp.data.category.name,
            resp.data.type,
            resp.data.question,
            resp.data.correctAnswer,
            resp.data.incorrectAnswers
          )
        )
      );
  }, [url]);

  return (
    <QuestionListContainer>
      <CategoryTitle>{question.category}</CategoryTitle>
      <H3>{question.question}</H3>
      <TableContainer>
        <Table>
          <thead>
            <ResultTableRow>
              <ResultTableHead>Possible answers</ResultTableHead>
            </ResultTableRow>
          </thead>
          <Answers question={question} />
        </Table>
      </TableContainer>
    </QuestionListContainer>
  );
}
