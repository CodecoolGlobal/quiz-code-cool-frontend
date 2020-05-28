import axios from "axios";

const AUTH_URL = process.env.REACT_APP_AUTH_URL;

export const api_signUp = async (data) => {
  const response = await axios.post(`${AUTH_URL}/sign-up`, data);
  console.log(response.data)
  return response.data;
};

export const api_signIn = async (data) => {
  const response = await axios.post(`${AUTH_URL}/sign-in`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const api_signOut = async () => {
  await axios({
    method: "post",
    url: `${AUTH_URL}/sign-out`,
    withCredentials: true,
  });
};
