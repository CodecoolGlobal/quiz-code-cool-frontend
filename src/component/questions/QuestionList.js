import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionFilterContext } from 'context/QuestionFilterContext';
import { CategoryContext } from 'context/CategoryContext';
import { TypeContext } from 'context/TypeContext';
import { StatusContext } from 'context/StatusContext';
import { NewQuizContext } from 'context/NewQuizContext';
import { UserContext } from "context/UserContext";
import {
  Help,
  Table,
  OverflowFlexContainer,
  Thead,
  TableRow,
  TBody,
  LinedTableTh,
  LongLinedTableTd,
  LinedTableTr,
  ShortCenteredLinedTableTd
} from 'style/js/CommonStyles';
import {  
  QuestionListTdNavLink,
  TrashImage
} from 'component/questions/style'
import deleteIcon from "style/img/delete-icon.png";
import { api_deleteQuestion } from 'api/questionConnection';
import { handleError } from 'util/errorUtil';
import { UsersContext } from 'context/UsersContext';

export default function QuestionList() {

  const { rolesState } = useContext(UserContext);
  const roles = rolesState[0];

  const {toggleQuestionId, selectedQuestionsState} = useContext(NewQuizContext);
  const [selectedQuestionIds, setSelectedQuestionIds] = selectedQuestionsState;
  const selectedCategoryId = useContext(CategoryContext).categoryInput[0];
  const selectedStatus = useContext(StatusContext)[0];
  const selectedUserId = useContext(UsersContext).selectedUserIdState[0];

  const { typesMap, selectedTypeInput } = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const history = useHistory();

  const { getFilteredQuestions, filteredQuestionsState } = useContext(
    QuestionFilterContext
  );
  const [questions, setQuestions] = filteredQuestionsState;


  const handleClick = (id) => {
      if ( history.location.pathname.includes("custom-quiz"))
        toggleQuestionId(id);
  };

  useEffect(() => {
    getFilteredQuestions(history.location.pathname);
  }, [selectedCategoryId, selectedType, selectedStatus, selectedUserId]);

  useEffect(() => {
    setSelectedQuestionIds([]);
  }, [])

  const deleteQuestion = async (id) => {
    try {
      await api_deleteQuestion(id);
      setQuestions([...questions.filter((question) => question.id !== id)]);
      alert("Question deleted successfully.");
    } catch (error) {
      handleError(error, `Deletion of question ${id} was unsuccessful.`);
    }
  };

  return questions.length === 0 ? (
    <Help>No questions to display.</Help>
  ) : (
    <OverflowFlexContainer>
      <Table>
        <Thead>
          <TableRow>
            <LinedTableTh>Id</LinedTableTh>
            <LinedTableTh>Question</LinedTableTh>
            <LinedTableTh>Category</LinedTableTh>
            <LinedTableTh>Type</LinedTableTh>
            <LinedTableTh>Status</LinedTableTh>
            {roles.includes("ROLE_ADMIN") && !history.location.pathname.includes("custom-quiz") && (
                <LinedTableTh></LinedTableTh>
              )}
          </TableRow>
        </Thead>
        <TBody>
          {questions.map(question => (
            <LinedTableTr key={question.id} onClick={() => handleClick(question.id)} className={selectedQuestionIds.includes(question.id) ? "selected" : ""}>
              <LongLinedTableTd>{question.id}</LongLinedTableTd>
              {!history.location.pathname.includes("custom-quiz") ? (
                <QuestionListTdNavLink to={`/questions/${question.id}`}>
                  <div>
                  <LongLinedTableTd>
                      {question.question}
                  </LongLinedTableTd>
                  </div>
                </QuestionListTdNavLink>
              ) : (
                <LongLinedTableTd>{question.question}</LongLinedTableTd>
              )}
              <ShortCenteredLinedTableTd>{question.category.name}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>{typesMap[question.type]}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>
                {question.validated === true ? 'Validated' : 'Not validated'}
              </ShortCenteredLinedTableTd>
              {roles.includes("ROLE_ADMIN") && !history.location.pathname.includes("custom-quiz") && (
                <LongLinedTableTd onClick={() => deleteQuestion(question.id)}>
                <TrashImage title="Delete question" src={deleteIcon} alt='delete icon'></TrashImage> 
              </LongLinedTableTd>
              )}
            </LinedTableTr>
          ))}
        </TBody>
      </Table>
    </OverflowFlexContainer>
  );
}
