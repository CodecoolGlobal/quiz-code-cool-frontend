import React from "react";

import Navbar from "component/layout/Navbar";

import {
  HeaderContainer,
  TitleContainer,
  Title,
  QuestionsImage
} from "style/MyStyle";
import mainLogo from "style/ideas.png";

export default function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <QuestionsImage src={mainLogo} alt='mainLogo'></QuestionsImage>
        <Title>Codecool Quiz</Title>
      </TitleContainer>
      <Navbar />
    </HeaderContainer>
  );
}
