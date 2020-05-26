import React, { useState, useEffect } from "react";
import {
  H3,
  Table,
  TableData,
  TableRow,
  TableHead,
  ThinnerContentContainer,
  OverflowFlexContainer,
  Help,
} from "style/js/CommonStyles";
import { api_getUser } from "api/UserConnection";
import { handleError } from "util/errorUtil";

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
          <thead>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>{user.username}</TableHead>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableHead>Registration Date</TableHead>
              <TableData>{user.registrationDate}</TableData>
            </TableRow>
            {user.questions != null &&
            <TableRow>
              <TableHead>Posted Questions</TableHead>
              <TableData>{user.questions.length}</TableData>
            </TableRow>
            }
            {user.customQuizzes != null &&
            <TableRow>
              <TableHead>Created custom quizzes</TableHead>
              <TableData>{user.customQuizzes.length}</TableData>
            </TableRow>
            }
          </tbody>
        </Table>) : <Help>No user to display.</Help>}
      </OverflowFlexContainer>
    </ThinnerContentContainer>
  );
}
