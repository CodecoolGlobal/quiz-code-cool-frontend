import axios from "axios";
import Question from "context/Question";

const QUESTIONS_URL = process.env.REACT_APP_QUESTIONS_URL;

export const api_getQuestions = async (queryString) => {
    console.log(queryString);
    let response = await axios.get(QUESTIONS_URL + queryString, {
      withCredentials: true,
    });
    if (response.data !== "") {
      return response.data.map((q) => new Question(q));
    }
    return [];
  };
  
  export const api_getQuestion = async (id) => {
    const response = await axios.get(`${QUESTIONS_URL}/${id}`, {
      withCredentials: true,
    });
    return response.data;
  };
  
  export const api_validateQuestion = async (id) => {
    await axios({
      method: "put",
      url: `${QUESTIONS_URL}/${id}`,
      withCredentials: true,
    });
  };
  
  export const api_postNewQuestion = async (question) => {
    await axios.post(QUESTIONS_URL, question, { withCredentials: true });
  };
  
  export const api_deleteQuestion = async (id) => {
    await axios.delete(`${QUESTIONS_URL}/${id}`, { withCredentials: true });
  };
  
