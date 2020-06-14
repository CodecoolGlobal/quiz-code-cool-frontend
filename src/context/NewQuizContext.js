import React, { useState, createContext, useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import { api_postNewQuiz } from "api/customQuizConnection";
import { useHistory } from "react-router-dom";
import {routes} from "util/routes";

export const NewQuizContext = createContext();

export const NewQuizProvider = (props) => {

  const history = useHistory();
  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const [quizNameInput, setQuizNameInput] = useState("");
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

  const toggleQuestionId = id => {
    if (selectedQuestionIds.includes(id)) {
      setSelectedQuestionIds(selectedQuestionIds.filter(qId => qId !== id));
    } else {
      setSelectedQuestionIds([...selectedQuestionIds, id]);
    }
  }

  const recalculateIsReadyToProceed = () => {
    if (
      quizNameInput.length > 0 &&
      quizNameInput.trim() !== "" &&
      selectedQuestionIds.length !== 0
    ) {
      setIsReadyToProceed(true);
    } else {
      setIsReadyToProceed(false);
    }
  };

  const clearStates = () => {
    setQuizNameInput("");
    setSelectedQuestionIds([]);
    setIsReadyToProceed(false);
  }

  const submit = async () => {
    const newQuiz = { name: quizNameInput, questionIds: selectedQuestionIds };
    try {
      await api_postNewQuiz(newQuiz);
      alert("Quiz saved successfully.");
      clearStates();
      history.push(routes.customQuiz.start);
    } catch(error) {
    }
  };

  return (
    <NewQuizContext.Provider
      value={{
        toggleQuestionId,
        submit,
        recalculateIsReadyToProceed,
        quizNameInputState: [quizNameInput, setQuizNameInput],
        selectedQuestionsState: [selectedQuestionIds, setSelectedQuestionIds],
      }}
    >
      {props.children}
    </NewQuizContext.Provider>
  );
};
