import React, { useContext, useEffect } from "react";
import { CategoryContext } from "context/CategoryContext";

import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function CategoryInput(props) {
  const {
    DEFAULT_CATEGORY,
    allCategories,
    categoryInput,
    fetchAllCategories
  } = useContext(CategoryContext);

  const setSelectedCategoryId = categoryInput[1];

  useEffect(() => {
    fetchAllCategories();
    console.log("fetchCategories");

  }, [fetchAllCategories]);

  const handleCategory = e => {
    setSelectedCategoryId(e.target.value);
  };

  const getDefaultCategory = () => {
    switch (props.mode) {
      case "WithoutAnyCategory":
        return (
          <option disabled defaultValue='' selected>
            -- Select Category --
          </option>
        );
      default:
        return (
          <option value={DEFAULT_CATEGORY.id} key={DEFAULT_CATEGORY.id}>
            {DEFAULT_CATEGORY.name}
          </option>
        );
    }
  };

  return (
    <InputItem>
      <InputLabel htmlFor='category'>Category</InputLabel>
      <Select id='category' name='category' onChange={handleCategory}>
        {getDefaultCategory()}
        {allCategories.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
