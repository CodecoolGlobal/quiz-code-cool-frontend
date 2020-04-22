import React, { useContext } from "react";
import { UserContext } from "context/UserContext";

import { H3, ContentContainer, Message } from "style/MyStyle";

export default function Home() {
  const {getFromLocalStorage} = useContext(UserContext);
  const username = getFromLocalStorage("username");

  return (
    <ContentContainer>
      <H3>Hello {username}!</H3>
      <Message>Let's play with some quizzes!</Message>
    </ContentContainer>
  );
}
