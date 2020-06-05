import React from "react";

import {FooterContainer, FooterItem, FooterItemRight, FooterItemCenter } from "component/layout/footer/styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterItem></FooterItem>
      <FooterItem>
        <FooterItemRight>
          <a href='https://reacty.netlify.com/' target='_blank'>
            Reacty
          </a>
        </FooterItemRight>
      </FooterItem>
      <FooterItem>
        <FooterItemCenter>Copyright &copy; 2020 Codecool quiz</FooterItemCenter>
      </FooterItem>
    </FooterContainer>
  );
}
