import React, {useContext} from "react";
import {MenuContext} from "context/MenuContext"

import {
    NavigBar,
    MenuNavLink,
    MenuNavItem 
  } from "style/MyStyle";

export default function DropDownMenu() {
    const [isMenuActive, setIsMenuActive] = useContext(MenuContext);
    
    const toggleMenuState = () => {
        setIsMenuActive(!isMenuActive);
      };

  return (
    isMenuActive ? (
    <NavigBar onClick={toggleMenuState}>
      <MenuNavLink to='/custom-quiz'>
        <MenuNavItem>Custom quiz</MenuNavItem>
      </MenuNavLink>
      <MenuNavLink to='/random-quiz'>
        <MenuNavItem>Random quiz</MenuNavItem>
      </MenuNavLink>
      <MenuNavLink to='/add-question'>
        <MenuNavItem>Add question</MenuNavItem>
      </MenuNavLink>
      <MenuNavLink to='/questions'>
        <MenuNavItem>All questions</MenuNavItem>
      </MenuNavLink>
    </NavigBar>) : <React.Fragment></React.Fragment>
  );
}
