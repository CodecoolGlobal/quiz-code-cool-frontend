import React, { useContext } from "react";
import MenuToggleButton from "component/layout/MenuToggleButton";
import DropDownMenu from "component/layout/DropDownMenu";
import UserInfo from "component/layout/UserInfo";
import { UserContext } from "context/UserContext";

import {
  FormattedNavLink,
  Toolbar,
  ToolbarNavigation,
  ToolbarNavigationItems,
  ToolbarNavigationUl,
  Spacer,
} from "style/MyStyle";

export default function ToolBar() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  return (
    <Toolbar>
      {username === null ? (
        <React.Fragment></React.Fragment>
      ) : (
        <ToolbarNavigation>
          <div>
            <MenuToggleButton />
          </div>
          <ToolbarNavigationItems>
            <ToolbarNavigationUl>
              <li>
                <FormattedNavLink to='/custom-quiz'>
                  Custom quiz
                </FormattedNavLink>
              </li>
              <li>
                <FormattedNavLink to='/random-quiz'>
                  Random quiz
                </FormattedNavLink>
              </li>
              <li>
                <FormattedNavLink to='/add-question'>
                  Add question
                </FormattedNavLink>
              </li>
              <li>
                <FormattedNavLink to='/questions'>
                  All questions
                </FormattedNavLink>
              </li>
            </ToolbarNavigationUl>
          </ToolbarNavigationItems>
          <Spacer />
          <UserInfo />
        </ToolbarNavigation>
      )}
      <DropDownMenu />
    </Toolbar>
  );
}
