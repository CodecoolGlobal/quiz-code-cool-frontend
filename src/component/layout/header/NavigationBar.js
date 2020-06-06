import React from "react";
import MenuToggle from "component/layout/header/MenuToogle";
import UserInfo from "component/layout/header/UserInfo";
import {
  NavigBar,
  NavigBarItemContainer,
  NavigItem,
  NavigUl,
  Spacer,
} from "component/layout/header/styles";
import { FormattedNavLink } from "style/js/CommonStyles";

export default function NavigationBar() {

  return (
    <NavigBar>
      <NavigBarItemContainer>
        <div>
          <MenuToggle />
        </div>
        <NavigItem>
          <NavigUl>
            <li>
              <FormattedNavLink to='/custom-quiz'>Custom quiz</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to='/random-quiz'>Random quiz</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to='/question'>Questions</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to='/users'>Users</FormattedNavLink>
            </li>
          </NavigUl>
        </NavigItem>
        <Spacer />
        <UserInfo />
      </NavigBarItemContainer>
    </NavigBar>
  );
}
