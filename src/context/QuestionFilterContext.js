import React, { useState, createContext, useContext } from "react";
import {CategoryContext} from "context/CategoryContext"
import {TypeContext} from "context/TypeContext"
import { StatusContext } from "context/StatusContext";

import { api_getQuestions } from "api/questionConnection";
import { handleError } from "util/errorUtil";
import { UsersContext } from "./UsersContext";


export const QuestionFilterContext = createContext();

export const QuestionFilterProvider = props => {
  const NEW_CUSTOM_QUIZ_PATH = "/custom-quiz/new";

  const [questions, setQuestions] = useState([]);

  const {categoryInput, DEFAULT_CATEGORY} = useContext(CategoryContext);
  const selectedCategoryId = categoryInput[0];

  const {selectedTypeInput, ANY_TYPE} = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const selectedStatus = useContext(StatusContext)[0];

  const {selectedUserIdState, DEFAULT_USER} = useContext(UsersContext);
  const selectedUserId = selectedUserIdState[0];

  const getValidatedPart = (pathname) => {
    if (pathname === NEW_CUSTOM_QUIZ_PATH)
        return "&validated=true";
    return selectedStatus === "" ? selectedStatus : `&validated=${selectedStatus}`;
  }

    const getQueryString = (pathname) => {
        let userIdPart = selectedUserId === DEFAULT_USER.id ? "" : `&user=${selectedUserId}` 
        let categoryUrlPart = selectedCategoryId === DEFAULT_CATEGORY.id ? "" : `&category=${selectedCategoryId}`;
        let typeUrlPart = selectedType === ANY_TYPE ? "" : `&type=${selectedType}`;
        let validatedPart = getValidatedPart(pathname);
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

  return (
    <QuestionFilterContext.Provider value={{
        getFilteredQuestions,
        filteredQuestionsState: [questions, setQuestions]}}>
      {props.children}
    </QuestionFilterContext.Provider>
  );
};
