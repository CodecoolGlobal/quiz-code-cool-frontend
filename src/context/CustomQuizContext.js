import React, { useState, createContext } from "react";

export const CustomQuizContext = createContext();

export const CustomQuizProvider = props => {
  // Constants
  const BASE_URL_FOR_CUSTOM_QUIZ = "http://localhost:8080/customquizzes";

  // States
  const [selectedCustomQuizId, setSelectedCustomQuizId] = useState(0);

  return (
    <CustomQuizContext.Provider
      value={{
        BASE_URL_FOR_CUSTOM_QUIZ,
        selectedCustomQuiz: [selectedCustomQuizId, setSelectedCustomQuizId]
      }}
    >
      {props.children}
    </CustomQuizContext.Provider>
  );
};
