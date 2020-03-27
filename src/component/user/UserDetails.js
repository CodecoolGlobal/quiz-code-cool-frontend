import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import {
    H3,
    Table,
    ResultTableData,
    ResultTableRow,
    ResultTableHead,
    ContentContainer,
    TableContainer
  } from "../../style/MyStyle";

export default function UserDetails() {
  const { usernameState } = useContext(UserContext);
  const username = usernameState[0];

  return (
    <ContentContainer>
    <H3>User Details</H3>
    <TableContainer>
      <Table>
        <thead>
          <ResultTableRow>
            <ResultTableHead>Username</ResultTableHead>
            <ResultTableHead>{username}</ResultTableHead>
          </ResultTableRow>
        </thead>
        <tbody>
          <ResultTableRow>
            <ResultTableHead>Registration Date</ResultTableHead>
            <ResultTableData>2020.01.01</ResultTableData>
          </ResultTableRow>
        
        </tbody>
      </Table>
    </TableContainer>
  </ContentContainer>
  );
}
