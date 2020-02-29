import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import CategoryInput from "component/addnewquestionform/CategoryInput";
import TypeInput from "component/addnewquestionform/TypeInput";
import QuestionInput from "component/addnewquestionform/QuestionInput";
import MultipleAnswers from "component/addnewquestionform/MultipleAnswers";
import TrueFalseAnswers from "component/addnewquestionform/TrueFalseAnswers";

import Question from "context/Question";
import { AddNewQuestionFormContext } from "context/AddNewQuestionFormContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function AddNewQuestionForm(props) {
  const [answerComponent, setAnswerComponent] = useState(<div></div>);

  const {
    ADD_NEW_QUESTION_BASE_URL,
    categoryInput,
    typeInput,
    questionInput,
    correctAnswerInput,
    incorrectAnswersInput,
    clearAddNewQuestionContext
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

    if (
      categoryInput[0].name === "" ||
      typeInput[0].length === 0 ||
      questionInput[0] === "" ||
      correctAnswerInput[0] === "" ||
      incorrectAnswersInput[0].length === 0 ||
      incorrectAnswersInput[0].includes(undefined)
    ) {
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

    const questionUrl = ADD_NEW_QUESTION_BASE_URL;
    axios({
      method: "post",
      url: questionUrl,
      data: newQuestion
    }).then(
      response => {
        if (response.status === 200) {
          alert("Question saved successfully! :)");
          clearAddNewQuestionContext();
          props.history.push("/questions");
        }
      },
      error => {
        console.log(error);
      }
    );
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
