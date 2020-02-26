import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { RandomStarterFormContext } from "../../context/RandomStarterFormContext";

import { Select, InputItem, InputLabel } from "../../style/MyStyle";

export default function CategoryInput() {
  const [categories, setCategories] = useState([]);
  const setSelectedCategoryId = useContext(RandomStarterFormContext)
    .categoryInput[1];
  const CATEGORY_URL = useContext(RandomStarterFormContext).CATEGORY_URL;
  const DEFAULT_CATEGORY = useContext(RandomStarterFormContext)
    .DEFAULT_CATEGORY;

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
      <InputLabel htmlFor='category'>Category</InputLabel>
      <Select id='category' name='category' onChange={handleCategory}>
        {[DEFAULT_CATEGORY, ...categories].map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
