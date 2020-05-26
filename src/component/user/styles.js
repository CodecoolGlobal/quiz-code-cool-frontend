import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { applicationTheme } from "style/js/CommonStyles";

export const FormattedNavLink = styled(NavLink)`
color: ${applicationTheme.color1};
text-decoration: none;
&:hover {
  color: ${applicationTheme.color4};
}
&.active {
  font-weight: bold;
  color: ${applicationTheme.purple};
}
`;