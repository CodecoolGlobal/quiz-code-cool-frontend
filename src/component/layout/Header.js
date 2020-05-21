import React from "react";
import { NavLink } from "react-router-dom";
import ToolBar from "component/layout/ToolBar";
import HeaderButtons from "component/layout/HeaderButtons";

import {
  HeaderContainer,
  TitleContainer,
  Title,
  QuestionsImage,
} from "style/js/MyStyle";
import mainLogo from "style/img/ideas.png";

export default function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <NavLink to='/'>
          <QuestionsImage src={mainLogo} alt='mainLogo'></QuestionsImage>
        </NavLink>
        <div>
          <Title>Codecool Quiz</Title>
          <HeaderButtons />
        </div>
      </TitleContainer>
      <ToolBar />
    </HeaderContainer>
  );
}
