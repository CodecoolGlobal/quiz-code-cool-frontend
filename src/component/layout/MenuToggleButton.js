import React, { useContext } from "react";
import menuButton from "style/menu-button.png";
import { MenuContext } from "context/MenuContext";

import { ToggleButton, MenuItemImage } from "style/MyStyle";

export default function MenuToggleButton() {
  const [isMenuActive, setIsMenuActive] = useContext(MenuContext);

  const toggleMenuState = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <ToggleButton onClick={toggleMenuState}>
      <MenuItemImage src={menuButton}></MenuItemImage>
    </ToggleButton>
  );
}
