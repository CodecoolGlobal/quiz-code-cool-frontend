import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PlayerNameInput from "component/quizzes/random/randomquizstarterform/PlayerNameInput";
import CategoryInput from "component/inputs/CategoryInput";
import TypeInput from "component/inputs/TypeInput";
import QuestionNumberInput from "component/quizzes/random/randomquizstarterform/QuestionNumberInput";
import StepSlider from "component/quizzes/random/randomquizstarterform/StepSlider";

import { QuizContext } from "context/QuizContext";
import { RestoreFiltersContext } from "context/RestoreFiltersContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function QuizStarterForm() {
  const {submitStarterForm, initBeforeSubmit} = useContext(QuizContext);
  const { clearFilters } = useContext(RestoreFiltersContext);
  const history = useHistory();

  useEffect(() => {
    initBeforeSubmit();
    clearFilters();
  }, []);

  const submit = () => {
    submitStarterForm(history);
  };

  return (
    <ContentContainer>
      <H3>New Random Quiz</H3>
      <StepSlider />
      <PlayerNameInput />
      <QuestionNumberInput />
      <CategoryInput />
      <TypeInput />
      <Button onClick={submit}>Start Quiz</Button>
    </ContentContainer>
  );
}
