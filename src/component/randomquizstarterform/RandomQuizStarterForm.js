import React, { useContext, useEffect } from "react";
import { QuestionContext } from "../../context/QuestionContext";

import PlayerNameInput from "./PlayerNameInput";
import CategoryInput from "./CategoryInput";
import QuestionNumberInput from "./QuestionNumberInput";
import TypeInput from "./TypeInput";
import StepSlider from "./StepSlider";

import { ContentContainer, H3, Button } from "../../style/MyStyle";
import { RandomQuizContext } from "../../context/RandomQuizContext";

export default function QuizStarterForm(props) {
  const submitStarterForm = useContext(QuestionContext).submitStarterForm;
  const setQuestionsPerPlayer = useContext(RandomQuizContext)
    .questionsPerPlayerState[1];

  const submit = () => {
    submitStarterForm(props, "Random");
  };

  useEffect(() => {
    setQuestionsPerPlayer(0);
  }, [setQuestionsPerPlayer]);

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
