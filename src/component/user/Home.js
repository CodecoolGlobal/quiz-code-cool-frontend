import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "context/UserContext";

import { H3, ContentContainer, Message, Help } from "style/MyStyle";

export default function Home() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  return (
    <ContentContainer>
      {username === null ? (
        <React.Fragment>
          <H3>Welcome to CodecoolQuiz!</H3>
          <br/>
          <Message>To use our page please <NavLink to="/sign-in">sign in</NavLink> to your account.</Message>
          <Help>
            New to Codecool Quiz? Create an{" "}
            <NavLink to='/sign-up'>account.</NavLink>
          </Help>
          <br/>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <H3>Hello {username}!</H3>
          <Message>Let's play with some quizzes!</Message>
        </React.Fragment>
      )}
    </ContentContainer>
  );
}
