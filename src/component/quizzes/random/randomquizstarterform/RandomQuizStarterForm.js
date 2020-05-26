import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PlayerNameInput from "component/quizzes/random/randomquizstarterform/PlayerNameInput";
import CategoryInput from "component/inputs/CategoryInput";
import TypeInput from "component/inputs/TypeInput";
import QuestionNumberInput from "component/quizzes/random/randomquizstarterform/QuestionNumberInput";
import StepSlider from "component/quizzes/random/randomquizstarterform/StepSlider";

import { QuizContext } from "context/QuizContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";

import { ThinnerContentContainer, H3, Button } from "style/js/CommonStyles";

export default function QuizStarterForm() {
  const {submitStarterForm, initBeforeSubmit} = useContext(QuizContext);
  const { clearTypeCategoryInputs } = useContext(RestoreInputsContext);
  const history = useHistory();

  useEffect(() => {
    initBeforeSubmit();
    clearTypeCategoryInputs();
  }, []);

  const submit = () => {
    submitStarterForm(history);
  };

  return (
    <ThinnerContentContainer>
      <H3>New Random Quiz</H3>
      <StepSlider />
      <PlayerNameInput />
      <QuestionNumberInput />
      <CategoryInput />
      <TypeInput />
      <Button onClick={submit}>Start Quiz</Button>
    </ThinnerContentContainer>
  );
}
