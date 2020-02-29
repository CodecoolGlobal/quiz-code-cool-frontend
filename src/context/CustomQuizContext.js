import React, { useState, createContext } from "react";
import axios from "axios";

export const CustomQuizContext = createContext();

export const CustomQuizProvider = props => {
  // Constants
  const BASE_URL_FOR_CUSTOM_QUIZ =
    process.env.REACT_APP_BASE_URL_FOR_CUSTOM_QUIZ;

  // States
  const [selectedCustomQuizId, setSelectedCustomQuizId] = useState(1);
  const [customQuizzes, setCustomQuizzes] = useState([]);

  const getAllCustomQuizzes = () => {
    axios.get(BASE_URL_FOR_CUSTOM_QUIZ).then(res => {
      setCustomQuizzes(res.data);
    });
  };

  return (
    <CustomQuizContext.Provider
      value={{
        BASE_URL_FOR_CUSTOM_QUIZ,
        getAllCustomQuizzes,
        customQuizzes,
        selectedCustomQuiz: [selectedCustomQuizId, setSelectedCustomQuizId]
      }}
    >
      {props.children}
    </CustomQuizContext.Provider>
  );
};
