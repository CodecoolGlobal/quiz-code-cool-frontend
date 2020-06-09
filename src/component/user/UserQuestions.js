import React from "react";
import QuestionList from "component/questions/QuestionList";
import { DashedBorder } from "./styles";
import { H4 } from "style/js/CommonStyles";

export default function UserQuestions(props) {
  const user = props.user;

  return (
    <div>
      {user.questions.length !== 0 && (
        <DashedBorder>
          <H4>Questions</H4>
          <QuestionList />
        </DashedBorder>
      )}
    </div>
  );
}
