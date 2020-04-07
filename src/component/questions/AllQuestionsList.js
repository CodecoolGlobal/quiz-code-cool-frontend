import React from "react";
import QuestionList from "component/questions/QuestionList"

import {
  QuestionListContainer,
  TableContainer,
  H3,
} from "style/MyStyle";

export default function QuestionsList() {

  return (
    <QuestionListContainer>
      <H3>All questions</H3>
      <TableContainer>
        <QuestionList/>
      </TableContainer>
    </QuestionListContainer>
  );
}
