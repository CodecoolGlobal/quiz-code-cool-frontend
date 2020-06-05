import React, { useState, createContext, useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";
import { api_postNewQuiz } from "api/customQuizConnection";
import { handleError } from "util/errorUtil";
import { useHistory } from "react-router-dom";

export const NewQuizContext = createContext();

export const NewQuizProvider = (props) => {
  const history = useHistory();
  const setIsReadyToProceed = useContext(ProgressContext)[1];
  const { clearTypeCategoryInputs } = useContext(RestoreInputsContext);

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
    console.log(selectedQuestionIds)
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
    alert("Quiz saved successfully.");
    setQuizNameInput("");
    setSelectedQuestionIds([]);
    clearTypeCategoryInputs();
    setIsReadyToProceed(false);
  }

  const submit = async () => {
    const newQuiz = { name: quizNameInput, questionIds: selectedQuestionIds };
    try {
      await api_postNewQuiz(newQuiz);
      clearStates();
      history.push("/custom-quiz/start");
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
