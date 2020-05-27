import React from "react";
import {
  Table,
  Thead,
  TableRow,
  LinedTableTh,
  ShortCenteredLinedTableTd,
  LinedTableTr,
  OverflowFlexContainer,
  TBody,
} from "style/js/CommonStyles";

export default function CustomQuizList(props) {
  const { customQuizzes } = props;

  return (
    <OverflowFlexContainer>
      <Table>
        <Thead>
          <TableRow>
            <LinedTableTh>Id</LinedTableTh>
            <LinedTableTh>Quiz</LinedTableTh>
          </TableRow>
        </Thead>
        <TBody>
          {customQuizzes.map((quiz) => (
            <LinedTableTr>
              <ShortCenteredLinedTableTd>{quiz.id}</ShortCenteredLinedTableTd>
              <ShortCenteredLinedTableTd>{quiz.name}</ShortCenteredLinedTableTd>
            </LinedTableTr>
          ))}
        </TBody>
      </Table>
    </OverflowFlexContainer>
  );
}
