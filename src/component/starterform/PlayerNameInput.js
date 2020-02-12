import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { StarterFormContext } from "../../context/StarterFormContext";

import { TextInput } from "../../style/MyStyle";

export default function PlayerNameInput() {
  const players = useContext(PlayerContext)[0];
  const [names, setNames] = useContext(StarterFormContext).nameInputs;

  const handlePlayerName = e => {
    let currentNames = [...names];
    currentNames[e.target.name] = e.target.value;
    setNames(currentNames);
  };

  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>
          <label htmlFor={player.name}>Player {index + 1} name: </label>
          <TextInput
            name={index}
            id={player.name}
            type='text'
            placeholder={player.name}
            required
            onKeyUp={handlePlayerName}
          ></TextInput>
        </div>
      ))}
    </div>
  );
}
