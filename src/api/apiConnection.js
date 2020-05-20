import axios from "axios";
import Question from "context/Question";

export const api_getQuestions = async (queryString) => {
  let response = await axios.get(process.env.REACT_APP_QUESTIONS_BASE_URL + queryString, { withCredentials: true })
  if (response.data !== "") {
    return response.data.map(q => new Question(q));
  }
  return [];
}

export const api_deleteQuestion = async (id) => {
  let response = await axios.delete(`${process.env.REACT_APP_QUESTIONS_BASE_URL}/${id}`, { withCredentials: true })
  return response;
}

