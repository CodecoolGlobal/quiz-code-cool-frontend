import React, {  useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";
import { UserContext } from "context/UserContext";
import { Button } from "style/MyStyle";
import { api_validateQuestion } from "api/questionConnection";
import { handleError } from "util/errorUtil";

export default function ValidateButton() {
  const history = useHistory();
  const { rolesState } = useContext(UserContext);
  const roles = rolesState[0];

  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const question = selectedQuestionState[0];

  const validateQuestion = () => {
    validate(history);
  }

  const validate = async (history) => {
    try {
      await api_validateQuestion(question.id);
      alert(`Question ${question.id} validated successfully.`);
      history.push('/questions');
    } catch(error) {
      handleError(error, 'The validation was unsuccessful.');

    }
  }

  return question == null || question.validated ? (
    <React.Fragment></React.Fragment>
  ) : roles.includes("ROLE_ADMIN") ? (
    <Button onClick={validateQuestion}>Validate</Button>
  ) : (
    <React.Fragment></React.Fragment>
  );
  }
