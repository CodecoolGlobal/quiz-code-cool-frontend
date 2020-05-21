import React from "react";

import {
  FooterContainer,
  FooterLink,
  FooterLine
} from "style/js/MyStyle";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLine>Copyright &copy; 2020 Codecool quiz</FooterLine>
      <FooterLink href='https://reacty.netlify.com/' target='_blank'>
        Reacty
      </FooterLink>
    </FooterContainer>
  );
}
