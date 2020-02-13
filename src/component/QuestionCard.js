import React, { useState, useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { PlayerContext } from "../context/PlayerContext";
import { ProgressContext } from "../context/ProgressContext";

import Answers from "./Answers";
import PlayerData from "./PlayerData";

import { decodeStringToHtml } from "../Util";

import { ContentContainer, H3, Button } from "../style/MyStyle";

export default function QuestionCard(props) {
  const questionCardBgThemes = {
    empty: " rgba(255, 255, 255, 0.8)",
    success: "rgba(92, 216, 43, 0.7)",
    failed: "rgba(216, 43, 43, 0.7)"
  };

  const [questions, setQuestions] = useContext(QuestionContext);

  const { proceeded, readyToProceed, correctness } = useContext(
    ProgressContext
  );
  const [isProceeded, setIsProceeded] = proceeded;
  const [isReadyToProceed, setIsReadyToProceed] = readyToProceed;
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = correctness;
  const [questionCardBackground, setQuestionCardBackground] = useState(
    questionCardBgThemes.empty
  );

  const [players, setPlayers] = useContext(PlayerContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const addScoreIfNeeded = () => {
    if (selectedAnswerCorrectness === "1") {
      players[currentPlayerIndex].score++;
    }
  };

  const setTemporaryBackground = () => {
    setQuestionCardBackground(
      selectedAnswerCorrectness === "1"
        ? questionCardBgThemes.success
        : questionCardBgThemes.failed
    );
  };

  const goToNext = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    if (questions.length === 1) {
      props.history.push("/results");
    } else {
      setQuestions(questions.slice(1));
    }
    setIsReadyToProceed(false);
    setIsProceeded(true);
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
      setQuestionCardBackground(questionCardBgThemes.empty);
      goToNext();
    }, 1000);
  };

  return (
    <ContentContainer customBackground={questionCardBackground}>
      <PlayerData actualPlayer={players[currentPlayerIndex]} />
      <H3>{decodeStringToHtml(questions[0].question)}</H3>
      <Answers />
      <div>
        <Button
          type='button'
          id='next'
          onClick={handleNextButton}
          disabled={!isReadyToProceed}
        >
          {questions.length > 1 ? "Next" : "Finish Quiz"}
        </Button>
      </div>
    </ContentContainer>
  );
}
