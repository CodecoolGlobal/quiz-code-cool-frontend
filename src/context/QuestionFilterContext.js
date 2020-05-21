import React, { useState, createContext, useContext } from "react";
import {CategoryContext} from "context/CategoryContext"
import {TypeContext} from "context/TypeContext"
import { StatusContext } from "context/StatusContext";

import { api_getQuestions } from "api/apiConnection";


export const QuestionFilterContext = createContext();

export const QuestionFilterProvider = props => {
  const NEW_CUSTOM_QUIZ_PATH = "/custom-quiz/new";

  const [questions, setQuestions] = useState([]);

  const {categoryInput} = useContext(CategoryContext);
  const selectedCategoryId = categoryInput[0];

  const {selectedTypeInput} = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const selectedStatus = useContext(StatusContext)[0];

  const getValidatedPart = (pathname) => {
    if (pathname === NEW_CUSTOM_QUIZ_PATH)
        return "&validated=true";
    return selectedStatus === "" ? selectedStatus : `&validated=${selectedStatus}`;
  }

    const getQueryString = (pathname) => {
          let categoryUrlPart = selectedCategoryId === "0" ? "" : `&category=${selectedCategoryId}`;
          let typeUrlPart = selectedType === "" ? "" : `&type=${selectedType}`;
          let validatedPart = getValidatedPart(pathname);
          let queryString =
            "?" +
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
      alert(`Failed to load question list.\n${error}`)
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
