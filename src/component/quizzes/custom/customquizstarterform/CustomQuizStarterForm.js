import React, { useContext } from "react";

import CustomQuizInput from "component/quizzes/custom/customquizstarterform/CustomQuizInput";
import { ProgressContext } from "context/ProgressContext";

import { QuestionContext } from "context/QuestionContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function CustomQuizStarterForm(props) {
  const submitStarterForm = useContext(QuestionContext).submitStarterForm;
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  const submit = () => {
    setIsReadyToProceed(false);
    submitStarterForm(props, "Custom");
  };

  return (
    <ContentContainer>
      <H3>Start Custom Quiz</H3>
      <CustomQuizInput />
      <Button disabled={!isReadyToProceed} onClick={submit}>
        Start Quiz
      </Button>
    </ContentContainer>
  );
}
