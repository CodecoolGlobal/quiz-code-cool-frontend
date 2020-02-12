import React, { useState, useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { PlayerContext } from "../context/PlayerContext";
import Answers from "./Answers";
import { formatText } from "../Util";

export default function QuestionCard() {
  const [questions, setQuestions] = useContext(QuestionContext);
  const [players, setPlayers] = useContext(PlayerContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleNextButton = () => {
    console.log("HE");
  };

  return (
    <div>
      <div>
        <h1>Player: {players[currentPlayerIndex].name}</h1>
        <h3>{formatText(questions[0].question)}</h3>
        <Answers />
        <div>
          <button type='button' id='next' onClick={handleNextButton} disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
