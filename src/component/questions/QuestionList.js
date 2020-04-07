import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { QuestionFilterContext } from "context/QuestionFilterContext";
import { CategoryContext } from "context/CategoryContext";
import { TypeContext } from "context/TypeContext";
import { StatusContext } from "context/StatusContext";

import {
  Help,
  QuestionTable,
  TableRow,
  QuestionTableHead,
  QuestionsTd,
  QuestionsTr,
  QuestionListTdNavLink,
} from "style/MyStyle";

export default function QuestionList() {
  const selectedCategoryId = useContext(CategoryContext).categoryInput[0];
  const selectedStatus = useContext(StatusContext)[0];

  const { typesMap, selectedTypeInput } = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const history = useHistory();

  const { getFilteredQuestions, filteredQuestionsState } = useContext(
    QuestionFilterContext
  );
  const questions = filteredQuestionsState[0];

  useEffect(() => {
    getFilteredQuestions(history.location.pathname);
  }, [
    selectedCategoryId,
    selectedType,
    selectedStatus,
  ]);

  return (
      questions.length === 0 ?
      (<Help>There is no question with the selected parameters.</Help>) :
      (
      <QuestionTable>
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
              <QuestionsTd>{typesMap[question.type]}</QuestionsTd>
              <QuestionsTd>
                {question.validated === true ? "Validated" : "Not validated"}
              </QuestionsTd>
            </QuestionsTr>
          ))}
        </tbody>
      </QuestionTable>)
  );
}
