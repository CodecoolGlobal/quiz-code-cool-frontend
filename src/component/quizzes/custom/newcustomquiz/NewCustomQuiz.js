import React, { useContext } from 'react';
import QuestionList from 'component/questions/QuestionList';
import QuestionFilter from 'component/questions/QuestionFilter';
import NewQuizNameInput from 'component/inputs/NewQuizNameInput';
import SelectedQuestions from './SelectedQuestions';
import { ProgressContext } from 'context/ProgressContext';
import { NewQuizContext } from 'context/NewQuizContext';

import { WiderContentContainer, H3, Button, AuthHelp } from 'style/js/CommonStyles';

export default function NewCustomQuiz(props) {
  const {submit, selectedQuestionsState} = useContext(NewQuizContext);
  const selectedQuestionIds = selectedQuestionsState[0];
  const isReadyToProceed = useContext(ProgressContext)[0];

  return (
    <div>
      <WiderContentContainer>
        <H3>Create custom quiz</H3>
        <NewQuizNameInput />
        <SelectedQuestions />
        <QuestionFilter />
        <QuestionList />
        <Button disabled={!isReadyToProceed} onClick={() => submit()}>
          Save quiz
        </Button>
      </WiderContentContainer>
    </div>
  );
}
