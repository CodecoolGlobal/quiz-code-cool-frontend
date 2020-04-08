import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { ProgressContext } from "context/ProgressContext";
import { RestoreFiltersContext } from "context/RestoreFiltersContext";

export const NewQuizContext = createContext();

export const NewQuizProvider = (props) => {
  const CUSTOM_QUIZ_BASE_URL = process.env.REACT_APP_CUSTOM_QUIZ_BASE_URL;
  const setIsReadyToProceed = useContext(ProgressContext)[1];
  const { clearFilters } = useContext(RestoreFiltersContext);

  const [quizNameInput, setQuizNameInput] = useState("");
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

  const recalculateIsReadyToProceed = () => {
    if (
      quizNameInput.length > 0 &&
      quizNameInput.trim() !== "" &&
      selectedQuestionIds !== []
    ) {
      setIsReadyToProceed(true);
    } else {
      setIsReadyToProceed(false);
    }
  };

  const submit = (props) => {
    const newQuiz = { name: quizNameInput, questionIds: selectedQuestionIds };

    const questionUrl = CUSTOM_QUIZ_BASE_URL;
    axios({
      method: "post",
      url: questionUrl,
      data: newQuiz,
      withCredentials: true,
    }).then(
      (response) => {
        if (response.status === 200) {
          alert("Quiz saved successfully! :)");
          setQuizNameInput("");
          setSelectedQuestionIds([]);
          clearFilters();
          setIsReadyToProceed(false);
          props.history.push("/custom-quiz/start");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <NewQuizContext.Provider
      value={{
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
