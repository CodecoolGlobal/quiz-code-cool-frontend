import React, { useContext, useEffect } from "react";
import { CategoryContext } from "context/CategoryContext";
import { AddNewQuestionFormContext } from "context/NewQuestionFormContext";

import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function CategoryInput() {
  const setSelectedCategoryId = useContext(AddNewQuestionFormContext)
    .categoryInput[1];
  const { getAllCategories, categories } = useContext(CategoryContext);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const handleCategory = e => {
    setSelectedCategoryId(JSON.parse(e.target.value));
  };

  return (
    <InputItem>
      <InputLabel htmlFor='category'>Category</InputLabel>
      <Select id='category' name='category' onChange={handleCategory}>
        <option disabled defaultValue='' selected>
          -- Select Category --
        </option>
        {categories.map(category => (
          <option value={JSON.stringify(category)} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
