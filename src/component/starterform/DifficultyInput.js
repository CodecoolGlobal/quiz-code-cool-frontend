import React, { useContext } from "react";
import { StarterFormContext } from "../../context/StarterFormContext";
import { Select, InputItem, InputLabel } from "../../style/MyStyle";

export default function DifficultyInput() {
  const setDifficulty = useContext(StarterFormContext).difficultyInput[1];
  const DIFFICULTIES = useContext(StarterFormContext).DIFFICULTIES;

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  return (
    <InputItem width='50'>
      <InputLabel htmlFor='difficulty'>Difficulty</InputLabel>
      <Select id='difficulty' name='difficulty' onChange={handleDifficulty}>
        {DIFFICULTIES.map((difficulty, index) => (
          <option value={difficulty} key={index}>
            {difficulty}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
