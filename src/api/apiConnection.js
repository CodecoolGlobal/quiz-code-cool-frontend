import axios from "axios";
import Question from "context/Question";

const QUESTIONS_BASE_URL = process.env.REACT_APP_QUESTIONS_BASE_URL;
const CUSTOM_QUIZ_BASE_URL = process.env.REACT_APP_CUSTOM_QUIZ_BASE_URL;

export const api_getQuestions = async (queryString) => {
  let response = await axios.get(QUESTIONS_BASE_URL + queryString, { withCredentials: true })
  if (response.data !== "") {
    return response.data.map(q => new Question(q));
  }
  return [];
}

export const api_getCustomQuizQuestions = async (id) => {
  let response = await axios.get(`${CUSTOM_QUIZ_BASE_URL}/${id}`, { withCredentials: true })
  if (response.data !== "") {
    return response.data.map(q => new Question(q));
  }
  return [];
}

export const api_deleteQuestion = async (id) => {
  await axios.delete(`${QUESTIONS_BASE_URL}/${id}`, { withCredentials: true })
}

export const api_getQuestion = async (id) => {
  const response = await axios.get(`${QUESTIONS_BASE_URL}/${id}`, { withCredentials: true });
  return response.data;
}

