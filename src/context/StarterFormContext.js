import React, { useState, createContext } from "react";

export const StarterFormContext = createContext();

export const StarterFormProvider = props => {
  // Constants
  const BASE_URL_FOR_QUESTIONS_QUERY = "https://opentdb.com/api.php?";
  const DIFFICULTIES = ["Any Difficulty", "Easy", "Medium", "Hard"];
  const MIN_QUESTIONS = 1;
  const CATEGORY_URL = "https://opentdb.com/api_category.php";
  const DEFAULT_CATEGORY = {
    id: "8",
    name: "Any Category"
  };
  const TYPES = {
    "Any Type": "",
    "Multiple Choice": "multiple",
    "True / False": "boolean"
  };

  // States
  const [names, setNames] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(MIN_QUESTIONS);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    DEFAULT_CATEGORY.id
  );
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0]);
  const [type, setType] = useState("");
  const [playerNumber, setPlayerNumber] = useState(2);

  return (
    <StarterFormContext.Provider
      value={{
        BASE_URL_FOR_QUESTIONS_QUERY,
        MIN_QUESTIONS,
        DIFFICULTIES,
        CATEGORY_URL,
        DEFAULT_CATEGORY,
        TYPES,
        nameInputs: [names, setNames],
        questionNumberInput: [questionNumber, setQuestionNumber],
        categoryInput: [selectedCategoryId, setSelectedCategoryId],
        difficultyInput: [difficulty, setDifficulty],
        typeInput: [type, setType],
        playerNumber: [playerNumber, setPlayerNumber]
      }}
    >
      {props.children}
    </StarterFormContext.Provider>
  );
};
