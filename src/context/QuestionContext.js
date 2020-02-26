import React, { useState, createContext } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = props => {
  const [quizMode, setQuizMode] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <QuestionContext.Provider
      value={{
        questionNumberState: [questionNumber, setQuestionNumber],
        quizModeState: [quizMode, setQuizMode],
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
