import React from "react";
import { H1, PlayerHeader, QuestionsImage } from "../style/MyStyle";
import question_mark from "../style/question-mark.png";

export default function PlayerData(props) {
  return (
    <PlayerHeader>
      <QuestionsImage src={question_mark} alt='question_mark'></QuestionsImage>
      <H1>{`Player: ${props.actualPlayer.name}`}</H1>
      <p>{`Score: ${props.actualPlayer.score}`}</p>
    </PlayerHeader>
  );
}
