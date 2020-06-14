import React, { useState, useEffect, useContext } from "react";
import { WiderContentContainer } from "style/js/CommonStyles";
import { api_getUser } from "api/userConnection";
import { UsersContext } from "context/UsersContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";
import UserData from "./UserData";
import UserQuizzes from "./UserQuizzes";
import UserQuestions from "./UserQuestions";
import { CircularProgress } from "@material-ui/core";
import NotFoundPage from "component/error/NotFoundPage";

export default function UserDetails(props) {
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
    }
  };

  return user === undefined ? (
    <NotFoundPage />
  ) : (
    <WiderContentContainer>
      {user === null ? (
        <CircularProgress />
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
