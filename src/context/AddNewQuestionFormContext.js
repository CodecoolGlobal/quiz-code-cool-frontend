import React, { useState, createContext } from "react";

export const AddNewQuestionFormContext = createContext();

export const AddNewQuestionFormProvider = props => {
  const BASE_URL_FOR_POST_REQUEST = "http://localhost:8080/questions/add";
  const CATEGORY_URL = "http://localhost:8080/categories";
  const TYPES = {
    "Multiple Choice": "multiple",
    "True / False": "boolean"
  };

  // States
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  const [type, setType] = useState([]);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  return (
    <AddNewQuestionFormContext.Provider
      value={{
        BASE_URL_FOR_POST_REQUEST,
        CATEGORY_URL,
        TYPES,
        categoryInput: [selectedCategoryId, setSelectedCategoryId],
        typeInput: [type, setType],
        questionInput: [question, setQuestion],
        correctAnswerInput: [correctAnswer, setCorrectAnswer],
        incorrectAnswersInput: [incorrectAnswers, setIncorrectAnswers]
      }}
    >
      {props.children}
    </AddNewQuestionFormContext.Provider>
  );
};
