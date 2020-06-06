import React, { useContext, useEffect } from "react";
import { UserContext } from "context/UserContext";
import user from "style/img/user.png";

import {
    NavigUl,
    UserImage,
  } from "component/layout/header/styles";
import { FormattedNavLink } from "style/js/CommonStyles";

export default function UserInfo() {
    const { usernameState, userIdState, isExpired } = useContext(UserContext);
    const username = usernameState[0];
    const userId = userIdState[0]

    useEffect(() => {
      isExpired();
    }, [])

    return (
        username ? (
            <div>
              <NavigUl>
                <li>
                  <UserImage src={user}></UserImage>
                  <FormattedNavLink to={`/users/${userId}`}>{username}</FormattedNavLink>
                </li>
              </NavigUl>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
    )
}
