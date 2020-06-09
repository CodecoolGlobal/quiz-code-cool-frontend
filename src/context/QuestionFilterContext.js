import React, { useState, createContext, useContext } from "react";
import {CategoryContext} from "context/CategoryContext"
import {TypeContext} from "context/TypeContext"
import { StatusContext } from "context/StatusContext";
import { useHistory } from 'react-router-dom';
import { api_getQuestions } from "api/questionConnection";
import { handleError } from "util/errorUtil";
import { UsersContext } from "./UsersContext";
import {routes} from "util/routes";

export const QuestionFilterContext = createContext();

export const QuestionFilterProvider = props => {
  const QUESTIONS_PER_PAGE = 10;

  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState(null);

  const {categoryInput, DEFAULT_CATEGORY} = useContext(CategoryContext);
  const selectedCategoryId = categoryInput[0];

  const {selectedTypeInput, ANY_TYPE} = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const selectedStatus = useContext(StatusContext)[0];

  const {selectedUserIdState, DEFAULT_USER} = useContext(UsersContext);
  const selectedUserId = selectedUserIdState[0];

  const history = useHistory();

  const getValidatedPart = () => {
    const pathname = history.location.pathname;
    if (pathname === routes.customQuiz.new)
        return "&validated=true";
    return selectedStatus === "" ? selectedStatus : `&validated=${selectedStatus}`;
  }

    const getQueryString = () => {
        let userIdPart = selectedUserId === DEFAULT_USER.id ? "" : `&user=${selectedUserId}` 
        let categoryUrlPart = selectedCategoryId === DEFAULT_CATEGORY.id ? "" : `&category=${selectedCategoryId}`;
        let typeUrlPart = selectedType === ANY_TYPE ? "" : `&type=${selectedType}`;
        let validatedPart = getValidatedPart();
        let queryString =
          "?" +
          userIdPart +
          categoryUrlPart +
          typeUrlPart +
          validatedPart;
        return queryString;
    }

  const getFilteredQuestions = async (pathname) => {
    try {
      const queryString = getQueryString(pathname);
      const questions = await api_getQuestions(queryString);
      setQuestions(questions);
    } catch(error) {
      handleError(error, "Failed to load questions.");
    }
  }

  const getPageNumber = () => {
    return questions ? Math.ceil(questions.length / QUESTIONS_PER_PAGE) : null;
  }

  return (
    <QuestionFilterContext.Provider value={{
        getPageNumber,
        QUESTIONS_PER_PAGE,
        getFilteredQuestions,
        pageState: [page, setPage],
        filteredQuestionsState: [questions, setQuestions]}}>
      {props.children}
    </QuestionFilterContext.Provider>
  );
};
