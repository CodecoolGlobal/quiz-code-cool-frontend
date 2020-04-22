import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {

  const getFromLocalStorage = (key) => {
    const itemStr = localStorage.getItem(key)
    console.log(itemStr);

    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }

  return (
    <UserContext.Provider value={{
        getFromLocalStorage,
    }}>
      {props.children}
    </UserContext.Provider>
  );
};