import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import {
  ContentContainer,
  H2,
  H3,
  Button,
  ResultTable,
  TableContainer,
  ResultTableRow,
  ResultTableData,
  ResultTableHead
} from "../style/MyStyle";

export default function Result(props) {
  const [players, setPlayers] = useContext(PlayerContext);

  const handleRestart = () => {
    setPlayers([]);
    props.history.push("/");
  };

  return (
    <ContentContainer>
      <H3>Game over!</H3>
      <H2>Results</H2>

      <TableContainer>
        <ResultTable>
          <ResultTableRow>
            <ResultTableHead>Name</ResultTableHead>
            <ResultTableHead>Score</ResultTableHead>
          </ResultTableRow>
          {players.map(player => (
            <ResultTableRow>
              <ResultTableData>{player.name}</ResultTableData>
              <ResultTableData>{player.score}</ResultTableData>
            </ResultTableRow>
          ))}
        </ResultTable>
      </TableContainer>
      <Button type='button' id='restart' onClick={handleRestart}>
        New Game
      </Button>
    </ContentContainer>
  );
}
