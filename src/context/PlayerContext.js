import React, { useState, createContext } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = props => {
  const [players, setPlayers] = useState([]);

  return (
    <PlayerContext.Provider value={[players, setPlayers]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
