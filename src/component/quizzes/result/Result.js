import React, { useContext } from "react";
import { PlayerContext } from "context/PlayerContext";
import { QuizContext } from "context/QuizContext";

import {
  ContentContainer,
  H2,
  H3,
  Button,
  Table,
  FlexContainer,
  TableRow,
  ResultTableData,
  TableHead
} from "style/js/MyStyle";
import ColorsForPlayers from "style/js/PlayerColors";

export default function Result(props) {
  const players = useContext(PlayerContext)[0];
  const currentQuizUrl = useContext(QuizContext).currentQuizUrlState[0];

  const handleRestart = () => {
    const route = currentQuizUrl;
    props.history.push(route);
  };

  return (
    <ContentContainer>
      <H3>Game over!</H3>
      <H2>Results</H2>
      <FlexContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <TableRow playerTheme={ColorsForPlayers[index]} key={index}>
                <ResultTableData>{player.name}</ResultTableData>
                <ResultTableData>{player.score}</ResultTableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </FlexContainer>
      <Button type='button' id='restart' onClick={handleRestart}>
        New Game
      </Button>
    </ContentContainer>
  );
}
