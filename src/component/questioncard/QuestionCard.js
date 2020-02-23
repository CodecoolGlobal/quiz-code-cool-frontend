import React, { useState, useContext } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import { PlayerContext } from "../../context/PlayerContext";
import { ProgressContext } from "../../context/ProgressContext";

import Answers from "./Answers";
import PlayerData from "./PlayerData";

import { decodeStringToHtml } from "../../Util";
import { ContentContainer, H3, Button } from "../../style/MyStyle";

export default function QuestionCard(props) {
  const borderColors = {
    empty: " rgba(255, 255, 255, 0.4)",
    success: "rgb(51, 153, 51, 0.8)",
    failed: "rgb(204, 0, 0, 0.8)"
  };
  const [borderColor, setQuestionCardBackground] = useState(borderColors.empty);

  const [questions, setQuestions] = useContext(QuestionContext);
  const players = useContext(PlayerContext)[0];
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const { readyToProceed, correctness } = useContext(ProgressContext);
  const [isReadyToProceed, setIsReadyToProceed] = readyToProceed;
  const selectedAnswerCorrectness = correctness[0];

  const addScoreIfNeeded = () => {
    if (selectedAnswerCorrectness === "1") {
      players[currentPlayerIndex].score++;
    }
  };

  const setTemporaryBackground = () => {
    setQuestionCardBackground(
      selectedAnswerCorrectness === "1"
        ? borderColors.success
        : borderColors.failed
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
      setQuestionCardBackground(borderColors.empty);
      goToNext();
    }, 1000);
  };

  return (
    <ContentContainer borderColor={borderColor}>
      <PlayerData currentPlayerIndex={currentPlayerIndex} />
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
