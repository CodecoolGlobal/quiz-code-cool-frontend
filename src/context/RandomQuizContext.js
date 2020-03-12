import React, { useState, createContext } from "react";

export const RandomQuizContext = createContext();

export const RandomQuizProvider = props => {
  const RANDOM_QUIZ_BASE_URL = process.env.REACT_APP_RANDOM_QUIZ_BASE_URL;
  const MIN_QUESTIONS = 1;

  // States
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(MIN_QUESTIONS);
  const [playerNumber, setPlayerNumber] = useState(2);

  //Name
  const [names, setNames] = useState([]);

  const modifyName = (index, value) => {
    let currentNames = [...names];
    currentNames[index] = value;
    setNames(currentNames);
  };

  return (
    <RandomQuizContext.Provider
      value={{
        RANDOM_QUIZ_BASE_URL,
        MIN_QUESTIONS,
        nameInputsState: [names, setNames],
        modifyName,
        questionNumberInput: [questionNumber, setQuestionNumber],
        playerNumberState: [playerNumber, setPlayerNumber],
        questionsPerPlayerState: [questionsPerPlayer, setQuestionsPerPlayer]
      }}
    >
      {props.children}
    </RandomQuizContext.Provider>
  );
};
