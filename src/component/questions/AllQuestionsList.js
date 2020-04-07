import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  QuestionListContainer,
  TableContainer,
  H3,
} from "style/MyStyle";

export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/questions", { withCredentials: true })
      .then((resp) => setQuestions(resp.data));
  }, []);

  return (
    <QuestionListContainer>
      <H3>All questions</H3>
      <TableContainer>
        <QuestionList/>
      </TableContainer>
    </QuestionListContainer>
  );
}
