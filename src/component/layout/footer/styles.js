import styled from "styled-components";
import { applicationTheme } from "style/js/CommonStyles";

export const FooterContainer = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
font-size: ${applicationTheme.fontSize1};
color: ${applicationTheme.color1};
background: #fff;
text-align: center;
`;

export const FooterLine = styled.div`
font-family: "Capriola", sans-serif;
float: left;
padding: 10px 15px;
`;

export const FooterLink = styled.a`
float: right;
padding: 10px 15px;
text-decoration: none;
color: ${applicationTheme.color1};
font-size: ${applicationTheme.fontSize1};
&:hover {
  text-decoration: underline;
}
`;