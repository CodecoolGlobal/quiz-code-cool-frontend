import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import CategoryInput from "component/inputs/CategoryInput";
import StatusInput from "component/inputs/StatusInput";
import TypeInput from "component/inputs/TypeInput";
import UserInput from "component/inputs/UserInput";

import { OverflowFlexContainer } from "style/js/CommonStyles";
import { RestoreInputsContext } from "context/RestoreFiltersContext";

export default function QuestionFilter() {
  const history = useHistory();
  const { clearQuestionsFilterInputs } = useContext(RestoreInputsContext);

  useEffect(() => {
    clearQuestionsFilterInputs();
  }, [])

  return (
    <OverflowFlexContainer>
      <CategoryInput />
      <TypeInput />
      { !history.location.pathname.includes('custom-quiz') && <StatusInput />}
      <UserInput/>
    </OverflowFlexContainer>
  );
}
