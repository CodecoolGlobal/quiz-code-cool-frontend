import React, { useContext } from "react";
import { RandomQuizContext } from "context/RandomQuizContext";

import { InputItem, InputLabel, TextInput } from "style/js/MyStyle";

export default function PlayerNameInput() {
  const { modifyName, playerNumberState } = useContext(RandomQuizContext);

  const playerNumber = playerNumberState[0];

  const handlePlayerName = e => {
    const index = e.target.name;
    const value = e.target.value;
    modifyName(index, value);
  };

  const createPlayerInput = n => {
    let inputs = [];
    for (let i = 0; i < n; i++) {
      inputs.push(
        <InputItem key={i}>
          <InputLabel htmlFor={i}>Player {i + 1}</InputLabel>
          <TextInput
            name={i}
            id={i}
            type='text'
            placeholder={`Player ${i + 1}`}
            maxLength='30'
            required
            onKeyUp={handlePlayerName}
          ></TextInput>
        </InputItem>
      );
    }
    return inputs;
  };

  return <div>{createPlayerInput(playerNumber)}</div>;
}
