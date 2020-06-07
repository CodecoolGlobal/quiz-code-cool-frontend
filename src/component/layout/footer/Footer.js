import React from "react";

import {FooterContainer, FooterItemEdge, FooterItemCenter } from "component/layout/footer/styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterItemEdge></FooterItemEdge>
      <FooterItemEdge>
          <a href='https://reacty.netlify.com/' target='_blank'>
            Reacty
          </a>
      </FooterItemEdge>
        <FooterItemCenter>Copyright &copy; 2020 Codecool quiz</FooterItemCenter>
    </FooterContainer>
  );
}
