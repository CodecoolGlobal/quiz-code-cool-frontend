import React, { useState, createContext } from "react";
import axios from "axios";

export const RandomQuizContext = createContext();

export const RandomQuizProvider = props => {
  const RANDOM_QUIZ_BASE_URL = process.env.REACT_APP_RANDOM_QUIZ_BASE_URL;
  const MIN_QUESTIONS = 1;

  //Category
  const CATEGORY_URL = process.env.REACT_APP_CATEGORY_URL;
  const DEFAULT_CATEGORY = {
    id: "0",
    name: "Any Category"
  };
  const [categories, setCategories] = useState([]);
  const getAllCategories = () => {
    axios.get(CATEGORY_URL).then(res => {
      setCategories([DEFAULT_CATEGORY, ...res.data]);
    });
  };

  //Type
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
        getAllCategories,
        categories,
        RANDOM_QUIZ_BASE_URL,
        MIN_QUESTIONS,
        TYPES,
        nameInputsState: [names, setNames],
        modifyName,
        questionNumberInput: [questionNumber, setQuestionNumber],
        categoryInput: [selectedCategoryId, setSelectedCategoryId],
        typeInput: [type, setType],
        playerNumberState: [playerNumber, setPlayerNumber],
        questionsPerPlayerState: [questionsPerPlayer, setQuestionsPerPlayer]
      }}
    >
      {props.children}
    </RandomQuizContext.Provider>
  );
};
