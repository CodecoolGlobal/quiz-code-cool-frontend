import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {routes} from "util/routes";
import QuestionListPagination from 'component/questions/QuestionListPagination';
import { QuestionFilterContext } from 'context/QuestionFilterContext';
import { CategoryContext } from 'context/CategoryContext';
import { TypeContext } from 'context/TypeContext';
import { StatusContext } from 'context/StatusContext';
import { NewQuizContext } from 'context/NewQuizContext';
import { UserContext } from "context/UserContext";
import {
  SquareLinedTableTd,
  Help,
  Table,
  OverflowFlexContainer,
  Thead,
  TableRow,
  TBody,
  LinedTableTh,
  LinedTableLongTd,
  LinedTableTr,
  ShortCenteredLinedTableTd,
  LinedTableLink,
  TrashImage
} from 'style/js/CommonStyles';
import deleteIcon from "style/img/delete-icon.png";
import { api_deleteQuestion } from 'api/questionConnection';
import { handleError } from 'util/errorUtil';
import { UsersContext } from 'context/UsersContext';

export default function QuestionList() {

  const { rolesState } = useContext(UserContext);
  const roles = rolesState[0];

  const {toggleQuestionId, selectedQuestionsState, recalculateIsReadyToProceed} = useContext(NewQuizContext);
  const [selectedQuestionIds, setSelectedQuestionIds] = selectedQuestionsState;
  const selectedCategoryId = useContext(CategoryContext).categoryInput[0];
  const selectedStatus = useContext(StatusContext)[0];
  const {selectedUserIdState, clearSelectedUser} = useContext(UsersContext);
  const [selectedUserId] = selectedUserIdState[0];


  const { typesMap, selectedTypeInput } = useContext(TypeContext);
  const selectedType = selectedTypeInput[0];

  const history = useHistory();
  const path = history.location.pathname;

  const { getFilteredQuestions, filteredQuestionsState, pageState, QUESTIONS_PER_PAGE, getPageNumber } = useContext(
    QuestionFilterContext
  );
  const [questions, setQuestions] = filteredQuestionsState;
  const [page, setPage] = pageState;

  const handleClick = (id) => {
      if (weAreOnNewCustomQuizPage(path))
        toggleQuestionId(id);
  };

  useEffect(() => {
    getFilteredQuestions();
  }, [selectedCategoryId, selectedType, selectedStatus, selectedUserId]);

  useEffect(() => {
    if (path === routes.question.all)
      clearSelectedUser();
    setSelectedQuestionIds([]);
  }, [])

  useEffect(() => {
    recalculateIsReadyToProceed();
  }, [selectedQuestionIds])

  useEffect(() => {
    if (page > getPageNumber())
      setPage(1);
  }, [questions])


  const deleteQuestion = async (id) => {
    try {
      await api_deleteQuestion(id);
      setQuestions([...questions.filter((question) => question.id !== id)]);
      alert("Question deleted successfully.");
    } catch (error) {
      handleError(error);
    }
  };

  const getDisplayedQuestionsStartIndex = () => {
    return QUESTIONS_PER_PAGE * (page - 1);
  } 

  const getQuestionsToDisplay = () => {
    return questions.slice(getDisplayedQuestionsStartIndex(), getDisplayedQuestionsStartIndex() + QUESTIONS_PER_PAGE);
  }

  const isAdmin = () => {
    return roles.includes("ROLE_ADMIN");
  }

  const weAreOnNewCustomQuizPage = () => {
    return path === routes.customQuiz.new;
  }

  const weAreOnUserPage = () => {
    return path.includes(routes.user.all);
  }

  return questions.length === 0 ? (
    <Help>No question to display.</Help>
  ) : (
    <React.Fragment>
    <Help size='small'>Page: {page} / {getPageNumber()}</Help>
    <OverflowFlexContainer>
      <Table>
        <Thead>
          <TableRow>
            <LinedTableTh>Id</LinedTableTh>
            <LinedTableTh>Question</LinedTableTh>
            <LinedTableTh>Category</LinedTableTh>
            <LinedTableTh>Type</LinedTableTh>
            <LinedTableTh>Status</LinedTableTh>
            {!weAreOnUserPage() && <LinedTableTh>User</LinedTableTh>}            
            {isAdmin() && !weAreOnNewCustomQuizPage() && (
                <LinedTableTh></LinedTableTh>
              )}
          </TableRow>
        </Thead>
        <TBody>
          {getQuestionsToDisplay().map(question => (
            <LinedTableTr key={question.id} onClick={() => handleClick(question.id)} className={selectedQuestionIds.includes(question.id) ? "selected" : ""}>
              <SquareLinedTableTd>{question.id}</SquareLinedTableTd>
              <LinedTableLongTd onClick={(e) => { window.open(`/questions/${question.id}`, "_blank"); e.stopPropagation() }}>
                <LinedTableLink>
                  {question.question}
                </LinedTableLink>
              </LinedTableLongTd>
              <ShortCenteredLinedTableTd>{question.category.name}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>{typesMap[question.type]}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>
                {question.validated === true ? 'Validated' : 'Not validated'}
              </ShortCenteredLinedTableTd>
              {!weAreOnUserPage() && <ShortCenteredLinedTableTd onClick={(e) => {window.open(`/users/${question.appUser.id}`, "_blank");  e.stopPropagation()}  }>
                <LinedTableLink>{question.appUser.name}</LinedTableLink>
              </ShortCenteredLinedTableTd> }
              {isAdmin() && !weAreOnNewCustomQuizPage() && (
                <SquareLinedTableTd onClick={() => deleteQuestion(question.id)}>
                <TrashImage title="Delete question" src={deleteIcon} alt='delete icon'></TrashImage> 
              </SquareLinedTableTd>
              )}
            </LinedTableTr>
          ))}
        </TBody>
      </Table>
    </OverflowFlexContainer>
    <QuestionListPagination/>
    </React.Fragment>

  );
}
