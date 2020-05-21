import React from "react";
import MenuToggleButton from "component/layout/MenuToggleButton";
import DropDownMenu from "component/layout/DropDownMenu";
import UserInfo from "component/layout/UserInfo";


import {
  FormattedNavLink,
  Toolbar,
  ToolbarNavigation,
  ToolbarNavigationItems,
  ToolbarNavigationUl,
  Spacer,
} from "style/js/MyStyle";

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
          </ToolbarNavigationUl>
        </ToolbarNavigationItems>
        <Spacer />
        <UserInfo />
      </ToolbarNavigation>
      <DropDownMenu />
    </Toolbar>
  );
}
