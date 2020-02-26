import React, { useState, createContext } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = props => {
  const [questions, setQuestions] = useState([]);
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState(0);

  return (
    <QuestionContext.Provider
      value={{
        allQuestionsState: [questions, setQuestions],
        questionsPerPlayerState: [questionsPerPlayer, setQuestionsPerPlayer]
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
