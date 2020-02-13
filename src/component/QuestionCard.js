import React, { useState, useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { PlayerContext } from "../context/PlayerContext";
import Answers from "./Answers";
import { decodeStringToHtml } from "../Util";

import { ContentContainer, H1, H3, Button } from "../style/MyStyle";

export default function QuestionCard() {
  const [questions, setQuestions] = useContext(QuestionContext);
  const [players, setPlayers] = useContext(PlayerContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleNextButton = () => {
    console.log("HE");
  };

  return (
    <ContentContainer>
      <H1>Player: {players[currentPlayerIndex].name}</H1>
      <H3>{decodeStringToHtml(questions[0].question)}</H3>
      <Answers />
      <div>
        <Button type='button' id='next' onClick={handleNextButton} disabled>
          Next
        </Button>
      </div>
    </ContentContainer>
  );
}
