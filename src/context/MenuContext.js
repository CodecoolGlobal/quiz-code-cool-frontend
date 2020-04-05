import React, { useState, createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = props => {
    const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <MenuContext.Provider value={[isMenuActive, setIsMenuActive]}>
      {props.children}
    </MenuContext.Provider>
  );
};
