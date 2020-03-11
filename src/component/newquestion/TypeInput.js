import React, { useContext } from "react";
import { NewQuestionFormContext } from "context/NewQuestionFormContext";
import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function TypeInput() {
  const setType = useContext(NewQuestionFormContext).typeInput[1];
  const TYPES = useContext(NewQuestionFormContext).TYPES;

  const handleType = e => {
    setType(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='type'>Type</InputLabel>
      <Select id='type' name='type' onChange={handleType}>
        <option disabled defaultValue='' selected>
          -- Select Type --
        </option>
        {Object.entries(TYPES).map((entry, index) => (
          <option value={entry[1]} key={index}>
            {entry[0]}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
