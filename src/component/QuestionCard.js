import React, { useState, useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { PlayerContext } from "../context/PlayerContext";
import { ProgressContext } from "../context/ProgressContext";

import Answers from "./Answers";
import PlayerData from "./PlayerData";

import { decodeStringToHtml } from "../Util";

import { ContentContainer, H3, Button } from "../style/MyStyle";

export default function QuestionCard() {
  const [questions, setQuestions] = useContext(QuestionContext);

  const { proceed, correctness } = useContext(ProgressContext);
  const [isReadyToProceed, setIsReadyToProceed] = proceed;
  const [selectedAnswerCorrectness, setSelectedAnswerCorrectness] = correctness;

  const [players, setPlayers] = useContext(PlayerContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleNextButton = () => {
    console.log("HE");
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
          Next
        </Button>
      </div>
    </ContentContainer>
  );
}
