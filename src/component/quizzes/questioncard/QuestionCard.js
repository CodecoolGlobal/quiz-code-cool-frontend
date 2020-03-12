import React, { useState, useContext } from "react";

import Answers from "component/quizzes/questioncard/Answers";
import PlayerData from "component/quizzes/questioncard/PlayerData";

import { QuestionContext } from "context/QuestionContext";
import { PlayerContext } from "context/PlayerContext";
import { ProgressContext } from "context/ProgressContext";
import { AnswerCorrectnessContext } from "context/AnswerCorrectnessContext";

import {
  QuestionCardContainer,
  QuestionContainer,
  H3,
  CategoryTitle,
  Button
} from "../../../style/MyStyle";

export default function QuestionCard(props) {
  const questionColors = {
    empty: "none",
    success: "rgba(92, 216, 43, 0.5)",
    failed: "rgba(216, 43, 43, 0.5)"
  };
  const [questionColor, setQuestionColor] = useState(questionColors.empty);

  const {
    allQuestionsState,
    currentQuestionIndexState,
    questionNumberState
  } = useContext(QuestionContext);

  const questions = allQuestionsState[0];
  const [
    currentQuestionIndex,
    setCurrentQuestionIndex
  ] = currentQuestionIndexState;
  const [questionNumber, setQuestionNumber] = questionNumberState;

  const players = useContext(PlayerContext)[0];
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);
  const selectedAnswerCorrectness = useContext(AnswerCorrectnessContext)[0];

  const addScoreIfNeeded = () => {
    if (selectedAnswerCorrectness === "1") {
      players[currentPlayerIndex].score++;
    }
  };

  const setTemporaryBackground = () => {
    setQuestionColor(
      selectedAnswerCorrectness === "1"
        ? questionColors.success
        : questionColors.failed
    );
  };

  const goToNext = () => {
    if ((currentQuestionIndex + 1) % players.length === 0) {
      setQuestionNumber(questionNumber + 1);
    }

    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);

    if (currentQuestionIndex === questions.length - 1) {
      props.history.push("/results");
    }

    setIsReadyToProceed(false);

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const setRadioButtonsUnchecked = () => {
    let buttons = document.querySelectorAll('input[type="radio"]');
    for (let button of buttons) {
      button.checked = false;
    }
  };

  const handleNextButton = () => {
    addScoreIfNeeded();
    setTemporaryBackground();
    setTimeout(() => {
      setRadioButtonsUnchecked();
      setQuestionColor(questionColors.empty);
      goToNext();
    }, 1000);
  };

  return (
    <QuestionCardContainer>
      <PlayerData currentPlayerIndex={currentPlayerIndex} />
      <QuestionContainer questionColor={questionColor}>
        {/* <H3>{decodeStringToHtml(questions[0].question)}</H3> */}
        <CategoryTitle>
          {questions[currentQuestionIndex].category}
        </CategoryTitle>
        <H3>{questions[currentQuestionIndex].question}</H3>
        <Answers />
        <Button
          type='button'
          id='next'
          onClick={handleNextButton}
          disabled={!isReadyToProceed}
        >
          {currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
        </Button>
      </QuestionContainer>
    </QuestionCardContainer>
  );
}