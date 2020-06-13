import axios from "api/config";

const CATEGORY_URL = process.env.REACT_APP_USER_URL;

export const api_getUser = async (id) => {
    const response = await axios.get(`${CATEGORY_URL}/${id}`, {
      withCredentials: true,
    });
    return response.data;
  };

  export const api_getUsers = async () => {
    const response = await axios.get(`${CATEGORY_URL}`, {
      withCredentials: true,
    });
    return response.data;
  };