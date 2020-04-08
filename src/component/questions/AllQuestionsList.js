import React from "react";

import QuestionList from "component/questions/QuestionList";
import QuestionFilter from "component/questions/QuestionFilter";

import { QuestionListContainer, H3 } from "style/MyStyle";

export default function QuestionsList() {

  return (
    <QuestionListContainer>
      <H3>All questions</H3>
      <QuestionFilter />
      <QuestionList />
    </QuestionListContainer>
  );
}
