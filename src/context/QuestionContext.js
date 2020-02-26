import React, { useState, createContext } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = props => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <QuestionContext.Provider
      value={{
        currentQuestionIndexState: [
          currentQuestionIndex,
          setCurrentQuestionIndex
        ],
        allQuestionsState: [questions, setQuestions]
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
