import React, { useState, createContext } from "react";
import Player from "./Player";

export const PlayerContext = createContext();

export const PlayerProvider = props => {
  const [players, setPlayers] = useState([
    new Player("Player1"),
    new Player("Player2")
  ]);

  return (
    <PlayerContext.Provider value={[players, setPlayers]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
