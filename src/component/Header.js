import React from "react";
import { HeaderContainer, Title, QuestionsImage } from "../style/MyStyle";
import question_marks from "../style/ideas.png";

export default function Header() {
  return (
    <HeaderContainer>
      <QuestionsImage
        src={question_marks}
        alt='question_marks'
      ></QuestionsImage>
      <Title>Reacty</Title>
    </HeaderContainer>
  );
}
