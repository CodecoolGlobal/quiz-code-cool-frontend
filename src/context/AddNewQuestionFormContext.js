import React, { useState, createContext } from "react";

export const AddNewQuestionFormContext = createContext();

export const AddNewQuestionFormProvider = props => {
  const ADD_NEW_QUESTION_BASE_URL =
    process.env.REACT_APP_ADD_NEW_QUESTION_BASE_URL;
  const CATEGORY_URL = process.env.REACT_APP_CATEGORY_URL;
  const TYPES = {
    "Multiple Choice": "multiple",
    "True / False": "boolean"
  };

  // States
  const [selectedCategory, setSelectedCategory] = useState({
    id: 0,
    name: ""
  });
  const [type, setType] = useState([]);
  const [question, setQuestion] = useState("");
  const [possibleAnswers, setPossibleAnswers] = useState(["True", "False"]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const clearAddNewQuestionContext = () => {
    setType([]);
    setQuestion("");
    setCorrectAnswer("");
    setIncorrectAnswers([]);
  };

  return (
    <AddNewQuestionFormContext.Provider
      value={{
        ADD_NEW_QUESTION_BASE_URL,
        CATEGORY_URL,
        TYPES,
        clearAddNewQuestionContext,
        possibleAnswersInput: [possibleAnswers, setPossibleAnswers],
        categoryInput: [selectedCategory, setSelectedCategory],
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
