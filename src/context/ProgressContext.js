import React, { useState, createContext } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = props => {
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = useState(
    null
  );
  const [isReadyToProceed, setIsReadyToProceed] = useState(false);

  const processGuess = guess => {
    setSelectedAnswerCorrectness(guess);
    setIsReadyToProceed(true);
  };

  return (
    <ProgressContext.Provider
      value={{
        processGuess,
        readyToProceed: [isReadyToProceed, setIsReadyToProceed],
        correctness: [selectedAnswerCorrectness, setSelectedAnswerCorrectness]
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};
