import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { StarterFormContext } from "../../context/StarterFormContext";

import { InputRow, Select, InputItem, InputLabel } from "../../style/MyStyle";

export default function CategoryInput() {
  const [categories, setCategories] = useState([]);
  const setSelectedCategoryId = useContext(StarterFormContext).categoryInput[1];
  const CATEGORY_URL = useContext(StarterFormContext).CATEGORY_URL;
  const DEFAULT_CATEGORY = useContext(StarterFormContext).DEFAULT_CATEGORY;

  useEffect(() => {
    axios.get(CATEGORY_URL).then(res => {
      setCategories(res.data.trivia_categories);
    });
  }, [CATEGORY_URL]);

  const handleCategory = e => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <InputRow>
      <InputItem width='50'>
        <InputLabel htmlFor='category'>Category</InputLabel>
        <Select id='category' name='category' onChange={handleCategory}>
          {[DEFAULT_CATEGORY, ...categories].map(category => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </InputItem>
    </InputRow>
  );
}
