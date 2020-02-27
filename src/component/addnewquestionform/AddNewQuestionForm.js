import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import CategoryInput from "./CategoryInput";
import TypeInput from "./TypeInput";
import QuestionInput from "./QuestionInput";
import MultipleAnswers from "./MultipleAnswers";
import TrueFalseAnswers from "./TrueFalseAnswers";

import { AddNewQuestionFormContext } from "../../context/AddNewQuestionFormContext";

import Question from "../../context/Question";

import { ContentContainer, H3, Button } from "../../style/MyStyle";

export default function AddNewQuestionForm(props) {
  const [answerComponent, setAnswerComponent] = useState(<div></div>);

  const {
    BASE_URL_FOR_POST_REQUEST,
    categoryInput,
    typeInput,
    questionInput,
    correctAnswerInput,
    incorrectAnswersInput
  } = useContext(AddNewQuestionFormContext);

  useEffect(() => {
    switch (typeInput[0]) {
      case "boolean":
        setAnswerComponent(<TrueFalseAnswers />);
        break;
      case "multiple":
        setAnswerComponent(<MultipleAnswers />);
        break;
      default:
        setAnswerComponent(<div></div>);
    }
  }, [typeInput]);

  const submit = e => {
    e.preventDefault();
    
    if (categoryInput[0].name === "" || 
        typeInput[0].length === 0 ||
        questionInput[0] === "" ||
        correctAnswerInput[0] === "" ||
        incorrectAnswersInput[0].length === 0 || 
        incorrectAnswersInput[0].includes(undefined)) {
      alert("Please fill out all the fields!");
      return;
    }

    const newQuestion = new Question(
      categoryInput[0],
      typeInput[0],
      questionInput[0],
      correctAnswerInput[0],
      incorrectAnswersInput[0]
    );

    const questionUrl = BASE_URL_FOR_POST_REQUEST;
    axios({
      method: "post",
      url: questionUrl,
      data: newQuestion
    });
  };

  return (
    <ContentContainer>
      <H3>Add new question</H3>
      <CategoryInput />
      <TypeInput />
      <QuestionInput />
      {answerComponent}
      <Button onClick={submit}>Save question</Button>
    </ContentContainer>
  );
}
