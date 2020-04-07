import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import {
    H3,
    Table,
    ResultTableData,
    TableRow,
    TableHead,
    ContentContainer,
    TableContainer
  } from "style/MyStyle";

export default function UserDetails() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  return (
    <ContentContainer>
    <H3>User Details</H3>
    <TableContainer>
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
            <ResultTableData>2020.01.01</ResultTableData>
          </TableRow>
  
        </tbody>
      </Table>
    </TableContainer>
  </ContentContainer>
  );
}
