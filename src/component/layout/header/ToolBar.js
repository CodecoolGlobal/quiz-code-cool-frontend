import React from "react";
import MenuToggleButton from "component/layout/header/MenuToggleButton";
import DropDownMenu from "component/layout/header/DropDownMenu";
import UserInfo from "component/layout/header/UserInfo";


import {
  Toolbar,
  ToolbarNavigation,
  ToolbarNavigationItems,
  ToolbarNavigationUl,
  Spacer,
} from "component/layout/header/styles";
import { FormattedNavLink } from "style/js/CommonStyles";

export default function ToolBar() {

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
            <li>
              <FormattedNavLink to='/users'>Users</FormattedNavLink>
            </li>
          </ToolbarNavigationUl>
        </ToolbarNavigationItems>
        <Spacer />
        <UserInfo />
      </ToolbarNavigation>
      <DropDownMenu />
    </Toolbar>
  );
}
