import React, { useContext } from "react";

import { PlayerContext } from "context/PlayerContext";
import { QuestionContext } from "context/QuizContext";

import { PlayerName, H2, PlayerHeader, QuestionsImage } from "style/MyStyle";
import ColorsForPlayers from "style/PlayerColors";
import questionMark from "style/question-mark.png";

export default function PlayerData(props) {
  const players = useContext(PlayerContext)[0];
  const currentPlayer = players[props.currentPlayerIndex];

  const { allQuestionsState, questionNumberState } = useContext(
    QuestionContext
  );

  const questionNumber = questionNumberState[0];
  const questions = allQuestionsState[0];

  return (
    <PlayerHeader playerTheme={ColorsForPlayers[props.currentPlayerIndex]}>
      <div>
        <QuestionsImage src={questionMark} alt='question_mark'></QuestionsImage>
        <h4>
          {questionNumber} / {questions.length / players.length}
        </h4>
      </div>
      <PlayerName>{currentPlayer ? currentPlayer.name : "test"}</PlayerName>
      <H2>{currentPlayer.score}</H2>
    </PlayerHeader>
  );
}
