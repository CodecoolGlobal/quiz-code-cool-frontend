import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "component/layout/Navbar";

import {
  HeaderContainer,
  TitleContainer,
  Title,
  QuestionsImage,
  LoginButton,
  LoginNavLink
} from "style/MyStyle";
import mainLogo from "style/ideas.png";

export default function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <NavLink to='/'>
          <QuestionsImage src={mainLogo} alt='mainLogo'></QuestionsImage>
        </NavLink>
        <div>
          <Title>Codecool Quiz</Title>
          <div>
            <LoginNavLink to='/sign-in'><LoginButton left>Sign in</LoginButton></LoginNavLink>
            <LoginNavLink to='/sign-up'><LoginButton right>Sign up</LoginButton></LoginNavLink>
          </div>
        </div>
      </TitleContainer>
      <Navbar />
    </HeaderContainer>
  );
}
