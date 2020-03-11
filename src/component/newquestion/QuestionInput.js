import React, { useContext } from "react";
import { NewQuestionFormContext } from "context/NewQuestionFormContext";

import { InputItem, InputLabel, TextInput } from "style/MyStyle";

export default function QuestionInput() {
  const setQuestion = useContext(NewQuestionFormContext).questionInput[1];

  const handleQuestion = e => {
    setQuestion(e.target.value);
  };

  return (
    <InputItem>
      <InputLabel htmlFor='questionInput'>Add question</InputLabel>
      <TextInput
        name='questionInput'
        id='questionInput'
        type='text'
        placeholder='Add question...'
        maxLength='150'
        required
        onKeyUp={handleQuestion}
      ></TextInput>
    </InputItem>
  );
}
