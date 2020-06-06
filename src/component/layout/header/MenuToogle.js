import React, { useState } from "react";
import menuButton from "style/img/menu-button.png";
import {
  MenuToggleButton,
  MenuNavLink,
  MenuNavItem,
} from "component/layout/header/styles";
import { Menu, MenuItem } from "@material-ui/core";

export default function MenuToggle() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <MenuToggleButton onClick={handleClick} src={menuButton}></MenuToggleButton>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuNavLink onClick={handleClose} to='/custom-quiz'>
          <MenuNavItem>Custom quiz</MenuNavItem>
        </MenuNavLink>
        <MenuNavLink onClick={handleClose} to='/random-quiz'>
          <MenuNavItem>Random quiz</MenuNavItem>
        </MenuNavLink>
        <MenuNavLink onClick={handleClose} to='/question'>
          <MenuNavItem>Questions</MenuNavItem>
        </MenuNavLink>
        <MenuNavLink onClick={handleClose} to='/users'>
          <MenuNavItem>Users</MenuNavItem>
        </MenuNavLink>
      </Menu>
    </React.Fragment>
  );
}
