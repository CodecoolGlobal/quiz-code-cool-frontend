import React, {useContext} from 'react'
import { Help } from 'style/js/CommonStyles';
import { NewQuizContext } from 'context/NewQuizContext';

export default function SelectedQuestions() {
    const { selectedQuestionsState} = useContext(NewQuizContext);
    const selectedQuestionIds = selectedQuestionsState[0];

    return (
        selectedQuestionIds.length !== 0 && <Help>Selected questions: {selectedQuestionIds.map(id => <span>{id} </span>)}</Help>
    )
}
