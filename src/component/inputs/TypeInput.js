import React, { useContext, useEffect } from "react";
import { TypeContext } from "context/TypeContext";
import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function TypeInput(props) {
  const {
    selectedTypeInput,
    ANY_TYPE,
    allTypes,
    typesMap,
    fetchAllTypes
  } = useContext(TypeContext);
  const setSelectedType = selectedTypeInput[1];

  useEffect(() => {
    fetchAllTypes();
  }, [fetchAllTypes]);

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
        {allTypes.map((type, index) => (
          <option value={type} key={index}>
            {typesMap[type]}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
