import React, { useEffect, useContext } from 'react';

import { QuestionDetailsContext } from 'context/QuestionDetailsContext';

import Answers from 'component/questions/Answers';
import ValidateButton from 'component/questions/ValidateButton';
import DeleteButton from './DeleteButton';

import {
	H3,
	Table,
	ResultTableData,
	TableRow,
	TableHead,
	ContentContainer,
	FlexContainer,
} from '../../style/MyStyle';

export default function QuestionDetails(props) {
	const { selectedQuestionState, getQuestion } = useContext(
		QuestionDetailsContext
	);
	const question = selectedQuestionState[0];

	const { id } = props.match.params;

	useEffect(() => {
		getQuestion(id);
	}, [id]);

  return (
    <ContentContainer>
      <H3>Details</H3>
      <FlexContainer>
        {question == null ? (
          <React.Fragment></React.Fragment>
        ) : (
          <Table>
            <thead>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>{question.question}</TableHead>
              </TableRow>
            </thead>
            <tbody>
            <TableRow>
                <TableHead>Id</TableHead>
                <ResultTableData>{question.id}</ResultTableData>
              </TableRow>
              <TableRow>
                <TableHead>Creation date</TableHead>
                <ResultTableData>{question.creationDate}</ResultTableData>
              </TableRow>
              <TableRow>
                <TableHead>Validation date</TableHead>
                <ResultTableData>
                  {question.validationDate === null
                    ? "Not validated yet"
                    : question.validationDate}
                </ResultTableData>
              </TableRow>
              <TableRow>
                <TableHead>Created By</TableHead>
                <ResultTableData>Zokni kutya</ResultTableData>
              </TableRow>
              <TableRow>
                <TableHead>Category</TableHead>
                <ResultTableData>{question.category.name}</ResultTableData>
              </TableRow>
                <Answers />
            </tbody>
          </Table>
        )}
      </FlexContainer>
      <ValidateButton />
      <DeleteButton />
    </ContentContainer>
  );
}
