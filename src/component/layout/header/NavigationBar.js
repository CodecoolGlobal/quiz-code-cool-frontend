import React from "react";
import {routes} from "util/routes"
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
              <FormattedNavLink to={routes.customQuiz.base}>Custom quiz</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to={routes.randomQuiz}>Random quiz</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to={routes.question.base}>Questions</FormattedNavLink>
            </li>
            <li>
              <FormattedNavLink to={routes.user.all}>Users</FormattedNavLink>
            </li>
          </NavigUl>
        </NavigItem>
        <Spacer />
        <UserInfo />
      </NavigBarItemContainer>
    </NavigBar>
  );
}
