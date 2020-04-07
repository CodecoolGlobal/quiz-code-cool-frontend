import React, { useState, createContext } from "react";
import Question from "context/Question";
import axios from "axios";

export const QuestionsContext = createContext();

export const QuestionsProvider = props => {
  const QUESTIONS_BASE_URL = process.env.REACT_APP_QUESTIONS_BASE_URL;

  const getQuestions = async (url) => {
    let resp = await axios.get(url, { withCredentials: true });
    if (resp.data !== "") {
      return resp.data.map(q => new Question(q));
    }
    return [];
  }
    
  return (
    <QuestionsContext.Provider value={{
      QUESTIONS_BASE_URL,
      getQuestions
    }}>
      {props.children}
    </QuestionsContext.Provider>
  );
};
