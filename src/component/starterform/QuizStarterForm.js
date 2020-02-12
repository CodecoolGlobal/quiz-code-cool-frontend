import React, { useContext } from "react";
import axios from "axios";

import PlayerNameInput from "./PlayerNameInput";
import CategoryInput from "./CategoryInput";
import QuestionNumberInput from "./QuestionNumberInput";
import DifficultyInput from "./DifficultyInput";
import TypeInput from "./TypeInput";

import { StarterFormContext } from "../../context/StarterFormContext";
import { QuestionContext } from "../../context/QuestionContext";
import Question from "../../context/Question";
import Player from "../../context/Player";

import { FormContainer, InputRow, H3, Button } from "../../style/MyStyle";
import { PlayerContext } from "../../context/PlayerContext";

export default function QuizStarterForm() {
  const [questions, setQuestions] = useContext(QuestionContext);
  const [players, setPlayers] = useContext(PlayerContext);

  const {
    BASE_URL_FOR_QUESTIONS_QUERY,
    questionNumberInput,
    categoryInput,
    difficultyInput,
    typeInput,
    nameInputs
  } = useContext(StarterFormContext);

  const questionNumber = questionNumberInput[0];
  const selectedCategoryId = categoryInput[0];
  const difficulty = difficultyInput[0];
  const type = typeInput[0];
  const names = nameInputs[0];

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
    const questionUrl = createQuestionUrl();
    axios.get(questionUrl).then(resp => {
      if (resp.data.response_code === 1) {
        alert(
          "There are not enough questions matching the entered parameters :("
        );
      } else {
        resp.data.results.map(questionData =>
          setQuestions([
            ...questions,
            new Question(
              questionData.category,
              questionData.type,
              questionData.difficulty,
              questionData.question,
              questionData.correct_answer,
              questionData.incorrect_answers
            )
          ])
        );
        names.map(name => setPlayers([[...players], new Player(name)]));
      }
    });

    console.log(createQuestionUrl());
  };

  return (
    <FormContainer>
      <form onSubmit={submitForm}>
        <H3>New Quiz</H3>
        <InputRow>
          <PlayerNameInput />
        </InputRow>
        <InputRow>
          <CategoryInput />
          <QuestionNumberInput />
        </InputRow>
        <InputRow>
          <DifficultyInput />
          <TypeInput />
        </InputRow>
      </form>
      <Button type='submit'>Start Quiz</Button>
    </FormContainer>
  );
}
