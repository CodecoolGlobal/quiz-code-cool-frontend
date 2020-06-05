import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { applicationTheme } from "style/js/CommonStyles";

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
  justify-content: center;
  display: flex;
  background: ${applicationTheme.mainLightOpaque};
  padding: 10px 30px;
`;

export const Title = styled.h2`
  font-family: "Capriola", sans-serif;
  padding: 10px 10px 0 10px;
  text-align: center;
  color: ${applicationTheme.color1};
`;

export const NavigBar = styled.ul`
  color: ${applicationTheme.color1};
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: #fff;
`;

export const MenuNavLink = styled(NavLink)`
  color: inherit;
  font-size: ${applicationTheme.fontSize1};
  text-decoration: none;
  display: block;
  &.active {
    color: #fff;
    background: ${applicationTheme.color1};
  }
`;

export const MenuNavItem = styled.li`
  margin: 0;
  display: block;
  padding: 5px 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background: ${applicationTheme.color4};
    color: #fff;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  &.active > button {
    color: #fff;
    background: ${applicationTheme.color3};
  }
`;

export const Toolbar = styled.header`
  color: ${applicationTheme.color1};
  position: sticky;
  height: 40px;
  width: 100%;
  background: #fff;
`;

export const ToolbarNavigation = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const ToolbarNavigationItems = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ToolbarNavigationUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  & li {
    font-size: ${applicationTheme.fontSize1};
    padding: 0 0.5rem;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const ToggleButton = styled.button`
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const HeaderButton = styled.button`
  &:focus {
    outline: none;
  }
  clear: both;
  font-size: ${applicationTheme.fontSize1};
  font-weight: bold;
  color: ${applicationTheme.color2};
  background-color: #fff;
  border-radius: ${(props) =>
    props.left
      ? applicationTheme.borderRadius4 +
        " " +
        applicationTheme.borderRadius1 +
        " " +
        applicationTheme.borderRadius1 +
        " " +
        applicationTheme.borderRadius4
      : applicationTheme.borderRadius1 +
        " " +
        applicationTheme.borderRadius4 +
        " " +
        applicationTheme.borderRadius4 +
        " " +
        applicationTheme.borderRadius1};
  border: 2px solid ${applicationTheme.color3};
  padding: 5px 10px;
  margin: 2px 1px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${applicationTheme.color4};
    border-color: ${applicationTheme.color4};
  }
  &:disabled {
    color: ${applicationTheme.gray};
    border-color: ${applicationTheme.gray};
    cursor: default;
  }
`;

export const QuestionsImage = styled.img`
  display: block;
  height: 60px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const UserImage = styled.img`
  height: 13px;
  margin-right: 5px;
`;

export const MenuItemImage = styled.img`
  height: 20px;
`;