import React, { useContext } from 'react';
import QuestionList from 'component/questions/QuestionList';
import QuestionFilter from 'component/questions/QuestionFilter';
import NewQuizNameInput from 'component/inputs/NewQuizNameInput';
import { ProgressContext } from 'context/ProgressContext';
import { NewQuizContext } from 'context/NewQuizContext';

import { QuestionListContainer, H3, Button } from 'style/MyStyle';

export default function NewCustomQuiz(props) {
  const {submit} = useContext(NewQuizContext);
  const isReadyToProceed = useContext(ProgressContext)[0];

  return (
    <div>
      <QuestionListContainer>
        <H3>Create custom quiz</H3>
        <NewQuizNameInput />
        <QuestionFilter />
        <QuestionList />
        <Button disabled={!isReadyToProceed} onClick={() => submit(props)}>
          Save quiz
        </Button>
      </QuestionListContainer>
    </div>
  );
}
