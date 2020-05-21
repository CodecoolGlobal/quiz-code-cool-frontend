import React, { useContext } from "react";

import { PlayerContext } from "context/PlayerContext";
import { QuizContext } from "context/QuizContext";

import { PlayerName, H2, PlayerHeader, QuestionsImage } from "style/js/MyStyle";
import ColorsForPlayers from "style/js/PlayerColors";
import questionMark from "style/img/question-mark.png";

export default function PlayerData(props) {
  const players = useContext(PlayerContext)[0];
  const currentPlayer = players[props.currentPlayerIndex];

  const { allQuestionsState, questionNumberState } = useContext(
    QuizContext
  );

  const questionNumber = questionNumberState[0];
  const questions = allQuestionsState[0];

  return ( currentPlayer ? (
    <PlayerHeader playerTheme={ColorsForPlayers[props.currentPlayerIndex]}>
      <div>
        <QuestionsImage src={questionMark} alt='question_mark'></QuestionsImage>
        <h4>
          {questionNumber} / {questions.length / players.length}
        </h4>
      </div>
      <PlayerName>{ currentPlayer.name }</PlayerName>
      <H2>{currentPlayer.score}</H2>
    </PlayerHeader> ) : (<React.Fragment></React.Fragment>)
  );
}
