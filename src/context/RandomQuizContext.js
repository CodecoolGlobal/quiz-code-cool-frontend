import React, { useState, createContext } from "react";

export const RandomQuizContext = createContext();

export const RandomQuizProvider = props => {
  const MIN_QUESTIONS = 1;
  
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(MIN_QUESTIONS);
  const [playerNumber, setPlayerNumber] = useState(2);
  const [names, setNames] = useState([]);

  const modifyName = (index, value) => {
    let currentNames = [...names];
    currentNames[index] = value;
    setNames(currentNames);
  };

  return (
    <RandomQuizContext.Provider
      value={{
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
