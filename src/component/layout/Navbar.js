import React from "react";
import { CoPage, NavigBar, NavigLink, NavItem } from "style/MyStyle";

export default function Navbar() {
  return (
    <NavigBar>
      <NavigLink to='/custom-quiz'>
        <NavItem>Custom quiz</NavItem>
      </NavigLink>
      <NavigLink to='/random-quiz'>
        <NavItem>Random quiz</NavItem>
      </NavigLink>
      <NavigLink to='/add-question'>
        <NavItem>Add question</NavItem>
      </NavigLink>
      <NavigLink to='/questions'>
        <NavItem>All questions</NavItem>
      </NavigLink>
      <CoPage href='https://reacty.netlify.com/' target='_blank'>
        <NavItem>Reacty</NavItem>
      </CoPage>
    </NavigBar>
  );
}
