import styled from "styled-components";
import { applicationTheme } from "style/js/CommonStyles";

export const FooterContainer = styled.div`
  padding: 1%;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 98%;
  font-size: ${applicationTheme.fontSize1};
  color: ${applicationTheme.color1};
  background: #fff;
`;

export const FooterItem = styled.div`
  float: right;
  width: 33%;
`;

export const FooterItemCenter = styled.div`
  font-family: "Capriola", sans-serif;
  font-weight: bold;
`;

export const FooterItemRight = styled.div`
  text-align: right;
  & a {
    text-decoration: none;
    color: ${applicationTheme.color1};
    font-size: ${applicationTheme.fontSize1};
    &:hover {
      text-decoration: underline;
      font-weight: bold;
      color: ${applicationTheme.orange}
    }
  }
`;
