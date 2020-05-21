import styled from "styled-components";
import { applicationTheme } from "style/js/MyStyle";
import { NavLink } from "react-router-dom";

export const QuestionsTh = styled.th`
font-size: ${applicationTheme.fontSize1};
padding: 10px 5px;
background: ${applicationTheme.gray};
color: #fff;
`;

export const QuestionsTr = styled.tr`
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
  cursor: pointer;
}
&.selected {
  background: ${applicationTheme.color4};
  color: #fff;
}
`;

export const QuestionListTdNavLink = styled(NavLink)`
display: block;
text-align: left;
text-decoration: none;
color: ${applicationTheme.color1};
&:hover {
  color: #fff;
}
`;

export const QuestionsTd = styled.td`
padding: 8px 10px;
`;