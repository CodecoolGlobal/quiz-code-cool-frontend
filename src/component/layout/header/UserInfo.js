import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import user from "style/img/user.png";

import {
    FormattedNavLink,
    ToolbarNavigationUl,
    UserImage,
  } from "component/layout/header/styles";

export default function UserInfo() {
    const { usernameState, userIdState } = useContext(UserContext);
    const username = usernameState[0];
    const userId = userIdState[0]


    return (
        username ? (
            <div>
              <ToolbarNavigationUl>
                <li>
                  <UserImage src={user}></UserImage>
                  <FormattedNavLink to={`/users/${userId}`}>{username}</FormattedNavLink>
                </li>
              </ToolbarNavigationUl>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
    )
}
