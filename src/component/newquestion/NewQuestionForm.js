import React, { useContext, useState, useEffect } from "react";

import CategoryInput from "component/inputs/CategoryInput";
import TypeInput from "component/newquestion/TypeInput";
import QuestionInput from "component/newquestion/QuestionInput";
import MultipleAnswers from "component/newquestion/MultipleAnswers";
import TrueFalseAnswers from "component/newquestion/TrueFalseAnswers";

import { NewQuestionFormContext } from "context/NewQuestionFormContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function NewQuestionForm(props) {
  const [answerComponent, setAnswerComponent] = useState(<div></div>);

  const { submitForm, typeInput } = useContext(NewQuestionFormContext);

  useEffect(() => {
    switch (typeInput[0]) {
      case "boolean":
        setAnswerComponent(<TrueFalseAnswers />);
        break;
      case "multiple":
        setAnswerComponent(<MultipleAnswers />);
        break;
      default:
        setAnswerComponent(<div></div>);
    }
  }, [typeInput]);

  const submit = () => {
    submitForm(props);
  };

  return (
    <ContentContainer>
      <H3>Add new question</H3>
      <CategoryInput mode='WithoutAnyCategory' />
      <TypeInput />
      <QuestionInput />
      {answerComponent}
      <Button onClick={submit}>Save question</Button>
    </ContentContainer>
  );
}
