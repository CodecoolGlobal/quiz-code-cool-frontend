import React, { useEffect, useState } from "react";
import axios from "axios";

import Question from "../../context/Question";
import Answers from "./Answers";

import {
  H3,
  Table,
  ResultTableData,
  ResultTableRow,
  ResultTableHead,
  ContentContainer,
  TableContainer
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
    <ContentContainer>
      <H3>Details</H3>
      <TableContainer>
        <Table>
          <thead>
            <ResultTableRow>
              <ResultTableHead>Question</ResultTableHead>
              <ResultTableHead>{question.question}</ResultTableHead>
            </ResultTableRow>
          </thead>
          <tbody>
            <ResultTableRow>
              <ResultTableHead>Publish date</ResultTableHead>
              <ResultTableData>03.02.2020</ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Created By</ResultTableHead>
              <ResultTableData>Zokni kutya</ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Category</ResultTableHead>
              <ResultTableData>{question.category}</ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Possible answers</ResultTableHead>
              <Answers question={question} />
            </ResultTableRow>
          </tbody>
        </Table>
      </TableContainer>
    </ContentContainer>
  );
}
