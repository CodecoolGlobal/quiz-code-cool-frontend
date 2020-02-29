import React, { useState, createContext } from "react";

export const RandomQuizContext = createContext();

export const RandomQuizProvider = props => {
  // Constants
  const BASE_URL_FOR_RANDOM_QUIZ = "http://localhost:8080/questions?";
  const MIN_QUESTIONS = 1;
  const CATEGORY_URL = "http://localhost:8080/categories";
  const DEFAULT_CATEGORY = {
    id: "0",
    name: "Any Category"
  };
  const TYPES = {
    "Any Type": "",
    "Multiple Choice": "multiple",
    "True / False": "boolean"
  };

  // States
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(MIN_QUESTIONS);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    DEFAULT_CATEGORY.id
  );
  const [type, setType] = useState("");
  const [playerNumber, setPlayerNumber] = useState(2);
  const [names, setNames] = useState([]);

  return (
    <RandomQuizContext.Provider
      value={{
        BASE_URL_FOR_RANDOM_QUIZ,
        MIN_QUESTIONS,
        CATEGORY_URL,
        DEFAULT_CATEGORY,
        TYPES,
        nameInputs: [names, setNames],
        questionNumberInput: [questionNumber, setQuestionNumber],
        categoryInput: [selectedCategoryId, setSelectedCategoryId],
        typeInput: [type, setType],
        playerNumber: [playerNumber, setPlayerNumber],
        questionsPerPlayerState: [questionsPerPlayer, setQuestionsPerPlayer]
      }}
    >
      {props.children}
    </RandomQuizContext.Provider>
  );
};