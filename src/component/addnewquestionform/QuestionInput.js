import React, { useContext } from "react";
import { AddNewQuestionFormContext } from "../../context/AddNewQuestionFormContext";

import { InputItem, InputLabel, TextInput } from "../../style/MyStyle";

export default function QuestionInput() {
  const [question, setQuestion] = useContext(
    AddNewQuestionFormContext
  ).questionInput;

  const handleQuestion = e => {
    setQuestion(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor="questionInput">Add question</InputLabel>
      <TextInput
        name="questionInput"
        id="questionInput"
        type="text"
        placeholder="Add question..."
        maxLength="150"
        required
        onKeyUp={handleQuestion}
      ></TextInput>
    </InputItem>
  );
}
