import React, { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "context/CategoryContext";
import { TypeContext } from "context/TypeContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";

import Question from "context/Question";
import { api_postNewQuestion } from "api/questionConnection";
import { handleError } from "util/errorUtil";

export const NewQuestionFormContext = createContext();

export const NewQuestionFormProvider = props => {
  const history = useHistory();

  // States
  const { categoryInput, allCategoriesState } = useContext(CategoryContext);
  const selectedCategoryId = categoryInput[0];
  const allCategories = allCategoriesState[0];

  const { selectedTypeInput } = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const { clearTypeCategoryInputs } = useContext(RestoreInputsContext);

  const [question, setQuestion] = useState("");
  const [possibleAnswers, setPossibleAnswers] = useState(["True", "False"]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const clearAddNewQuestionContext = () => {
    clearTypeCategoryInputs();
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

  const isAnyInvalidInput = () => {
      selectedCategoryId === "0" ||
      selectedType.length === 0 ||
      question === "" ||
      correctAnswer === "" ||
      incorrectAnswers.length === 0 ||
      incorrectAnswers.includes(undefined)
  }

  const setUpNewQuestion = () => {
    return new Question(
      {category: getSelectedCategory(),
      type: selectedType,
      question,
      correctAnswer,
      incorrectAnswers}
    );
  }

  const submitForm = async () => {
    if (isAnyInvalidInput()) {
      alert("Please fill out all the fields!");
      return;
    }

    const newQuestion = setUpNewQuestion();

    try {
      await api_postNewQuestion(newQuestion);
      alert("Question saved successfully! :)");
      clearAddNewQuestionContext();
      history.push("/questions");
    } catch(error) {
      handleError(error, "Failed to post new question.");
    }
  };

  return (
    <NewQuestionFormContext.Provider
      value={{
        submitForm,
        possibleAnswersInput: [possibleAnswers, setPossibleAnswers],
        questionInput: [question, setQuestion],
        correctAnswerInput: [correctAnswer, setCorrectAnswer],
        incorrectAnswersInput: [incorrectAnswers, setIncorrectAnswers]
      }}
    >
      {props.children}
    </NewQuestionFormContext.Provider>
  );
};
