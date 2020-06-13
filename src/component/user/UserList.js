import React, { useState, useContext, useEffect } from "react";
import { ErrorContext } from 'context/ErrorContext';
import {
  ThinnerContentContainer,
  H3,
  OverflowFlexContainer,
  Table,
  Help,
  TableRow,
  TableData,
  TBody,
  FormattedNavLink,
} from "style/js/CommonStyles";
import { api_getUsers } from "api/userConnection";
import { CircularProgress } from "@material-ui/core";

export default function UserList() {
  const setError = useContext(ErrorContext)[1];
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(null);
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const responseData = await api_getUsers();
      setUsers(responseData);
    } catch (error) {
      setError(error);
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
      {!users ? (
        <CircularProgress />
      ) : users.length !== 0 ? (
        <OverflowFlexContainer>
          <Table>
            <TBody>
              {users.sort(compareUsers).map((user) => (
                <TableRow key={user.id}>
                  <FormattedNavLink target='_blank' to={`/users/${user.id}`}>
                    <TableData>{user.username}</TableData>
                  </FormattedNavLink>
                </TableRow>
              ))}
            </TBody>
          </Table>
        </OverflowFlexContainer>
      ) : (
        <Help>No user to display.</Help>
      )}
      <br />
    </ThinnerContentContainer>
  );
}
