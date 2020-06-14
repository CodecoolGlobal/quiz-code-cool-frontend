import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { applicationTheme } from "style/js/CommonStyles";

export const Image404 = styled.img`
  height: 300px;
`;

export const BackNavLink = styled(NavLink)`
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  margin: 20px;
  padding: 5px;
  text-decoration: none;
  &:hover {
    border: 2px dotted ${applicationTheme.orange};
    border-radius: ${applicationTheme.borderRadius3};
    color: ${applicationTheme.orange};
  }
  &:active {
    color: ${applicationTheme.color1}
  }
`;
