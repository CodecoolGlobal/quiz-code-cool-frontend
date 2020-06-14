import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";
import { UserContext } from "context/UserContext";
import { Button } from "style/js/CommonStyles";
import { api_deleteQuestion } from "api/questionConnection";
import {routes} from "util/routes";

export default function DeleteButton() {
  const history = useHistory();
  const { rolesState } = useContext(UserContext);
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];
  const roles = rolesState[0];

  const deleteQuestion = async () => {
    try {
      await api_deleteQuestion(question.id);
      alert("Question deleted successfully.");
      history.push(routes.question.all);
    } catch (error) {
    }
  };

  return (
  roles.includes("ROLE_ADMIN") && 
    <React.Fragment>
      <Button onClick={deleteQuestion}> Delete </Button>
    </React.Fragment>
  )
}
