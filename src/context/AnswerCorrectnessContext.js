import React, { useState, createContext } from "react";

export const AnswerCorrectnessContext = createContext();

export const AnswerCorrectnessProvider = props => {
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = useState(
    null
  );

  return (
    <AnswerCorrectnessContext.Provider
      value={[selectedAnswerCorrectness, setSelectedAnswerCorrectness]}
    >
      {props.children}
    </AnswerCorrectnessContext.Provider>
  );
};
