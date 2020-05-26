import React, { useState, createContext } from "react";
import { api_getUsers } from "api/UserConnection";
import { handleError } from "util/errorUtil";

export const UsersContext = createContext();

export const UsersProvider = props => {
    const DEFAULT_USER = {
        id: "0",
        name: "Any User"
      };
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(DEFAULT_USER.id);
  
    const getUsers = async () => {
        try {
            const responseData = await api_getUsers();
            setUsers(responseData);
        } catch(error) {
            handleError(error, "Failed to load users.");
        }
    }

    return (
      <UsersContext.Provider value={{
          DEFAULT_USER,
          getUsers,
          usersState: [users, setUsers],
          selectedUserIdState: [selectedUserId, setSelectedUserId]
      }}>
        {props.children}
      </UsersContext.Provider>
    );
  };