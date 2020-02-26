import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AddNewQuestionFormContext } from "../../context/AddNewQuestionFormContext";

import { Select, InputItem, InputLabel } from "../../style/MyStyle";

export default function CategoryInput() {
  const [categories, setCategories] = useState([]);
  const setSelectedCategoryId = useContext(AddNewQuestionFormContext)
    .categoryInput[1];
  const CATEGORY_URL = useContext(AddNewQuestionFormContext).CATEGORY_URL;

  useEffect(() => {
    axios.get(CATEGORY_URL).then(res => {
      setCategories(res.data);
    });
  }, [CATEGORY_URL]);

  const handleCategory = e => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor="category">Category</InputLabel>
      <Select id="category" name="category" onChange={handleCategory}>
        {[DEFAULT_CATEGORY, ...categories].map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
