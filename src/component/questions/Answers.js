import React, { useEffect, useContext } from "react";
import AnswersForAdmin from "component/questions/AnswerForAdmin"
import AnswersForUser from "component/questions/AnswersForUser"

import { UserContext } from "context/UserContext";


export default function Answers() {
  const {getFromLocalStorage} = useContext(UserContext);
  const roles = getFromLocalStorage("roles");

  return (
      roles.includes("ROLE_ADMIN") ? <AnswersForAdmin /> : <AnswersForUser/> 
  );
}
