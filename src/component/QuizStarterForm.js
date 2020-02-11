import React, { useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function QuizStarterForm() {
  const [name, setName] = useState([]);
  const [players, setPlayers] = useContext(PlayerContext);

  const saveInputs = e => {
    e.preventDefault();
    for (let i = 0; i < players.length; i++) {
      let playerName = this.elements[i];
      setName([...name], playerName);
    }
  };

  return (
    <div>
      <h1>Loading Quiz...</h1>
      <form onSubmit={saveInputs}>
        {players.map((player, index) => (
          <div>
            <label for={player[0].name}>Player {index + 1} name: </label>
            <input
              name={index}
              id={player[0].name}
              type="text"
              placeholder={player[0].name}
              required
            ></input>
          </div>
        ))}
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
