import axios from "axios";
import Question from "context/Question";

const CUSTOM_QUIZ_URL = process.env.REACT_APP_CUSTOM_QUIZ_URL;

export const api_getCustomQuizQuestions = async (id) => {
    let response = await axios.get(`${CUSTOM_QUIZ_URL}/${id}/questions`, {
      withCredentials: true,
    });
    if (response.data !== "") {
      return response.data.map((q) => new Question(q));
    }
    return [];
  };
  
  export const api_getCustomQuizzes = async () => {
    const response = await axios.get(CUSTOM_QUIZ_URL, {
      withCredentials: true,
    });
    return response.data;
  };

  export const api_getCustomQuizzesByUserId = async (id) => {
    const response = await axios.get(`${CUSTOM_QUIZ_URL}/${id}`, {
      withCredentials: true,
    });
    return response.data;
  };
  
  export const api_postNewQuiz = async (quizData) => {
    await axios.post(CUSTOM_QUIZ_URL, quizData, { withCredentials: true });
  };