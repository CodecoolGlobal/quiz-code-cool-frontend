import React, { useContext, useEffect } from "react";
import axios from "axios";

import PlayerNameInput from "./PlayerNameInput";
import CategoryInput from "./CategoryInput";
import QuestionNumberInput from "./QuestionNumberInput";
import TypeInput from "./TypeInput";

import { RandomStarterFormContext } from "../../context/RandomStarterFormContext";
import { QuestionContext } from "../../context/QuestionContext";
import { PlayerContext } from "../../context/PlayerContext";

import Question from "../../context/Question";
import Player from "../../context/Player";

import { ContentContainer, H3, Button } from "../../style/MyStyle";

export default function QuizStarterForm(props) {
  const {
    currentQuestionIndexState,
    allQuestionsState,
    quizModeState,
    questionNumberState
  } = useContext(QuestionContext);
  const setQuestions = allQuestionsState[1];
  const setCurrentQuestionIndex = currentQuestionIndexState[1];
  const setQuizMode = quizModeState[1];
  const setQuestionNumber = questionNumberState[1];

  const setPlayers = useContext(PlayerContext)[1];

  const {
    questionsPerPlayerState,
    BASE_URL_FOR_QUESTIONS_QUERY,
    categoryInput,
    typeInput,
    nameInputs
  } = useContext(RandomStarterFormContext);

  const questionsPerPlayer = questionsPerPlayerState[0];
  const setQuestionsPerPlayer = questionsPerPlayerState[1];
  const selectedCategoryId = categoryInput[0];
  const type = typeInput[0];
  const names = nameInputs[0];
  const questionNumber = questionsPerPlayer * names.length;

  useEffect(() => {
    setQuestionsPerPlayer(0);
  }, [setQuestionsPerPlayer]);

  const createQuestionUrl = () => {
    let QuestionNumberUrl = `amount=${questionNumber}`;
    let categoryUrl =
      selectedCategoryId === "0" ? "" : `&category=${selectedCategoryId}`;
    let typeUrl = type === "" ? "" : `&type=${type}`;
    let finalUrl =
      BASE_URL_FOR_QUESTIONS_QUERY + QuestionNumberUrl + categoryUrl + typeUrl;
    return finalUrl;
  };

  const submit = e => {
    setPlayers([]);
    setQuestions([]);
    setCurrentQuestionIndex(0);

    const questionUrl = createQuestionUrl();
    if (
      names.includes(undefined) ||
      names.includes("") ||
      questionsPerPlayer < 1
    ) {
      alert("Please fill out all the fields!");
      return;
    } else {
      names.map(name => setPlayers(players => [...players, new Player(name)]));
    }

    axios.get(questionUrl).then(resp => {
      if (resp.data === "") {
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
              questionData.question,
              questionData.correctAnswer,
              questionData.incorrectAnswers
            )
          ])
        );

        props.history.push("/quiz");
      }
    });
    setQuestionNumber(1);
    setQuizMode("Random");
  };

  return (
    <ContentContainer>
      <H3>New Random Quiz</H3>
      <PlayerNameInput />
      <QuestionNumberInput />
      <CategoryInput />
      <TypeInput />
      <Button onClick={submit}>Start Quiz</Button>
    </ContentContainer>
  );
}
