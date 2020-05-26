import React, { useState, useEffect } from 'react'
import { ThinnerContentContainer, H3, OverflowFlexContainer, Table, TableHead, TableRow, Help, TableData } from 'style/js/CommonStyles'
import { api_getUsers } from 'api/UserConnection';
import { handleError } from 'util/errorUtil';
import { FormattedNavLink } from './styles';

export default function UserList() {
    const [users, setUsers] = useState(null);
  
    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
      try {
        const responseData = await api_getUsers();
        setUsers(responseData);
      } catch (error) {
        handleError(error, "Failed to load users.");
      }
    };


    return (
        <ThinnerContentContainer>
      <H3>User list</H3>
      <OverflowFlexContainer>
        {users != null ? (
        <Table>
          <thead>
            <TableRow>
              <TableHead>Username</TableHead>
            </TableRow>
          </thead>
          <tbody>{
            users.map(user => (
            <TableRow>
              <TableData><FormattedNavLink to={`/users/${user.id}`}>{user.username}</FormattedNavLink></TableData>
            </TableRow>
            ))}
          </tbody>
        </Table>) : <Help>No user to display.</Help>}
      </OverflowFlexContainer>
    </ThinnerContentContainer>
    )
}
