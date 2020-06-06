import React, { useContext, useEffect} from "react";
import { UsersContext } from 'context/UsersContext';
import { InputItem, InputLabel, Select } from "style/js/CommonStyles";

export default function UserInput() {
    
    const {DEFAULT_USER, selectedUserIdState, usersState, getUsers} = useContext(UsersContext)
    const setSelectedUserId = selectedUserIdState[1];
    const users = usersState[0];

    useEffect(() => {
        getUsers()
    }, [])

    const handleUser = e => {
        setSelectedUserId(e.target.value);   
    }

  return (
      users != null &&
    <InputItem>
      <InputLabel htmlFor='user'>User</InputLabel>
      <Select id='user' name='user' onChange={handleUser}>
        <option value={DEFAULT_USER.id}>{DEFAULT_USER.name}</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.username}
          </option>
        ))}
      </Select>
    </InputItem>
  );
}
