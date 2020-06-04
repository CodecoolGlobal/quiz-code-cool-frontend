import React, { useState, useContext, useEffect } from 'react'
import { ThinnerContentContainer, H3, OverflowFlexContainer, Table, Th, TableRow, Help, TableData, Thead, TBody, FormattedNavLink } from 'style/js/CommonStyles'
import { api_getUsers } from 'api/UserConnection';
import { handleError } from 'util/errorUtil';
import { UserContext } from "context/UserContext";


export default function UserList() {
  const [users, setUsers] = useState(null);
  const { isExpired } = useContext(UserContext);

  
    useEffect(() => {
      isExpired();
      getUsers();
    }, []);
  
    const getUsers = async () => {
      try {
        const responseData = await api_getUsers();
        setUsers(responseData);
      } catch (error) {
        handleError(error);
      }
    };

    return (
        <ThinnerContentContainer>
      <H3>User list</H3>
      <OverflowFlexContainer>
        {users != null ? (
        <Table>
          <Thead>
            <TableRow>
              <Th>Username</Th>
            </TableRow>
          </Thead>
          <TBody>{
            users.map(user => (
            <TableRow key={user.id}>
              <FormattedNavLink to={`/users/${user.id}`}><TableData>{user.username}</TableData></FormattedNavLink>
            </TableRow>
            ))}
          </TBody>
        </Table>) : <Help>No user to display.</Help>}
      </OverflowFlexContainer>
    </ThinnerContentContainer>
    )
}
