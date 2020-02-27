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
        BASE_URL_FOR_POST_REQUEST,
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
