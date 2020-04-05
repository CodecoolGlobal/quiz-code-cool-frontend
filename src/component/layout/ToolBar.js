import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "context/UserContext";
import user from "style/user.png";
import MenuToggleButton from "component/layout/MenuToggleButton";
import DropDownMenu from "component/layout/DropDownMenu";

import {
  FormattedNavLink,
  UserImage,
  Toolbar,
  ToolbarNavigation,
  ToolbarNavigationItems,
  ToolbarNavigationUl,
  Spacer,
} from "style/MyStyle";

export default function ToolBar() {

  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  const [loggedInUserComponent, setLoggedInUserComponent] = useState(
    <React.Fragment></React.Fragment>
  );

  useEffect(() => {
    setLoggedInUserComponent(
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
    );
  }, [username]);

  return (
    <Toolbar>
      <ToolbarNavigation>
        <div>
          <MenuToggleButton />
        </div>
        <ToolbarNavigationItems>
          <ToolbarNavigationUl>
            <li>
              <FormattedNavLink to='/custom-quiz'>Custom quiz</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to='/random-quiz'>Random quiz</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to='/add-question'>
                Add question
              </FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to='/questions'>All questions</FormattedNavLink>
            </li>
          </ToolbarNavigationUl>
        </ToolbarNavigationItems>
        <Spacer />
        {loggedInUserComponent}
      </ToolbarNavigation>
      <DropDownMenu />
    </Toolbar>
  );
}
