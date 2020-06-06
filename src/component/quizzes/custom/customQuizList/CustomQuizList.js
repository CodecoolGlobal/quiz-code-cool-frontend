import React, {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {routes} from "util/routes"
import { UsersContext } from "context/UsersContext";
import {weAreOnUserPage} from "util/routes";
import {
  Table,
  Thead,
  TableRow,
  LinedTableTh,
  ShortCenteredLinedTableTd,
  LinedTableTr,
  SquareLinedTableTd,
  OverflowFlexContainer,
  LinedTableLink,
  Help,
  TBody,
} from "style/js/CommonStyles";
import { api_getCustomQuizzes, api_getCustomQuizzesByUserId } from "api/customQuizConnection";
import { handleError } from "util/errorUtil";

export default function CustomQuizList() {
  const selectedUserId = useContext(UsersContext).selectedUserIdState[0];
  const [customQuizzes, setCustomQuizzes] = useState([]);
  const path = useHistory().location.pathname;


  const getCustomQuizzes = async () => {
    try {
      const quizzes = path.includes(routes.customQuiz.all) ? await api_getCustomQuizzes() : await api_getCustomQuizzesByUserId(selectedUserId);
      setCustomQuizzes(quizzes);
    } catch(error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getCustomQuizzes();
  }, []);

  const weAreOnUserPage = () => {
    return path.includes(routes.user.all);
  }

  return (
    customQuizzes.length === 0 ? (
      <Help>No custom quiz to display.</Help>
    ) : (
    <OverflowFlexContainer>
      <Table>
        <Thead>
          <TableRow>
            <LinedTableTh>Id</LinedTableTh>
            <LinedTableTh>Quiz</LinedTableTh>
            <LinedTableTh>Question number</LinedTableTh>
            <LinedTableTh>Created</LinedTableTh>
            {!weAreOnUserPage() && <LinedTableTh>User</LinedTableTh>}
          </TableRow>
        </Thead>
        <TBody>
          {customQuizzes.map((quiz) => (
            <LinedTableTr key={quiz.id}>
              <SquareLinedTableTd>{quiz.id}</SquareLinedTableTd>
              <ShortCenteredLinedTableTd>{quiz.name}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>{quiz.questions.length}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>{quiz.creationDate}</ShortCenteredLinedTableTd>
              { !weAreOnUserPage() &&
                <ShortCenteredLinedTableTd onClick={() =>  window.open(`/users/${quiz.appUser.id}`, "_blank") }><LinedTableLink>{quiz.appUser.name}</LinedTableLink></ShortCenteredLinedTableTd>
              }
                </LinedTableTr>
          ))}
        </TBody>
      </Table>
    </OverflowFlexContainer>
  )
  )
}
