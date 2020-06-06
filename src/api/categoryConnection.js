import axios from "axios";

const CATEGORY_URL = process.env.REACT_APP_CATEGORY_URL;

export const api_getCategories = async () => {
  const response = await axios.get(CATEGORY_URL, { withCredentials: true });
  return response.data;
};
