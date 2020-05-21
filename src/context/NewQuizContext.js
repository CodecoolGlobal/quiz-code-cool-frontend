import React, { useState, createContext, useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import { RestoreFiltersContext } from "context/RestoreFiltersContext";
import { api_postNewQuiz } from "api/customQuizConnection";
import { handleError } from "util/errorUtil";

export const NewQuizContext = createContext();

export const NewQuizProvider = (props) => {
  const setIsReadyToProceed = useContext(ProgressContext)[1];
  const { clearFilters } = useContext(RestoreFiltersContext);

  const [quizNameInput, setQuizNameInput] = useState("");
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

  const toggleQuestionId = id => {
    if (selectedQuestionIds.includes(id)) {
      setSelectedQuestionIds(selectedQuestionIds.filter(qId => qId !== id));
    } else {
      setSelectedQuestionIds([...selectedQuestionIds, id]);
    }
    recalculateIsReadyToProceed();
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
    console.log(selectedQuestionIds);
  };

  const clearStates = () => {
    alert("Quiz saved successfully.");
    setQuizNameInput("");
    setSelectedQuestionIds([]);
    clearFilters();
    setIsReadyToProceed(false);
  }

  const submit = async (props) => {
    const newQuiz = { name: quizNameInput, questionIds: selectedQuestionIds };
    try {
      await api_postNewQuiz(newQuiz);
      clearStates();
      props.history.push("/custom-quiz/start");
    } catch(error) {
      handleError(error, "Failed to post new quiz.");
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
