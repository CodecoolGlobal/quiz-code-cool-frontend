import React, { useContext } from "react";
import { StarterFormContext } from "../../context/StarterFormContext";
import { Select } from "../../style/MyStyle";

export default function DifficultyInput() {
  const setDifficulty = useContext(StarterFormContext).difficultyInput[1];
  const DIFFICULTIES = useContext(StarterFormContext).DIFFICULTIES;

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  return (
    <div>
      <label htmlFor='difficulty'>Difficulty: </label>
      <Select id='difficulty' name='difficulty' onChange={handleDifficulty}>
        {DIFFICULTIES.map((difficulty, index) => (
          <option value={difficulty} key={index}>
            {difficulty}
          </option>
        ))}
      </Select>
    </div>
  );
}
