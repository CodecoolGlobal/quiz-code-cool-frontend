import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import {
  ContentContainer,
  H3,
  Button,
  ResultTable,
  TableContainer
} from "../style/MyStyle";

export default function Result(props) {
  const players = useContext(PlayerContext)[0];

  const handleRestart = () => {
    props.history.push("/");
  };

  return (
    <ContentContainer>
      <H3>Game over!</H3>
      Results
      <TableContainer>
        <ResultTable>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {players.map(player => (
            <tr>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </ResultTable>
      </TableContainer>
      <Button type='button' id='restart' onClick={handleRestart}>
        New Game
      </Button>
    </ContentContainer>
  );
}
