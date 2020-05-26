import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [roles, setRoles] = useState(localStorage.getItem("roles"))
  const [userId, setUserId] = useState(localStorage.getItem("userId"))

  return (
    <UserContext.Provider value={{
        usernameState: [username, setUsername],
        rolesState: [roles, setRoles],
        userIdState: [userId, setUserId]
    }}>
      {props.children}
    </UserContext.Provider>
  );
};