import React, { useState, createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = props => {
  const DEFAULT_CATEGORY = {
    id: "0",
    name: "Any Category"
  };
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    DEFAULT_CATEGORY.id
  );

  const clearSelectedCategory = () => {
    setSelectedCategoryId(DEFAULT_CATEGORY.id);
  };

  return (
    <CategoryContext.Provider
      value={{
        clearSelectedCategory,
        DEFAULT_CATEGORY,
        categoryInput: [selectedCategoryId, setSelectedCategoryId]
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
