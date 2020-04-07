import React, { useState, createContext, useContext } from "react";
import {CategoryContext} from "context/CategoryContext"
import {TypeContext} from "context/TypeContext"
import { StatusContext } from "context/StatusContext";

import {QuestionsContext} from "context/QuestionsContext"


export const QuestionFilterContext = createContext();

export const QuestionFilterProvider = props => {
    const NEW_CUSTOM_QUIZ_PATH = "/custom-quiz/new";

  const [questions, setQuestions] = useState([]);

  const {getQuestions, QUESTIONS_BASE_URL} = useContext(QuestionsContext);


  const {categoryInput} = useContext(CategoryContext);
  const selectedCategoryId = categoryInput[0];

  const {selectedTypeInput} = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const selectedStatus = useContext(StatusContext)[0];

  const getValidatedPart = (pathname) => {
    if (pathname === NEW_CUSTOM_QUIZ_PATH)
        return "&validated=true";
    return selectedStatus === "" ? selectedStatus : `validated=${selectedStatus}`;
  }

    const getUrl = (pathname) => {
          let categoryUrlPart = selectedCategoryId === "0" ? "" : `&category=${selectedCategoryId}`;
          let typeUrlPart = selectedType === "" ? "" : `&type=${selectedType}`;
          let validatedPart = getValidatedPart(pathname);
          let finalUrl =
            QUESTIONS_BASE_URL +
            "?" +
            categoryUrlPart +
            typeUrlPart +
            validatedPart;
          return finalUrl;
    }

  const getFilteredQuestions = (pathname) => {
    const url = getUrl(pathname);
    console.log(url);
    getQuestions(url).then(questions =>
        setQuestions(questions))
  }


  return (
    <QuestionFilterContext.Provider value={{
        getFilteredQuestions,
        filteredQuestionsState: [questions, setQuestions]}}>
      {props.children}
    </QuestionFilterContext.Provider>
  );
};
