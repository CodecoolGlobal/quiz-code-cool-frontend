import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import user from "style/img/user.png";

import {
    FormattedNavLink,
    ToolbarNavigationUl,
    UserImage,
  } from "style/js/MyStyle";

export default function UserInfo() {
    const { usernameState } = useContext(UserContext);
    const username = usernameState[0];

    return (
        username ? (
            <div>
              <ToolbarNavigationUl>
                <li>
                  <UserImage src={user}></UserImage>
                  <FormattedNavLink to='/user'>{username}</FormattedNavLink>
                </li>
              </ToolbarNavigationUl>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
    )
}
