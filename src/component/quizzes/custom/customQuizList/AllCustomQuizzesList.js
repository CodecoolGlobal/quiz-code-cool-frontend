import React from "react";
import { WiderContentContainer, H3 } from "style/js/CommonStyles";
import CustomQuizList from "./CustomQuizList";

export default function AllCustomQuizzesList() {

  return (
    <WiderContentContainer>
      <H3>All custom quizzes</H3>
      <CustomQuizList />
    </WiderContentContainer>
  );
}
