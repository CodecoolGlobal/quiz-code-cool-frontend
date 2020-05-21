import React, { useContext, createContext, useCallback } from "react";
import { CategoryContext } from "context/CategoryContext";
import { TypeContext } from "context/TypeContext";

export const RestoreFiltersContext = createContext();

export const RestoreFiltersProvider = props => {
  const { clearSelectedCategory } = useContext(CategoryContext);
  const { clearSelectedType } = useContext(TypeContext);

  const clearFilters = useCallback(() => {
    clearSelectedCategory();
    clearSelectedType();
  }, [clearSelectedCategory, clearSelectedType]);

  return (
    <RestoreFiltersContext.Provider value={{ clearFilters }}>
      {props.children}
    </RestoreFiltersContext.Provider>
  );
};
