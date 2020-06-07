import styled from "styled-components";
import { applicationTheme } from "style/js/CommonStyles";

export const TableDataWithElements = styled.div`
  font-size: ${applicationTheme.fontSize1};
  text-align: left;
  display: table-cell;
  & div {
    margin: 20px 25px;
  }
`;
