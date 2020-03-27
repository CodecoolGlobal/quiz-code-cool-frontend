import React, { useState, createContext } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = props => {
  const CATEGORY_URL = process.env.REACT_APP_CATEGORY_URL;
  const DEFAULT_CATEGORY = {
    id: "0",
    name: "Any Category"
  };
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    DEFAULT_CATEGORY.id
  );

  console.log("CategoryProvider INITIALIZED");

  const fetchAllCategories = () => {
    axios.get(CATEGORY_URL, { withCredentials: true}).then(res => {
      setAllCategories([...res.data]);
    });
  }

  const clearSelectedCategory = () => {
    setSelectedCategoryId(DEFAULT_CATEGORY.id);
  };

  return (
    <CategoryContext.Provider
      value={{
        clearSelectedCategory,
        fetchAllCategories,
        DEFAULT_CATEGORY,
        allCategories,
        categoryInput: [selectedCategoryId, setSelectedCategoryId]
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
