import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import NavigationBar from "component/layout/header/NavigationBar";
import HeaderAuthButtons from "component/layout/header/HeaderAuthButtons";

import {
  HeaderContainer,
  TitleContainer,
  Title,
  QuestionsImage,
} from "component/layout/header/styles";
import mainLogo from "style/img/ideas.png";

export let history;

export default function Header() {

  history = useHistory();

  return (
    <HeaderContainer>
      <TitleContainer>
        <NavLink to='/'>
          <QuestionsImage src={mainLogo} alt='mainLogo'></QuestionsImage>
        </NavLink>
        <div>
          <Title>Codecool Quiz</Title>
          <HeaderAuthButtons />
        </div>
      </TitleContainer>
      <NavigationBar />
    </HeaderContainer>
  );
}
