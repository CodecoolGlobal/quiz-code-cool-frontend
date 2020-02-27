import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  ResultTableRow,
  ResultTableHead,
  QuestionListContainer,
  QuestionsTd,
  TableContainer,
  QuestionsTr,
  H3,
  QuestionListElement
} from "../../style/MyStyle";

export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/questions")
      .then(resp => setQuestions(resp.data));
  }, []);

  return (
    <QuestionListContainer>
      <H3>All questions</H3>
      <TableContainer>
        <Table>
          <thead>
            <ResultTableRow>
              <ResultTableHead>Id</ResultTableHead>
              <ResultTableHead>Question</ResultTableHead>
              <ResultTableHead>Category</ResultTableHead>
            </ResultTableRow>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <QuestionsTr key={index}>
                <QuestionsTd>{question.id}</QuestionsTd>
                <QuestionsTd>
                  <QuestionListElement to={`/questions/${question.id}`}>
                    {question.question}
                  </QuestionListElement>
                </QuestionsTd>
                <QuestionsTd>{question.category.name}</QuestionsTd>
              </QuestionsTr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </QuestionListContainer>
  );
}
