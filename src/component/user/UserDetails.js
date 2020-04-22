import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import {
    H3,
    Table,
    ResultTableData,
    TableRow,
    TableHead,
    ContentContainer,
    FlexContainer
  } from "style/MyStyle";

export default function UserDetails() {
  const {getFromLocalStorage} = useContext(UserContext);
  const username = getFromLocalStorage("username");

  return (
    <ContentContainer>
    <H3>User Details</H3>
    <FlexContainer>
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
    </FlexContainer>
  </ContentContainer>
  );
}
