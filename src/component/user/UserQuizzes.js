import React from "react";
import CustomQuizList from "component/quizzes/custom/customQuizList/CustomQuizList";
import { DashedBorder } from "./styles";
import { H4 } from "style/js/CommonStyles";

export default function UserQuizzes(props) {
  const user = props.user;
  return (
    user.customQuizzes.length !== 0 && (
      <DashedBorder>
        <H4>Quizzes</H4>
        <CustomQuizList />
      </DashedBorder>
    )
  );
}
