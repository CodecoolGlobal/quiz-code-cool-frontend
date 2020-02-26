import React from "react";
import { NavigBar, NavigLink, NavItem } from "../style/MyStyle";

export default function Navbar() {
  return (
    <NavigBar>
      <NavigLink to='/custom-quiz'>
        <NavItem>Custom quiz</NavItem>
      </NavigLink>
      <NavigLink to='/random-quiz'>
        <NavItem>Random quiz</NavItem>
      </NavigLink>
    </NavigBar>
  );
}
