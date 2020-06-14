import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Image404 = styled.img`
  height: 300px;
`;

export const BackNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
      text-decoration: underline;
  }
`;