import React, { useContext } from "react";
import { TypeContext } from "context/TypeContext";
import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function TypeInput(props) {
  const { selectedTypeInput, ANY_TYPE, ALL_TYPES, typesMap } = useContext(
    TypeContext
  );
  const setSelectedType = selectedTypeInput[1];

  const handleType = e => {
    setSelectedType(e.target.value);
  };

  const getDefaultType = () => {
    switch (props.mode) {
      case "WithoutAnyType":
        return (
          <option disabled defaultValue='' selected>
            -- Select Type --
          </option>
        );
      default:
        return (
          <option value={ANY_TYPE} key={0}>
            {typesMap[ANY_TYPE]}
          </option>
        );
    }
  };

  return (
    <InputItem>
      <InputLabel htmlFor='type'>Type</InputLabel>
      <Select id='type' name='type' onChange={handleType}>
        {getDefaultType()}
        {ALL_TYPES.map((type, index) => (
          <option value={type} key={index}>
            {typesMap[type]}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
