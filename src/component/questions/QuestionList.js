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
} from 'style/js/CommonStyles';
import {  
  QuestionsTh,
  QuestionsTd,
  QuestionsTr,
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

  const {toggleQuestionId} = useContext(NewQuizContext);
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

  const [selectedRow, setSelectedRow] = useState([]);

  const handleClick = (id, index) => {
    if (history.location.pathname === '/custom-quiz/new') {
      if (index !== undefined && !selectedRow.includes(index) ) setSelectedRow([...selectedRow, index]);
      else {
        let newArray = selectedRow;
        newArray.splice(newArray.indexOf(index), 1)
      }
      toggleQuestionId(id);
    }
  };

  useEffect(() => {
    getFilteredQuestions(history.location.pathname);
  }, [selectedCategoryId, selectedType, selectedStatus, selectedUserId]);

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
        <thead>
          <tr>
            <QuestionsTh>Id</QuestionsTh>
            <QuestionsTh>Question</QuestionsTh>
            <QuestionsTh>Category</QuestionsTh>
            <QuestionsTh>Type</QuestionsTh>
            <QuestionsTh>Status</QuestionsTh>
            {roles.includes("ROLE_ADMIN") && (
                <QuestionsTh></QuestionsTh>
              )}
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <QuestionsTr key={index} onClick={() => handleClick(question.id, index)} className={selectedRow.includes(index) ? "selected" : ""}>
              <QuestionsTd>{question.id}</QuestionsTd>
              {history.location.pathname === '/questions' ? (
                <QuestionListTdNavLink to={`/questions/${question.id}`}>
                  <QuestionsTd>{question.question}</QuestionsTd>
                </QuestionListTdNavLink>
              ) : (
                <QuestionsTd>{question.question}</QuestionsTd>
              )}
              <QuestionsTd>{question.category.name}</QuestionsTd>
              <QuestionsTd>{typesMap[question.type]}</QuestionsTd>
              <QuestionsTd>
                {question.validated === true ? 'Validated' : 'Not validated'}
              </QuestionsTd>
              {roles.includes("ROLE_ADMIN") && (
                <QuestionsTd onClick={() => deleteQuestion(question.id)}>
                <TrashImage title="Delete question" src={deleteIcon} alt='delete icon'></TrashImage> 
              </QuestionsTd>
              )}
            </QuestionsTr>
          ))}
        </tbody>
      </Table>
    </OverflowFlexContainer>
  );
}
