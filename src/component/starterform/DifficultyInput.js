import React, { useContext } from "react";
import { StarterFormContext } from "../../context/StarterFormContext";

export default function DifficultyInput() {
  const setDifficulty = useContext(StarterFormContext).difficultyInput[1];
  const DIFFICULTIES = useContext(StarterFormContext).DIFFICULTIES;

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  return (
    <div>
      <label htmlFor='difficulty'>Difficulty: </label>
      <select id='difficulty' name='difficulty' onChange={handleDifficulty}>
        {DIFFICULTIES.map((difficulty, index) => (
          <option value={difficulty} key={index}>
            {difficulty}
          </option>
        ))}
      </select>
    </div>
  );
}
