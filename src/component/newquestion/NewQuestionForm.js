import React, { useContext, useState, useEffect } from "react";

import CategoryInput from "component/inputs/CategoryInput";
import TypeInput from "component/inputs/TypeInput";
import QuestionInput from "component/newquestion/QuestionInput";
import MultipleAnswers from "component/newquestion/MultipleAnswers";
import TrueFalseAnswers from "component/newquestion/TrueFalseAnswers";

import { NewQuestionFormContext } from "context/NewQuestionFormContext";
import { TypeContext } from "context/TypeContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function NewQuestionForm(props) {
  const [answerComponent, setAnswerComponent] = useState(<div></div>);

  const { selectedTypeInput } = useContext(TypeContext);
  const type = selectedTypeInput[0];

  const { submitForm } = useContext(NewQuestionFormContext);

  useEffect(() => {
    switch (type) {
      case "BOOLEAN":
        setAnswerComponent(<TrueFalseAnswers />);
        break;
      case "MULTIPLE":
        setAnswerComponent(<MultipleAnswers />);
        break;
      default:
        setAnswerComponent(<div></div>);
    }
  }, [type]);

  const submit = () => {
    submitForm(props);
  };

  return (
    <ContentContainer>
      <H3>Add new question</H3>
      <CategoryInput mode='WithoutAnyCategory' />
      <TypeInput mode='WithoutAnyType' />
      <QuestionInput />
      {answerComponent}
      <Button onClick={submit}>Save question</Button>
    </ContentContainer>
  );
}
