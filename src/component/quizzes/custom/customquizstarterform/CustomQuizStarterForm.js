import React, { useContext, useEffect } from "react";

import CustomQuizInput from "component/quizzes/custom/customquizstarterform/CustomQuizInput";
import { ProgressContext } from "context/ProgressContext";

import { QuestionContext } from "context/QuizContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function CustomQuizStarterForm(props) {
  const {submitStarterForm, initBeforeSubmit} = useContext(QuestionContext);
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  useEffect(() => {
    initBeforeSubmit();
  }, []);

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
