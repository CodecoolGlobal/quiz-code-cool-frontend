import React, { useContext, useEffect } from "react";
import AnswersForAdmin from "component/questions/AnswerForAdmin"
import AnswersForUser from "component/questions/AnswersForUser"

import { UserContext } from "context/UserContext";

export default function Answers() {
  const { rolesState, isExpired } = useContext(UserContext);
  const roles = rolesState[0];

  useEffect(() => {
    if (rolesState != null)
      isExpired();
  }, [])

  return (
      roles.includes("ROLE_ADMIN") ? <AnswersForAdmin /> : <AnswersForUser/> 
  );
}
