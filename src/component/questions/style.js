import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const QuestionListTdNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #fff;
  }
`;

export const TrashImage = styled.img`
  height: 15px;
  &:hover {
    cursor: pointer;
  }
`;
