import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "context/CategoryContext";
import { api_getCategories } from "api/apiConnection";
import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function CategoryInput(props) {
  const [allCategories, setAllCategories] = useState([]);

  const {
    DEFAULT_CATEGORY,
    categoryInput,
  } = useContext(CategoryContext);

  const setSelectedCategoryId = categoryInput[1];

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const categories = await api_getCategories();
      setAllCategories(categories);
    } catch(error) {
      alert(`Categories failed to load.\n${error}`)
    }
  }

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
