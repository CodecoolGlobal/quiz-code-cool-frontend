import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import {
    H3,
    Table,
    TableData,
    TableRow,
    TableHead,
    ThinnerContentContainer,
    OverflowFlexContainer
  } from "style/js/CommonStyles";

export default function UserDetails() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  return (
    <ThinnerContentContainer>
    <H3>User Details</H3>
    <OverflowFlexContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>{username}</TableHead>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableHead>Registration Date</TableHead>
            <TableData>2020.01.01</TableData>
          </TableRow>
  
        </tbody>
      </Table>
    </OverflowFlexContainer>
  </ThinnerContentContainer>
  );
}
