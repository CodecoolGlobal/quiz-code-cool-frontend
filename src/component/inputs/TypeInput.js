import React, { useContext } from "react";
import { RandomQuizContext } from "context/RandomQuizContext";
import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function TypeInput() {
  const setType = useContext(RandomQuizContext).typeInput[1];
  const TYPES = useContext(RandomQuizContext).TYPES;

  const handleType = e => {
    setType(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='type'>Type</InputLabel>
      <Select id='type' name='type' onChange={handleType}>
        {Object.entries(TYPES).map((entry, index) => (
          <option value={entry[1]} key={index}>
            {entry[0]}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
