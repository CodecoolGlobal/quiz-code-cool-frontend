import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { ContentContainer, H3 } from "../style/MyStyle";

export default function Result() {
  const players = useContext(PlayerContext)[0];

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
    </ContentContainer>
  );
}
