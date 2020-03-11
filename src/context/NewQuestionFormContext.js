import React, { useState, createContext, useContext } from "react";
import { CategoryContext } from "context/CategoryContext";
import Question from "context/Question";
import axios from "axios";

export const NewQuestionFormContext = createContext();

export const NewQuestionFormProvider = props => {
  const ADD_NEW_QUESTION_BASE_URL =
    process.env.REACT_APP_ADD_NEW_QUESTION_BASE_URL;
  const TYPES = {
    "Multiple Choice": "multiple",
    "True / False": "boolean"
  };

  // States
  const { categoryInput, allCategories } = useContext(CategoryContext);
  const selectedCategoryId = categoryInput[0];

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

  const getSelectedCategory = () => {
    for (let category of allCategories) {
      if (category.id.toString() === selectedCategoryId) {
        return category;
      }
    }
  };

  const submitForm = formProps => {
    if (
      selectedCategoryId === "0" ||
      type.length === 0 ||
      question === "" ||
      correctAnswer === "" ||
      incorrectAnswers.length === 0 ||
      incorrectAnswers.includes(undefined)
    ) {
      alert("Please fill out all the fields!");
      return;
    }

    const newQuestion = new Question(
      getSelectedCategory(),
      type,
      question,
      correctAnswer,
      incorrectAnswers
    );

    const questionUrl = ADD_NEW_QUESTION_BASE_URL;
    axios({
      method: "post",
      url: questionUrl,
      data: newQuestion
    }).then(
      response => {
        if (response.status === 200) {
          alert("Question saved successfully! :)");
          clearAddNewQuestionContext();
          formProps.history.push("/questions");
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <NewQuestionFormContext.Provider
      value={{
        submitForm,
        TYPES,
        possibleAnswersInput: [possibleAnswers, setPossibleAnswers],
        typeInput: [type, setType],
        questionInput: [question, setQuestion],
        correctAnswerInput: [correctAnswer, setCorrectAnswer],
        incorrectAnswersInput: [incorrectAnswers, setIncorrectAnswers]
      }}
    >
      {props.children}
    </NewQuestionFormContext.Provider>
  );
};
