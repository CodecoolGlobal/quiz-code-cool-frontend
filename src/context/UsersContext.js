import React, { useState, useContext, createContext } from "react";
import { api_getUsers } from "api/userConnection";

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
        }
    }

    const clearSelectedUser = () => {
        setSelectedUserId(DEFAULT_USER.id);
      };

    return (
      <UsersContext.Provider value={{
          clearSelectedUser,
          DEFAULT_USER,
          getUsers,
          usersState: [users, setUsers],
          selectedUserIdState: [selectedUserId, setSelectedUserId]
      }}>
        {props.children}
      </UsersContext.Provider>
    );
  };