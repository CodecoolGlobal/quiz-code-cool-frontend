import React, { useState, createContext } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = props => {
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = useState(
    null
  );
  const [isReadyToProceed, setIsReadyToProceed] = useState(false);

  return (
    <ProgressContext.Provider
      value={{
        proceed: [isReadyToProceed, setIsReadyToProceed],
        correctness: [selectedAnswerCorrectness, setSelectedAnswerCorrectness]
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};
