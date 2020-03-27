import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "context/UserContext";
import {
  NavigBar,
  NavigLink,
  NavItem,
  UserNavItem,
  UserImage
} from "style/MyStyle";
import user from "style/user.png";

export default function Navbar() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  const [loggedInUserComponent, setLoggedInUserComponent] = useState(
    <React.Fragment></React.Fragment>
  );

  useEffect(() => {
    setLoggedInUserComponent(
      username ? (
        <React.Fragment>
          <UserImage src={user}></UserImage>
          <NavigLink float='right' to='/user'>
            <UserNavItem>{username}</UserNavItem>
          </NavigLink>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )
    );
  }, [username]);

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
      {loggedInUserComponent}
    </NavigBar>
  );
}
