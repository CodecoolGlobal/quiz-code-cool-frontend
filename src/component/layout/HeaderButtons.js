import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "context/UserContext";
import { AuthContext } from "context/AuthContext";

import { HeaderButton, HeaderNavLink } from "style/MyStyle";

export default function HeaderButtons() {
  const {getFromLocalStorage} = useContext(UserContext);
  const username = getFromLocalStorage("username");
  const { signOut } = useContext(AuthContext);
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

  return (
    <div>
      {leftButton}
      {rightButton}
    </div>
  );
}
