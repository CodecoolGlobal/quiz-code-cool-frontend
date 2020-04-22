import React, { useContext, useEffect } from "react";

import CategoryInput from "component/inputs/CategoryInput";
import TypeInput from "component/inputs/TypeInput";
import QuestionInput from "component/newquestion/QuestionInput";
import NewAnswerForm from "component/newquestion/NewAnswerForm";

import { NewQuestionFormContext } from "context/NewQuestionFormContext";
import { RestoreFiltersContext } from "context/RestoreFiltersContext";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function NewQuestionForm(props) {
  const { submitForm } = useContext(NewQuestionFormContext);
  const { clearFilters } = useContext(RestoreFiltersContext);

  useEffect(() => {
    clearFilters();
  }, []);

  const submit = () => {
    submitForm(props);
  };

  return (
    <ContentContainer>
      <H3>Add new question</H3>
      <CategoryInput mode='WithoutAnyCategory' />
      <TypeInput mode='WithoutAnyType' />
      <QuestionInput />
      <NewAnswerForm />
      <Button onClick={submit}>Save question</Button>
    </ContentContainer>
  );
}
