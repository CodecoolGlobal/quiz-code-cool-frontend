import React, { useState, createContext } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = props => {
  const [isReadyToProceed, setIsReadyToProceed] = useState(false);

  return (
    <ProgressContext.Provider value={[isReadyToProceed, setIsReadyToProceed]}>
      {props.children}
    </ProgressContext.Provider>
  );
};
