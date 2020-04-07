import React, {useState} from 'react'

import {
    Table,
    TableRow,
    QuestionTableHead,
    QuestionsTd,
    QuestionsTr,
    H3,
    QuestionListTdNavLink,
  } from "style/MyStyle";

export default function QuestionList() {
    const [questions, setQuestions] = useState([]);


    return (
        <Table>
          <thead>
            <TableRow>
              <QuestionTableHead>Id</QuestionTableHead>
              <QuestionTableHead>Question</QuestionTableHead>
              <QuestionTableHead>Category</QuestionTableHead>
              <QuestionTableHead>Type</QuestionTableHead>
              <QuestionTableHead>Status</QuestionTableHead>
            </TableRow>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <QuestionsTr key={index}>
                <QuestionsTd>{question.id}</QuestionsTd>
                <QuestionListTdNavLink to={`/questions/${question.id}`}>
                  <QuestionsTd>{question.question}</QuestionsTd>
                </QuestionListTdNavLink>
                <QuestionsTd>{question.category.name}</QuestionsTd>
                <QuestionsTd>{question.type}</QuestionsTd>
                <QuestionsTd>
                  {question.validated === true ? "Validated" : "Not validated"}
                </QuestionsTd>
              </QuestionsTr>
            ))}
          </tbody>
        </Table>
    )
}
