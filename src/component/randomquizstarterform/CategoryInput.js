import React, { useContext, useEffect } from "react";
import { CategoryContext } from "context/CategoryContext";
import { RandomQuizContext } from "context/RandomQuizContext";

import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function CategoryInput() {
  const setSelectedCategoryId = useContext(RandomQuizContext).categoryInput[1];
  const { getAllCategories, categories } = useContext(CategoryContext);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const handleCategory = e => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor="category">Category</InputLabel>
      <Select id="category" name="category" onChange={handleCategory}>
        {categories.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
