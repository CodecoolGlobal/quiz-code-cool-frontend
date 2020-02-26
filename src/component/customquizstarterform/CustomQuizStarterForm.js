import React, { useContext } from "react";
import axios from "axios";

import { QuestionContext } from "../../context/QuestionContext";
import { CustomQuizContext } from "../../context/CustomQuizContext";

import CustomQuizInput from "./CustomQuizInput";
import Question from "../../context/Question";

import { ContentContainer, H3, Button } from "../../style/MyStyle";

export default function CustomQuizStarterForm(props) {
  const setQuestions = useContext(QuestionContext)[1];
  const selectedCustomQuizId = useContext(CustomQuizContext)
    .selectedCustomQuiz[0];
  const BASE_URL_FOR_CUSTOM_QUIZ = useContext(CustomQuizContext)
    .BASE_URL_FOR_CUSTOM_QUIZ;

  const submit = e => {
    axios
      .get(BASE_URL_FOR_CUSTOM_QUIZ + `/${selectedCustomQuizId}`)
      .then(resp => {
        if (resp.data === []) {
          alert("Error happened. Please try again.");
        } else {
          resp.data.map(questionData =>
            setQuestions(questions => [
              ...questions,
              new Question(
                questionData.category.name,
                questionData.type,
                questionData.difficulty,
                questionData.question,
                questionData.correct_answer,
                questionData.incorrect_answers
              )
            ])
          );
          props.history.push("/quiz");
        }
      });
  };

  return (
    <ContentContainer>
      <H3>New Custom Quiz</H3>
      <CustomQuizInput />
      <Button onClick={submit}>Start Quiz</Button>
    </ContentContainer>
  );
}
