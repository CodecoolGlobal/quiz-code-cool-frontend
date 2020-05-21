import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";
import { UserContext } from "context/UserContext";
import { Button } from "style/MyStyle";
import { api_deleteQuestion } from "api/questionConnection";

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
      history.push("/questions");
    } catch (error) {
      alert(`Error. Deletion of question ${question.id} was unsuccessful.`);
    }
  };

  return roles.includes("ROLE_ADMIN") ? (
    <React.Fragment>
      <Button onClick={deleteQuestion}> Delete </Button>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
}
