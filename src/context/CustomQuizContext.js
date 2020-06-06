import React, { useState, createContext } from "react";

export const CustomQuizContext = createContext();

export const CustomQuizProvider = props => {
  const [selectedCustomQuizId, setSelectedCustomQuizId] = useState(0);

  return (
    <CustomQuizContext.Provider
      value={{
        selectedCustomQuiz: [selectedCustomQuizId, setSelectedCustomQuizId]
      }}
    >
      {props.children}
    </CustomQuizContext.Provider>
  );
};
