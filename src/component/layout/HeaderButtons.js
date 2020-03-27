import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "context/UserContext";

import { HeaderButton, HeaderNavLink } from "style/MyStyle";

export default function HeaderButtons() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];
  const [leftButton, setLeftButton] = useState();
  const [rightButton, setRightButton] = useState();

  useEffect(() => {
    setLeftButton(
      username ? (
        <HeaderButton left>Sign out</HeaderButton>
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

  return (
    <div>
      {leftButton}
      {rightButton}
    </div>
  );
}
