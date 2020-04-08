import React, { useContext } from "react";
import QuestionList from "component/questions/QuestionList";
import QuestionFilter from "component/questions/QuestionFilter";
import NewQuizNameInput from "component/inputs/NewQuizNameInput";
import { ProgressContext } from "context/ProgressContext";
import { NewQuizContext } from "context/NewQuizContext";

import { QuestionListContainer, H3, Button } from "style/MyStyle";

export default function NewCustomQuiz() {

  const submit = useContext(NewQuizContext);
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  return (
    <div>
      <NewQuizNameInput />
      <QuestionListContainer>
        <H3>Select questions</H3>
        <QuestionFilter />
        <QuestionList />
      </QuestionListContainer>
      <Button disabled={!isReadyToProceed} onClick={submit}>
        Start Quiz
      </Button>
    </div>
  );
}
