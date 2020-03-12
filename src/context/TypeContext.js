import React, { useState, createContext } from "react";
import axios from "axios";

export const TypeContext = createContext();

export const TypeProvider = props => {
  const TYPES_URL = process.env.REACT_APP_TYPES_URL;
  const ANY_TYPE = "Any Type";
  const [allTypes, setAllTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const fetchTypes = () => {
    axios.get(TYPES_URL).then(res => {
      setAllTypes([...res.data]);
    });
  };

  const typesMap = {
    "Any Type": "Any Type",
    MULTIPLE: "Multiple Choice",
    BOOLEAN: "True / False"
  };

  return (
    <TypeContext.Provider
      value={{
        selectedTypeInput: [selectedType, setSelectedType],
        fetchAllTypes: fetchTypes,
        ANY_TYPE,
        allTypes,
        typesMap
      }}
    >
      {props.children}
    </TypeContext.Provider>
  );
};
