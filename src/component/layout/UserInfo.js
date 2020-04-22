import React, { useContext } from 'react';
import { UserContext } from 'context/UserContext';
import user from 'style/user.png';

import {
  FormattedNavLink,
  ToolbarNavigationUl,
  UserImage,
} from 'style/MyStyle';

export default function UserInfo() {
  const { getFromLocalStorage } = useContext(UserContext);
  const username = getFromLocalStorage('username');

  return username ? (
    <div>
      <ToolbarNavigationUl>
        <li>
          <UserImage src={user}></UserImage>
          <FormattedNavLink to="/user">{username}</FormattedNavLink>
        </li>
      </ToolbarNavigationUl>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
}
