import React, { useState, createContext } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = props => {

  const CATEGORY_URL = process.env.REACT_APP_CATEGORY_URL;
  const DEFAULT_CATEGORY = {
    id: "0",
    name: "Any Category"
  };
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    DEFAULT_CATEGORY.id
  );

  const getAllCategories = () => {
    axios.get(CATEGORY_URL).then(res => {
      setCategories([DEFAULT_CATEGORY, ...res.data]);
    });
  };

  return (
    <CategoryContext.Provider
      value={{
        getAllCategories,
        categories,
        categoryInput: [selectedCategoryId, setSelectedCategoryId]
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
