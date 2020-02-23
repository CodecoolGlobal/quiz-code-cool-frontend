import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { H1, PlayerHeader, QuestionsImage } from "../../style/MyStyle";
import ColorsForPlayers from "../../style/PlayerColors";

import questionMark from "../../style/question-mark.png";

export default function PlayerData(props) {
  const players = useContext(PlayerContext)[0];
  const currentPlayer = players[props.currentPlayerIndex];

  return (
    <PlayerHeader playerTheme={ColorsForPlayers[props.currentPlayerIndex]}>
      <QuestionsImage src={questionMark} alt='question_mark'></QuestionsImage>
      <H1>{`Player: ${currentPlayer.name}`}</H1>
      <p>{`Score: ${currentPlayer.score}`}</p>
    </PlayerHeader>
  );
}
