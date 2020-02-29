import React, { useContext } from "react";

import { QuestionContext } from "../../context/QuestionContext";

import CustomQuizInput from "./CustomQuizInput";

import { ContentContainer, H3, Button } from "../../style/MyStyle";

export default function CustomQuizStarterForm(props) {
  const submitStarterForm = useContext(QuestionContext).submitStarterForm;

  const submit = () => {
    submitStarterForm(props, "Custom");
  };

  return (
    <ContentContainer>
      <H3>New Custom Quiz</H3>
      <CustomQuizInput />
      <Button onClick={submit}>Start Quiz</Button>
    </ContentContainer>
  );
}
