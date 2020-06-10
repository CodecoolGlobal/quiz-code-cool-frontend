import React, { useState, useEffect, useContext } from "react";
import { WiderContentContainer, Help } from "style/js/CommonStyles";
import { api_getUser } from "api/UserConnection";
import { ErrorContext } from 'context/ErrorContext';
import { UsersContext } from "context/UsersContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";
import UserData from "./UserData";
import UserQuizzes from "./UserQuizzes";
import UserQuestions from "./UserQuestions";
import { CircularProgress } from "@material-ui/core";

export default function UserDetails(props) {
    const setError = useContext(ErrorContext)[1];
  const { id } = props.match.params;
  const [user, setUser] = useState(null);
  const setSelectedUserId = useContext(UsersContext).selectedUserIdState[1];
  const { clearQuestionsFilterInputs } = useContext(RestoreInputsContext);

  useEffect(() => {
    setUser(null);
    clearQuestionsFilterInputs();
  }, []);

  useEffect(() => {
    getUserDetails();
    setSelectedUserId(id);
  }, [id]);

  const getUserDetails = async () => {
    try {
      const responseData = await api_getUser(id);
      setUser(responseData);
    } catch (error) {
      setUser(undefined);
      setError(error);
    }
  };

  return (
    <WiderContentContainer>
      {user === null ? (
        <CircularProgress />
      ) : user === undefined ? (
        <Help>No user to display.</Help>
      ) : (
        <React.Fragment>
          <UserData user={user} />
          <UserQuizzes user={user} />
          <UserQuestions user={user} />
        </React.Fragment>
      )}
    </WiderContentContainer>
  );
}
