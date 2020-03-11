import React, { useContext } from "react";

import CustomQuizInput from "component/customquizstarterform/CustomQuizInput";

import { QuestionContext } from "context/QuestionContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function CustomQuizStarterForm(props) {
  const submitStarterForm = useContext(QuestionContext).submitStarterForm;

  const submit = () => {
    submitStarterForm(props, "Custom");
  };

  return (
    <ContentContainer>
      <H3>Start Custom Quiz</H3>
      <CustomQuizInput />
      <Button onClick={submit}>Start Quiz</Button>
    </ContentContainer>
  );
}
