import axios from "axios";
import Question from "context/Question";

const QUESTIONS_BASE_URL = process.env.REACT_APP_QUESTIONS_BASE_URL;
const CUSTOM_QUIZ_BASE_URL = process.env.REACT_APP_CUSTOM_QUIZ_BASE_URL;
const AUTH_URL = process.env.REACT_APP_AUTH_URL;

export const api_getQuestions = async (queryString) => {
  let response = await axios.get(QUESTIONS_BASE_URL + queryString, {
    withCredentials: true,
  });
  if (response.data !== "") {
    return response.data.map((q) => new Question(q));
  }
  return [];
};

export const api_getCustomQuizQuestions = async (id) => {
  let response = await axios.get(`${CUSTOM_QUIZ_BASE_URL}/${id}`, {
    withCredentials: true,
  });
  if (response.data !== "") {
    return response.data.map((q) => new Question(q));
  }
  return [];
};

export const api_deleteQuestion = async (id) => {
  await axios.delete(`${QUESTIONS_BASE_URL}/${id}`, { withCredentials: true });
};

export const api_getQuestion = async (id) => {
  const response = await axios.get(`${QUESTIONS_BASE_URL}/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const api_validateQuestion = async (id) => {
  await axios({
    method: "put",
    url: `${QUESTIONS_BASE_URL}/${id}`,
    withCredentials: true,
  });
};

export const api_signUp = async (data) => {
  const response = await axios.post(`${AUTH_URL}/sign-up`, data);
  return response.data;
};

export const api_signOut = async () => {
  await axios({
    method: "post",
    url: `${AUTH_URL}/sign-out`,
    withCredentials: true,
  });
};

export const api_signIn = async (data) => {
  const response = axios.post(`${AUTH_URL}/sign-in`, data, {withCredentials: true});
  return await response.data;
}