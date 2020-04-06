import React, { useContext, useEffect } from "react";

import PlayerNameInput from "component/quizzes/random/randomquizstarterform/PlayerNameInput";
import CategoryInput from "component/inputs/CategoryInput";
import TypeInput from "component/inputs/TypeInput";
import QuestionNumberInput from "component/quizzes/random/randomquizstarterform/QuestionNumberInput";
import StepSlider from "component/quizzes/random/randomquizstarterform/StepSlider";

import { QuestionContext } from "context/QuizContext";
import { RestoreFiltersContext } from "context/RestoreFiltersContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function QuizStarterForm(props) {
  const {submitStarterForm, initBeforeSubmit} = useContext(QuestionContext);
  const { clearFilters } = useContext(RestoreFiltersContext);

  useEffect(() => {
    initBeforeSubmit();
    clearFilters();
  }, []);

  const submit = () => {
    submitStarterForm(props, "Random");
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
