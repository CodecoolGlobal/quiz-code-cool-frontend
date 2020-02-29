import React, { useContext, useEffect } from "react";
import { RandomQuizContext } from "context/RandomQuizContext";

import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function CategoryInput() {
  const { categoryInput, getAllCategories, categories } = useContext(
    RandomQuizContext
  );

  const setSelectedCategoryId = categoryInput[1];

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const handleCategory = e => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='category'>Category</InputLabel>
      <Select id='category' name='category' onChange={handleCategory}>
        {categories.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
