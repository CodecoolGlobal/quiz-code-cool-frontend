import React, { useContext } from "react";
import { PlayerContext } from "context/PlayerContext";
import { QuizContext } from "context/QuizContext";

import {
  ThinnerContentContainer,
  H2,
  H3,
  Button,
  Table,
  OverflowFlexContainer,
  TableRow,
  TableData,
  Th,
  Thead,
  TBody
} from "style/js/CommonStyles";
import ColorsForPlayers from "style/js/PlayerColors";

export default function Result(props) {
  const players = useContext(PlayerContext)[0];
  const currentQuizUrl = useContext(QuizContext).currentQuizUrlState[0];

  const handleRestart = () => {
    const route = currentQuizUrl;
    props.history.push(route);
  };

  return (
    <ThinnerContentContainer>
      <H3>Game over!</H3>
      <H2>Results</H2>
      <OverflowFlexContainer>
        <Table>
          <Thead>
            <TableRow>
              <Th>Name</Th>
              <Th>Score</Th>
            </TableRow>
          </Thead>
          <TBody>
            {players.map((player, index) => (
              <TableRow playerTheme={ColorsForPlayers[index]} key={index}>
                <TableData>{player.name}</TableData>
                <TableData>{player.score}</TableData>
              </TableRow>
            ))}
          </TBody>
        </Table>
      </OverflowFlexContainer>
      <Button type='button' id='restart' onClick={handleRestart}>
        New Game
      </Button>
    </ThinnerContentContainer>
  );
}
