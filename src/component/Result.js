import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { ContentContainer, H3, Button } from "../style/MyStyle";

export default function Result(props) {
  const players = useContext(PlayerContext)[0];

  const handleRestart = () => {
    props.history.push("/");
  };

  return (
    <ContentContainer>
      <H3>Game over!</H3>
      Results
      {players.map(player => (
        <div>
          <p>
            {player.name}
            {player.score}
          </p>
        </div>
      ))}
      <Button type='button' id='restart' onClick={handleRestart}>
        New Game
      </Button>
    </ContentContainer>
  );
}
