import React, { useContext } from "react";

import PlayerNameInput from "./PlayerNameInput";
import CategoryInput from "./CategoryInput";
import QuestionNumberInput from "./QuestionNumberInput";
import DifficultyInput from "./DifficultyInput";
import TypeInput from "./TypeInput";

import { StarterFormContext } from "../../context/StarterFormContext";

import { FormContainer, H3 } from "../../style/MyStyle";

export default function QuizStarterForm() {
  const {
    BASE_URL_FOR_QUESTIONS_QUERY,
    questionNumberInput,
    categoryInput,
    difficultyInput,
    typeInput
  } = useContext(StarterFormContext);

  const questionNumber = questionNumberInput[0];
  const selectedCategoryId = categoryInput[0];
  const difficulty = difficultyInput[0];
  const type = typeInput[0];

  const createQuestionUrl = () => {
    let QuestionNumberUrl = `amount=${questionNumber}`;
    let categoryUrl =
      selectedCategoryId === 8 ? "" : `&category=${selectedCategoryId}`;
    let difficultyUrl =
      difficulty === "Any Difficulty"
        ? ""
        : `&difficulty=${difficulty.toLowerCase()}`;
    let typeUrl = type === "" ? "" : `&type=${type}`;
    let finalUrl =
      BASE_URL_FOR_QUESTIONS_QUERY +
      QuestionNumberUrl +
      categoryUrl +
      difficultyUrl +
      typeUrl;
    return finalUrl;
  };

  const submitForm = e => {
    e.preventDefault();
    createQuestionUrl();
    console.log(createQuestionUrl());
  };

  return (
    <FormContainer>
      <form onSubmit={submitForm}>
        <H3>New Quiz</H3>
        <PlayerNameInput />
        <CategoryInput />
        <QuestionNumberInput />
        <DifficultyInput />
        <TypeInput />
        <button type='submit'>Start Quiz</button>
      </form>
    </FormContainer>
  );
}
