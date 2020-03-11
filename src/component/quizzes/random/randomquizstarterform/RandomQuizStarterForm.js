import React, { useContext } from "react";

import PlayerNameInput from "component/quizzes/random/randomquizstarterform/PlayerNameInput";
import CategoryInput from "component/inputs/CategoryInput";
import QuestionNumberInput from "component/quizzes/random/randomquizstarterform/QuestionNumberInput";
import TypeInput from "component/quizzes/random/randomquizstarterform/TypeInput";
import StepSlider from "component/quizzes/random/randomquizstarterform/StepSlider";

import { QuestionContext } from "context/QuestionContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function QuizStarterForm(props) {
  const submitStarterForm = useContext(QuestionContext).submitStarterForm;

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
