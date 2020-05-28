import React, { useContext, useEffect } from "react";
import CustomQuizInput from "component/quizzes/custom/customquizstarterform/CustomQuizInput";
import { ProgressContext } from "context/ProgressContext";
import { QuizContext } from "context/QuizContext";

import { ThinnerContentContainer, H3, Button } from "style/js/CommonStyles";

export default function CustomQuizStarterForm() {
  const {submitStarterForm, initBeforeSubmit} = useContext(QuizContext);
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  useEffect(() => {
    initBeforeSubmit();
  }, []);

  const submit = () => {
    setIsReadyToProceed(false);
    submitStarterForm();
  };

  return (
    <ThinnerContentContainer>
      <H3>Start Custom Quiz</H3>
      <CustomQuizInput />
      <Button disabled={!isReadyToProceed} onClick={submit}>
        Start Quiz
      </Button>
    </ThinnerContentContainer>
  );
}
