import styled from "styled-components";
import { applicationTheme } from "style/js/CommonStyles";
import { NavLink } from "react-router-dom";

export const QuestionsTh = styled.div`
  display: table-cell;
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 5px;
  background: ${applicationTheme.gray};
  color: #fff;
`;

export const QuestionsTr = styled.div`
  display: table-row;
  text-align: left;
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  &:nth-child(even) {
    background-color: #fff;
  }
  &:nth-child(odd) {
    background-color: lightgray;
  }
  &:hover {
    background: ${applicationTheme.color4};
    cursor: default;
  }
  &.selected {
    background: ${applicationTheme.color2};
    color: #fff;
  }
`;

export const QuestionListTdNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #fff;
  }
`;

export const QuestionsTd = styled.div`
  display: table-cell;
  max-width: 400px;
  padding: 8px 10px;
`;

export const TrashImage = styled.img`
  height: 15px;
  &:hover {
    cursor: pointer;
  }
`;
