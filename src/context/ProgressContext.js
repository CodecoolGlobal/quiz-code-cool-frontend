import React, { useState, createContext } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = props => {
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = useState(
    null
  );
  const [isReadyToProceed, setIsReadyToProceed] = useState(false);
  const [isProceeded, setIsProceeded] = useState(true);

  return (
    <ProgressContext.Provider
      value={{
        proceeded: [isProceeded, setIsProceeded],
        readyToProceed: [isReadyToProceed, setIsReadyToProceed],
        correctness: [selectedAnswerCorrectness, setSelectedAnswerCorrectness]
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};
