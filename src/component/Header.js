import React from "react";
import { HeaderContainer, Title, QuestionsImage } from "../style/MyStyle";
import mainLogo from "../style/ideas.png";

export default function Header() {
  return (
    <HeaderContainer>
      <QuestionsImage src={mainLogo} alt='mainLogo'></QuestionsImage>
      <Title>Codecool Quiz</Title>
    </HeaderContainer>
  );
}
