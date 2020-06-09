import React, { useState, useEffect, useContext } from "react";
import { WiderContentContainer, Help } from "style/js/CommonStyles";
import { api_getUser } from "api/UserConnection";
import { handleError } from "util/errorUtil";
import { UsersContext } from "context/UsersContext";
import { RestoreInputsContext } from "context/RestoreFiltersContext";
import UserData from "./UserData";
import UserQuizzes from "./UserQuizzes";
import UserQuestions from "./UserQuestions";

export default function UserDetails(props) {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);
  const setSelectedUserId = useContext(UsersContext).selectedUserIdState[1];
  const { clearQuestionsFilterInputs } = useContext(RestoreInputsContext);

  useEffect(() => {
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
      handleError(error);
    }
  };

  return (
    <WiderContentContainer>
      {user === null ? (
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
