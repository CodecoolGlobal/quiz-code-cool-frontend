import React, { useEffect, useContext } from "react";
import { QuestionDetailsContext } from "context/QuestionDetailsContext";
import Question from "context/Question";
import Answers from "component/questions/Answers";
import ValidateButton from "component/questions/ValidateButton";
import DeleteButton from "./DeleteButton";
import {
  H3,
  Table,
  TableData,
  TableRow,
  TableHead,
  ThinnerContentContainer,
  OverflowFlexContainer,
} from "../../style/js/CommonStyles";
import { api_getQuestion } from "api/questionConnection";
import { handleError } from "util/errorUtil";

export default function QuestionDetails(props) {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const [question, setQuestion] = selectedQuestionState;

  const { id } = props.match.params;

  const getQuestion = async () => {
    try {
      const respQuestion = await api_getQuestion(id);
      setQuestion(new Question(respQuestion));
    } catch (error) {
      handleError(error, "Failed to load question details.");
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <ThinnerContentContainer>
      <H3>Details</H3>
      <OverflowFlexContainer>
        {question != null && (
          <Table>
            <thead>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>{question.question}</TableHead>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableData>{question.id}</TableData>
              </TableRow>
              <TableRow>
                <TableHead>Created By</TableHead>
                <TableData>
                  {question.appUser
                    ? question.appUser.name
                    : "No author found"}
                </TableData>
              </TableRow>
              <TableRow>
                <TableHead>Creation date</TableHead>
                <TableData>{question.creationDate}</TableData>
              </TableRow>
              <TableRow>
                <TableHead>Validation date</TableHead>
                <TableData>
                  {question.validationDate === null
                    ? "Not validated yet"
                    : question.validationDate}
                </TableData>
              </TableRow>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableData>{question.category.name}</TableData>
              </TableRow>
              <Answers />
            </tbody>
          </Table>
        )}
      </OverflowFlexContainer>
      <ValidateButton />
      <DeleteButton />
    </ThinnerContentContainer>
  );
}
