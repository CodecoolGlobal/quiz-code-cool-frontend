import React, { useState, useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { PlayerContext } from "../context/PlayerContext";
import { ProgressContext } from "../context/ProgressContext";

import Answers from "./Answers";
import PlayerData from "./PlayerData";

import { decodeStringToHtml } from "../Util";

import { ContentContainer, H3, Button } from "../style/MyStyle";

export default function QuestionCard(props) {
  const [questions, setQuestions] = useContext(QuestionContext);

  const { proceeded, readyToProceed, correctness } = useContext(
    ProgressContext
  );
  const [isProceeded, setIsProceeded] = proceeded;
  const [isReadyToProceed, setIsReadyToProceed] = readyToProceed;
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = correctness;

  const [players, setPlayers] = useContext(PlayerContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleNextButton = () => {
    console.log(selectedAnswerCorrectness);
    if (selectedAnswerCorrectness === "1") {
      players[currentPlayerIndex].score++;
    }
    console.log(players[currentPlayerIndex].score);

    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    if (questions.length === 1) {
      props.history.push("/results");
    } else {
      setQuestions(questions.slice(1));
    }
    setIsReadyToProceed(false);
    setIsProceeded(true);
  };

  return (
    <ContentContainer>
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
