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
  Th,
  ThinnerContentContainer,
  OverflowFlexContainer,
  Thead,
  TBody,
  FormattedNavLink,
} from "../../style/js/CommonStyles";
import { api_getQuestion } from "api/questionConnection";
import { handleError } from "util/errorUtil";
import { QuestionListTdNavLink } from "./style";

export default function QuestionDetails(props) {
  const { selectedQuestionState } = useContext(QuestionDetailsContext);
  const [question, setQuestion] = selectedQuestionState;

  const { id } = props.match.params;

  const getQuestion = async () => {
    try {
      const respQuestion = await api_getQuestion(id);
      setQuestion(new Question(respQuestion));
    } catch (error) {
      handleError(error);
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
            <Thead>
              <TableRow>
                <Th>Question</Th>
                <Th>{question.question}</Th>
              </TableRow>
            </Thead>
            <TBody>
              <TableRow>
                <Th>Id</Th>
                <TableData>{question.id}</TableData>
              </TableRow>
              <TableRow>
                <Th>Created By</Th>
                <TableData>
                  {question.appUser
                    ? <FormattedNavLink to={`/users/${question.appUser.id}`}>{question.appUser.name}</FormattedNavLink>
                    : "No author found"}
                </TableData>
              </TableRow>
              <TableRow>
                <Th>Creation date</Th>
                <TableData>{question.creationDate}</TableData>
              </TableRow>
              <TableRow>
                <Th>Validation date</Th>
                <TableData>
                  {question.validationDate === null
                    ? "Not validated yet"
                    : question.validationDate}
                </TableData>
              </TableRow>
              <TableRow>
                <Th>Category</Th>
                <TableData>{question.category.name}</TableData>
              </TableRow>
              <Answers />
            </TBody>
          </Table>
        )}
      </OverflowFlexContainer>
      <ValidateButton />
      <DeleteButton />
    </ThinnerContentContainer>
  );
}
