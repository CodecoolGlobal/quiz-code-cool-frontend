import React, { useContext, createContext, useCallback } from "react";
import { CategoryContext } from "context/CategoryContext";
import { TypeContext } from "context/TypeContext";
import { UsersContext } from "./UsersContext";
import { StatusContext } from "./StatusContext";


export const RestoreInputsContext = createContext();

export const RestoreInputsProvider = props => {
  const { clearSelectedCategory } = useContext(CategoryContext);
  const { clearSelectedType } = useContext(TypeContext);
  const { clearSelectedUser } = useContext(UsersContext);
  const setSelectedStatus = useContext(StatusContext)[1];


  const clearTypeCategoryInputs = useCallback(() => {
    clearSelectedCategory();
    clearSelectedType();
  }, []);

  const clearQuestionsFilterInputs = useCallback(() => {
    clearSelectedCategory();
    clearSelectedType();
    clearSelectedUser();
    setSelectedStatus("");
  }, [])

  return (
    <RestoreInputsContext.Provider value={{ clearTypeCategoryInputs, clearQuestionsFilterInputs }}>
      {props.children}
    </RestoreInputsContext.Provider>
  );
};
