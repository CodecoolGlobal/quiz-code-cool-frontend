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

  const fetchAllCategories = () => {
    axios.get(CATEGORY_URL).then(res => {
      setAllCategories([...res.data]);
    });
  };

  return (
    <CategoryContext.Provider
      value={{
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
