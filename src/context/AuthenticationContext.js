import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = props => {
  const [players, setPlayers] = useState([]);

  return (
    <AuthenticationContext.Provider value={[players, setPlayers]}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
