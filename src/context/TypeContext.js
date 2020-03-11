import React, { useState, createContext } from "react";
import axios from "axios";

export const TypeContext = createContext();

export const TypeProvider = props => {
  const TYPES_URL = process.env.REACT_APP_TYPES_URL;
  const ANY_TYPE = "Any Type";
  const [allTypes, setAllTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const fetchAllTypes = () => {
    axios.get(TYPES_URL).then(res => {
      setAllTypes([...res.data]);
    });
  };

  return (
    <TypeContext.Provider
      value={{
        selectedTypeInput: [selectedType, setSelectedType],
        fetchAllTypes,
        ANY_TYPE,
        allTypes
      }}
    >
      {props.children}
    </TypeContext.Provider>
  );
};
