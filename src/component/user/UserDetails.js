import React, { useState, useEffect } from "react";
import {
  H3,
  Table,
  TableData,
  TableRow,
  Th,
  ThinnerContentContainer,
  OverflowFlexContainer,
  Help,
  Thead,
  TBody,
} from "style/js/CommonStyles";
import { api_getUser } from "api/UserConnection";
import { handleError } from "util/errorUtil";
import { FormattedNavLink } from "./styles";

export default function UserDetails(props) {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, [id]);

  const getUserDetails = async () => {
    try {
      const responseData = await api_getUser(id);
      setUser(responseData);
    } catch (error) {
      handleError(error, "Failed to load user data.");
    }
  };

  return (
    <ThinnerContentContainer>
      <H3>User Details</H3>
      <OverflowFlexContainer>
        {user != null ? (
        <Table>
          <Thead>
            <TableRow>
              <Th>Username</Th>
              <Th>{user.username}</Th>
            </TableRow>
          </Thead>
          <TBody>
            <TableRow>
              <Th>Registration Date</Th>
              <TableData>{user.registrationDate}</TableData>
            </TableRow>
            {user.questions != null &&
            <TableRow>
              <Th><FormattedNavLink to={`/users/${user.id}/questions`}>Posted Questions</FormattedNavLink></Th>
              <TableData>{user.questions.length}</TableData>
            </TableRow>
            }
            {user.customQuizzes != null &&
            <TableRow>
              <Th>Created custom quizzes</Th>
              <TableData>{user.customQuizzes.length}</TableData>
            </TableRow>
            }
          </TBody>
        </Table>) : <Help>No user to display.</Help>}
      </OverflowFlexContainer>
    </ThinnerContentContainer>
  );
}
