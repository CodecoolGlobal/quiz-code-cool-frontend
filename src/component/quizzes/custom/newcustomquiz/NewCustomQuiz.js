import React, { useContext } from 'react';
import QuestionList from 'component/questions/QuestionList';
import QuestionFilter from 'component/questions/QuestionFilter';
import NewQuizNameInput from 'component/inputs/NewQuizNameInput';
import { ProgressContext } from 'context/ProgressContext';
import { NewQuizContext } from 'context/NewQuizContext';

import { WiderContentContainer, H3, Button } from 'style/js/CommonStyles';

export default function NewCustomQuiz(props) {
  const {submit} = useContext(NewQuizContext);
  const isReadyToProceed = useContext(ProgressContext)[0];

  return (
    <div>
      <WiderContentContainer>
        <H3>Create custom quiz</H3>
        <NewQuizNameInput />
        <QuestionFilter />
        <QuestionList />
        <Button disabled={!isReadyToProceed} onClick={() => submit(props)}>
          Save quiz
        </Button>
      </WiderContentContainer>
    </div>
  );
}
