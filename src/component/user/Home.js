import React, { useContext } from "react";
import { UserContext } from "context/UserContext";

import { H3, ContentContainer, Message } from "style/js/MyStyle";

export default function Home() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  return (
    <ContentContainer>
      <H3>Hello {username}!</H3>
      <Message>Let's play with some quizzes!</Message>
    </ContentContainer>
  );
}
