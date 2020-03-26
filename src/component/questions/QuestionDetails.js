import React, { useEffect, useState } from "react";
import axios from "axios";

import Question from "context/Question";
import Answers from "component/questions/Answers";
import { Button } from "style/MyStyle";

import {
  H3,
  Table,
  ResultTableData,
  ResultTableRow,
  ResultTableHead,
  ContentContainer,
  TableContainer
} from "../../style/MyStyle";

export default function QuestionDetails(props) {
  console.log(props);
  const [question, setQuestion] = useState(new Question("", "", "", "", []));
  const [validateButton, setValidateButton] = useState(<div></div>);

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

  useEffect(() => {
    const validate = e => {
      e.preventDefault();
      axios({
        method: "put",
        url: url,
        data: question.id,
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

    switch (question.validated) {
      case false:
        setValidateButton(<Button onClick={validate}>Validate</Button>);
        break;
      case true:
        setValidateButton(<div></div>);
        break;
      default:
        setValidateButton(<div></div>);
    }
  }, [props.history, question, url]);

  return (
    <ContentContainer>
      <H3>Details</H3>
      <TableContainer>
        <Table>
          <thead>
            <ResultTableRow>
              <ResultTableHead>Question</ResultTableHead>
              <ResultTableHead>{question.question}</ResultTableHead>
            </ResultTableRow>
          </thead>
          <tbody>
            <ResultTableRow>
              <ResultTableHead>Creation date</ResultTableHead>
              <ResultTableData>{question.creationDate}</ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Validation date</ResultTableHead>
              <ResultTableData>
                {question.validationDate === null
                  ? "Not validated yet"
                  : question.validationDate}
              </ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Created By</ResultTableHead>
              <ResultTableData>Zokni kutya</ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Category</ResultTableHead>
              <ResultTableData>{question.category}</ResultTableData>
            </ResultTableRow>
            <ResultTableRow>
              <ResultTableHead>Possible answers</ResultTableHead>
              <Answers question={question} />
            </ResultTableRow>
          </tbody>
        </Table>
      </TableContainer>
      {validateButton}
    </ContentContainer>
  );
}
