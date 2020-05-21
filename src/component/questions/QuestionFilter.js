import React from "react";
import { useHistory } from "react-router-dom";

import CategoryInput from "component/inputs/CategoryInput";
import StatusInput from "component/inputs/StatusInput";
import TypeInput from "component/inputs/TypeInput";

import { OverflowFlexContainer } from "style/js/MyStyle";

export default function QuestionFilter() {
  const history = useHistory();

  return (
    <OverflowFlexContainer>
      <CategoryInput />
      <TypeInput />
      {history.location.pathname === '/questions' ? <StatusInput /> : <div></div>}
    </OverflowFlexContainer>
  );
}
