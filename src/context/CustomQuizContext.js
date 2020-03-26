import React, { useState, createContext } from "react";
import axios from "axios";

export const CustomQuizContext = createContext();

export const CustomQuizProvider = props => {
  // Constants
  const CUSTOM_QUIZ_BASE_URL = process.env.REACT_APP_CUSTOM_QUIZ_BASE_URL;

  // States
  const [selectedCustomQuizId, setSelectedCustomQuizId] = useState(0);
  const [customQuizzes, setCustomQuizzes] = useState([]);

  const getAllCustomQuizzes = () => {
    axios.get(CUSTOM_QUIZ_BASE_URL, { withCredentials: true}).then(res => {
      setCustomQuizzes(res.data);
    });
  };

  return (
    <CustomQuizContext.Provider
      value={{
        CUSTOM_QUIZ_BASE_URL,
        getAllCustomQuizzes,
        customQuizzes,
        selectedCustomQuiz: [selectedCustomQuizId, setSelectedCustomQuizId]
      }}
    >
      {props.children}
    </CustomQuizContext.Provider>
  );
};
