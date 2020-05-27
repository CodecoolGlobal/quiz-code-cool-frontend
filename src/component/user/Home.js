import React, { useContext, useEffect } from "react";
import { UserContext } from "context/UserContext";

import { H3, ThinnerContentContainer, Message } from "style/js/CommonStyles";

export default function Home() {
  const { usernameState, isExpired } = useContext(UserContext);
  const username = usernameState[0];

  useEffect(() => {
    if (username != null)
      isExpired();
  }, [])

  return (
    <ThinnerContentContainer>
      <H3>Hello {username}!</H3>
      <Message>Let's play with some quizzes!</Message>
    </ThinnerContentContainer>
  );
}
