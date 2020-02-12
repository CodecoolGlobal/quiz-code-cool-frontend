import React, { useContext } from "react";
import { StarterFormContext } from "../../context/StarterFormContext";
import { Select } from "../../style/MyStyle";

export default function TypeInput() {
  const setType = useContext(StarterFormContext).typeInput[1];
  const TYPES = useContext(StarterFormContext).TYPES;

  const handleType = e => {
    setType(e.target.value);
  };

  return (
    <div>
      <label htmlFor='type'>Type: </label>
      <Select id='type' name='type' onChange={handleType}>
        {Object.entries(TYPES).map((entry, index) => (
          <option value={entry[1]} key={index}>
            {entry[0]}
          </option>
        ))}
      </Select>
    </div>
  );
}
