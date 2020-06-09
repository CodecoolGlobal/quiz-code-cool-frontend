import React from "react";
import {
  H3,
  Table,
  TableData,
  TableRow,
  Th,
  OverflowFlexContainer,
  TBody,
} from "style/js/CommonStyles";

export default function UserData(props) {
  const user = props.user;

  return (
    <div>
      <H3>{`${user.username}'s page`}</H3>
      <OverflowFlexContainer>
        <Table>
          <TBody>
            <TableRow>
              <Th>Registration Date</Th>
              <TableData>{user.registrationDate}</TableData>
            </TableRow>
            {user.questions != null && (
              <TableRow>
                <Th>Posted Questions</Th>
                <TableData>{user.questions.length}</TableData>
              </TableRow>
            )}
            {user.customQuizzes != null && (
              <TableRow>
                <Th>Created custom quizzes</Th>
                <TableData>{user.customQuizzes.length}</TableData>
              </TableRow>
            )}
          </TBody>
        </Table>
      </OverflowFlexContainer>
    </div>
  );
}
