import React from "react";

import QuestionList from "component/questions/QuestionList";
import QuestionFilter from "component/questions/QuestionFilter";

import { WiderContentContainer, H3 } from "style/js/CommonStyles";

export default function AllQuestionsList() {

  return (
    <WiderContentContainer>
      <H3>All questions</H3>
      <QuestionFilter />
      <QuestionList />
    </WiderContentContainer>
  );
}
