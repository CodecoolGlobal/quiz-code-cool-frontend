import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Question from "context/Question";
import { UserContext } from "context/UserContext";
import Answers from "component/questions/Answers";
import { Button } from "style/MyStyle";

import {
  H3,
  Table,
  ResultTableData,
  TableRow,
  TableHead,
  ContentContainer,
  TableContainer
} from "../../style/MyStyle";

export default function QuestionDetails(props) {
  const [question, setQuestion] = useState(new Question("", "", "", "", []));
  const [validateButton, setValidateButton] = useState(<div></div>);
  const { rolesState } = useContext(UserContext);
  const roles = rolesState[0];

  const { id } = props.match.params;
  const url = `http://localhost:8080/questions/${id}`;

  useEffect(() => {
    axios
      .get(url, { withCredentials: true})
      .then(resp =>
        setQuestion(
          new Question(
            resp.data.category.name,
            resp.data.type,
            resp.data.question,
            resp.data.correctAnswer,
            resp.data.incorrectAnswers,
            resp.data.creationDate,
            resp.data.validationDate,
            resp.data.validated
          )
        )
      );
  }, [props.history, question.id, question.validated, url]);

  const validate = e => {
    e.preventDefault();
    axios({
      method: "put",
      url: url,
      withCredentials: true
    }).then(
      response => {
        if (response.status === 200) {
          alert("Question validated successfully! :)");
          props.history.push("/questions");
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    switch (question.validated) {
      case false:
        setValidateButton(
          roles.includes("ROLE_ADMIN") ? (
            <Button onClick={validate}>Validate</Button>
          ) : (
            <div></div>
          )
        );
        break;
      default:
        setValidateButton(<div></div>);
    }
  }, [question]);

  return (
    <ContentContainer>
      <H3>Details</H3>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>{question.question}</TableHead>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableHead>Creation date</TableHead>
              <ResultTableData>{question.creationDate}</ResultTableData>
            </TableRow>
            <TableRow>
              <TableHead>Validation date</TableHead>
              <ResultTableData>
                {question.validationDate === null
                  ? "Not validated yet"
                  : question.validationDate}
              </ResultTableData>
            </TableRow>
            <TableRow>
              <TableHead>Created By</TableHead>
              <ResultTableData>Zokni kutya</ResultTableData>
            </TableRow>
            <TableRow>
              <TableHead>Category</TableHead>
              <ResultTableData>{question.category}</ResultTableData>
            </TableRow>
            <TableRow>
              <TableHead>Possible answers</TableHead>
              <Answers question={question} />
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
      {validateButton}
    </ContentContainer>
  );
}
