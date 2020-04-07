import React, { useState, createContext } from "react";

export const QuestionFilterContext = createContext();

export const QuestionFilterProvider = props => {
  const [questions, setQuestions] = useState(false);

  return (
    <QuestionFilterContext.Provider value={[questions, setQuestions]}>
      {props.children}
    </QuestionFilterContext.Provider>
  );
};
