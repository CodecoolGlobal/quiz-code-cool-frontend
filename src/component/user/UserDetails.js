import React, { useState, useEffect, useContext } from "react";
import {
  H3,
  Table,
  TableData,
  TableRow,
  Th,
  WiderContentContainer,
  OverflowFlexContainer,
  Help,
  TBody,
  H4,
} from "style/js/CommonStyles";
import { api_getUser } from "api/UserConnection";
import { handleError } from "util/errorUtil";
import { UsersContext } from "context/UsersContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";
import QuestionList from "component/questions/QuestionList";
import CustomQuizList from "component/quizzes/custom/customQuizList/CustomQuizList";

export default function UserDetails(props) {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);
  const setSelectedUserId = useContext(UsersContext).selectedUserIdState[1];
  const { clearQuestionsFilterInputs } = useContext(RestoreInputsContext);

  useEffect(() => {
    clearQuestionsFilterInputs();
  }, [])

  useEffect(() => {
    getUserDetails();
    setSelectedUserId(id)
  }, [id]);

  const getUserDetails = async () => {
    try {
      const responseData = await api_getUser(id);
      setUser(responseData);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <WiderContentContainer>
      {user != null && <H3>{`${user.username}'s page`}</H3>}
      <OverflowFlexContainer>
        {user != null ? (
        <Table>
          <TBody>
            <TableRow>
              <Th>Registration Date</Th>
              <TableData>{user.registrationDate}</TableData>
            </TableRow>
            {user.questions != null &&
            <TableRow>
              <Th>Posted Questions</Th>
              <TableData>{user.questions.length}</TableData>
            </TableRow>
            }
            {user.customQuizzes != null &&
            <TableRow>
              <Th>Created custom quizzes</Th>
              <TableData>{user.customQuizzes.length}</TableData>
            </TableRow>
            }
          </TBody>
        </Table>) : <Help>No user to display.</Help>}
      </OverflowFlexContainer>
      {user != null && user.customQuizzes.length !== 0 && 
      <React.Fragment>
        <H4>Quizzes</H4>
        <CustomQuizList customQuizzes={user.customQuizzes}/>
      </React.Fragment>}
      {user != null && user.questions.length !== 0 &&
      <React.Fragment>
        <H4>Questions</H4>
        <QuestionList/>
      </React.Fragment>}
    </WiderContentContainer>
  );
}
