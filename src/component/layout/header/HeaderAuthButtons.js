import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "context/UserContext";
import { AuthContext } from "context/AuthContext";

import { HeaderButton, HeaderNavLink } from "component/layout/header/styles";

export default function HeaderAuthButtons() {
  const { usernameState, isExpired } = useContext(UserContext);
  const { signOut } = useContext(AuthContext);
  const username = usernameState[0];
  const [leftButton, setLeftButton] = useState();
  const [rightButton, setRightButton] = useState();

  useEffect(() => {
    setLeftButton(
      username ? (
        <HeaderButton left onClick={signOut}>Sign out</HeaderButton>
      ) : (
        <HeaderNavLink to='/sign-up'>
          <HeaderButton left>Sign up</HeaderButton>
        </HeaderNavLink>
      )
    );
    setRightButton(
      username ? (
          <HeaderButton right disabled>
            Sign in
          </HeaderButton>
      ) : (
        <HeaderNavLink to='/sign-in'>
          <HeaderButton right>Sign in</HeaderButton>
        </HeaderNavLink>
      )
    );
  }, [username]);

  useEffect(() => {
    isExpired();
  }, [])

  return (
    <div>
      {leftButton}
      {rightButton}
    </div>
  );
}
