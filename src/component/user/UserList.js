import React, { useState, useContext, useEffect } from 'react'
import { ThinnerContentContainer, H3, OverflowFlexContainer, Table, Help, TableRow, TableData, TBody, FormattedNavLink } from 'style/js/CommonStyles'
import { api_getUsers } from 'api/UserConnection';
import { handleError } from 'util/errorUtil';


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
        handleError(error);
      }
    };

    function compareUsers(a, b) {
      const userA = a.username;
      const userB = b.username;
    
      let comparison = 0;
      if (userA > userB) {
        comparison = 1;
      } else if (userA < userB) {
        comparison = -1;
      }
      return comparison;
    }

    return (
      <ThinnerContentContainer>
        <H3>User list</H3>
        <OverflowFlexContainer>
          {users != null ? (
          <Table>
            <TBody>{
              users.sort(compareUsers).map(user => (
              <TableRow key={user.id}>
                <FormattedNavLink target='_blank' to={`/users/${user.id}`}><TableData>{user.username}</TableData></FormattedNavLink>
              </TableRow>
              ))}
            </TBody>
          </Table>) : <Help>No user to display.</Help>}
        </OverflowFlexContainer>
        <br/>
    </ThinnerContentContainer>
    )
}
