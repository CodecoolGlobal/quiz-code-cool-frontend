import React, { useContext } from "react";
import axios from "axios";

import PlayerNameInput from "./PlayerNameInput";
import CategoryInput from "./CategoryInput";
import QuestionNumberInput from "./QuestionNumberInput";
import TypeInput from "./TypeInput";

import { StarterFormContext } from "../../context/StarterFormContext";
import { QuestionContext } from "../../context/QuestionContext";
import { PlayerContext } from "../../context/PlayerContext";

import Question from "../../context/Question";
import Player from "../../context/Player";

import {
  ContentContainer,
  ContainerMorePadding,
  H3,
  Button
} from "../../style/MyStyle";

export default function QuizStarterForm(props) {
  const setQuestions = useContext(QuestionContext)[1];
  const setPlayers = useContext(PlayerContext)[1];

  const {
    BASE_URL_FOR_QUESTIONS_QUERY,
    questionNumberInput,
    categoryInput,
    typeInput,
    nameInputs
  } = useContext(StarterFormContext);

  const questionNumber = questionNumberInput[0];
  const selectedCategoryId = categoryInput[0];
  const type = typeInput[0];
  const names = nameInputs[0];

  const createQuestionUrl = () => {
    let QuestionNumberUrl = `amount=${questionNumber}`;
    let categoryUrl =
      selectedCategoryId === "8" ? "" : `&category=${selectedCategoryId}`;
    let typeUrl = type === "" ? "" : `&type=${type}`;
    let finalUrl =
      BASE_URL_FOR_QUESTIONS_QUERY + QuestionNumberUrl + categoryUrl + typeUrl;
    return finalUrl;
  };

  const submit = e => {
    e.preventDefault();
    const questionUrl = createQuestionUrl();
    axios.get(questionUrl).then(resp => {
      if (resp.data === []) {
        alert(
          "There are not enough questions matching the entered parameters :("
        );
      } else {
        resp.data.map(questionData =>
          setQuestions(questions => [
            ...questions,
            new Question(
              questionData.category.name,
              questionData.type,
              questionData.difficulty,
              questionData.question,
              questionData.correct_answer,
              questionData.incorrect_answers
            )
          ])
        );
        names.map(name =>
          setPlayers(players => [...players, new Player(name)])
        );
        props.history.push("/quiz");
      }
    });
    console.log(questionUrl);
  };

  return (
    <ContentContainer>
      <ContainerMorePadding>
        <H3>New Quiz</H3>
        <PlayerNameInput />
        <QuestionNumberInput />
        <CategoryInput />
        <TypeInput />
        <Button onClick={submit}>Start Quiz</Button>
      </ContainerMorePadding>
    </ContentContainer>
  );
}
