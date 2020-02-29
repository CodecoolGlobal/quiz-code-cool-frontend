import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { QuestionContext } from "../../context/QuestionContext";

import {
  ContentContainer,
  H2,
  H3,
  Button,
  Table,
  TableContainer,
  ResultTableRow,
  ResultTableData,
  ResultTableHead
} from "../../style/MyStyle";
import ColorsForPlayers from "../../style/PlayerColors";

export default function Result(props) {
  const players = useContext(PlayerContext)[0];
  const quizMode = useContext(QuestionContext).quizModeState[0];

  const getRestartGameRout = () => {
    switch (quizMode) {
      case "Random":
        return "/random-quiz";
      case "Custom":
        return "/custom-quiz";
      default:
        break;
    }
  };

  const handleRestart = () => {
    const route = getRestartGameRout();
    props.history.push(route);
  };

  return (
    <ContentContainer>
      <H3>Game over!</H3>
      <H2>Results</H2>
      <TableContainer>
        <Table>
          <thead>
            <ResultTableRow>
              <ResultTableHead>Name</ResultTableHead>
              <ResultTableHead>Score</ResultTableHead>
            </ResultTableRow>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <ResultTableRow playerTheme={ColorsForPlayers[index]} key={index}>
                <ResultTableData>{player.name}</ResultTableData>
                <ResultTableData>{player.score}</ResultTableData>
              </ResultTableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Button type='button' id='restart' onClick={handleRestart}>
        New Game
      </Button>
    </ContentContainer>
  );
}
