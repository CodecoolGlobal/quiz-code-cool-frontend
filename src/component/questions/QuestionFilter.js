import React from "react";
import { useHistory } from "react-router-dom";

import CategoryInput from "component/inputs/CategoryInput";
import StatusInput from "component/inputs/StatusInput";
import TypeInput from "component/inputs/TypeInput";
import UserInput from "component/inputs/UserInput";

import { OverflowFlexContainer } from "style/js/CommonStyles";

export default function QuestionFilter() {
  const history = useHistory();

  return (
    <OverflowFlexContainer>
      <CategoryInput />
      <TypeInput />
      {history.location.pathname === '/questions' && <StatusInput />}
      <UserInput/>
    </OverflowFlexContainer>
  );
}
