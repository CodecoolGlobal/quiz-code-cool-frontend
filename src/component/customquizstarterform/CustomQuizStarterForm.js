import React from "react";

export default function CustomQuizStarterForm() {
  return (
    <ContentContainer>
      <ContainerMorePadding>
        <H3>New Custom Quiz</H3>
        <Button onClick={submit}>Start Quiz</Button>
      </ContainerMorePadding>
    </ContentContainer>
  );
}
