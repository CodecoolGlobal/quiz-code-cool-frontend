import styled from "styled-components";
import "style/ideas.png";
import { NavLink } from "react-router-dom";

export const applicationTheme = {
  mainLightOpaque: "rgba(255, 255, 255, 0.8)",
  fontSize1: "12px",
  fontSize2: "10px",
  inputPadding: "8px 10px",
  color1: "#009688",
  color2: "#35a79c",
  color3: "#54b2a9",
  color4: "#65c3ba",
  color5: "#83d0c9",
  gray: "gray",
  borderRadius1: "2px",
  borderRadius2: "5px",
  borderRadius3: "8px",
  borderRadius4: "20px",
  shadow1: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
  shadow2: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
};

export const Container = styled.div`
  text-align: center;
`;

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

export const QuestionsImage = styled.img`
  display: block;
  height: 60px;
`;

export const UserImage = styled.img`
  float: right;
  padding: 5px 15px 0 0;
  height: 20px;
`;

export const NavigBar = styled.ul`
  position: sticky;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #fff;
`;

export const NavigLink = styled(NavLink)`
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  text-decoration: none;
  float: left;
  &.active {
    color: #fff;
    background: ${applicationTheme.color1};
  }
  @media screen and (max-width: 600px) {
    float: none;
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  &.active > button {
    color: #fff;
    background: ${applicationTheme.color3};
  }
`;

export const NavItem = styled.li`
  margin: 0;
  display: block;
  padding: 10px 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background: ${applicationTheme.color4};
    color: #fff;
  }
`;

export const UserNavLink = styled(NavLink)`
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  text-decoration: none;
  float: right;
  &.active {
    font-weight: bolder;
  }
  @media screen and (max-width: 600px) {
    float: none;
    display: block;
  }
`;

export const UserNavItem = styled.li`
  margin: 0;
  display: block;
  padding: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${applicationTheme.color2};
    font-weight: bolder;
  }
`;

export const FooterLink = styled.a`
  float: right;
  padding: 10px 15px;
  text-decoration: none;
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  &:hover {
    text-decoration: underline;
  }
`;

export const ContentContainer = styled.div`
  padding: 25px 5% 20px 5%;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 20px 30% 60px 30%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 20px 25% 60px 25%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 10% 60px 10%;
    padding: 15px 10%;
  }
`;

export const QuestionCardContainer = styled.div`
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 20px 30% 60px 30%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 20px 20% 60px 20%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 10% 60px 10%;
  }
`;

export const QuestionContainer = styled.div`
  padding: 20px 3% 10px 3%;
  background: ${applicationTheme.mainLightOpaque};
  border: ${(props) =>
    props.borderColor ? "2px solid " + props.borderColor : "none"};
  border-radius: ${applicationTheme.borderRadius3};
  box-shadow: ${applicationTheme.shadow1};
  border-top: 2px solid #fff;
  background: ${(props) =>
    props.questionColor
      ? props.questionColor
      : applicationTheme.mainLightOpaque};
  border-radius: 0 0 ${applicationTheme.borderRadius3}
    ${applicationTheme.borderRadius3};
`;

export const AnswerContainer = styled.div`
  padding: 0 15% 5px 15%;
`;

export const PlayerName = styled.h2`
  overflow: hidden;
  text-align: center;
`;

export const H2 = styled.h2`
  padding: 0 10px;
  text-align: center;
  color: ${applicationTheme.color3};
`;

export const Title = styled.h2`
  font-family: "Capriola", sans-serif;
  padding: 10px 10px 0 10px;
  text-align: center;
  color: ${applicationTheme.color1};
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 10px;
  color: ${applicationTheme.color1};
`;

export const Message = styled.p`
  color: ${applicationTheme.color2};
  font-size: ${applicationTheme.fontSize1};
  padding: 5px;
`;

export const CategoryTitle = styled.h4`
  text-align: center;
  color: ${applicationTheme.gray};
`;

export const InputItem = styled.div`
  width: 100%;
  clear: both;
  display: block;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
  }
`;

export const InputLabel = styled.div`
  font-weight: bolder;
  text-align: left;
  font-size: ${applicationTheme.fontSize1};
  color: ${applicationTheme.color1};
  padding: 5px 0px;
  width: 100%;
`;

export const Select = styled.select`
  border: 1px solid ${applicationTheme.color1};
  border-radius: ${applicationTheme.borderRadius1};
  background: ${applicationTheme.color4};
  color: #fff;
  font-size: ${applicationTheme.fontSize1};
  padding: 7px 5px;
  width: 100%;
  & option {
    background: #fff;
    color: black;
  }
`;

export const TextInput = styled.input`
  font-size: ${applicationTheme.fontSize1};
  padding: ${applicationTheme.inputPadding};
  width: 100%;
  display: inline-block;
  border: 1px solid ${applicationTheme.color1};
  border-radius: ${applicationTheme.borderRadius1};
  box-sizing: border-box;
  &:active {
    border-color: ${applicationTheme.color5};
  }
`;

export const Button = styled.button`
  clear: both;
  font-size: 16;
  font-weight: bolder;
  color: ${applicationTheme.color1};
  background-color: #fff;
  border-radius: ${applicationTheme.borderRadius4};
  border: 2px solid ${applicationTheme.color2};
  padding: 10px 15px;
  margin: 15px;
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

export const HeaderButton = styled.button`
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

export const PlayerHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-radius: ${applicationTheme.borderRadius3}
    ${applicationTheme.borderRadius3} 0 0;
  color: #fff;
  margin-top: 10px;
  padding: 10px 30px;
  background: ${(props) => props.playerTheme.backgroundColor};
`;

export const RadioButtonLabel = styled.label`
  box-shadow: ${applicationTheme.shadow2};
  font-size: ${applicationTheme.fontSize1};
  margin-top: 15px;
  display: block;
  text-align: center;
  cursor: pointer;
  background-color: #454545;
  color: white;
  padding: 10px 15px;
  border-radius: ${applicationTheme.borderRadius1};
  &:hover {
    background: ${applicationTheme.color3};
  }
`;

export const RadioButton = styled.input`
  display: none;
  &:checked + label {
    background-color: ${applicationTheme.color2};
  }
`;

export const Table = styled.table`
  box-shadow: ${applicationTheme.shadow1};
  border-radius: ${applicationTheme.borderRadius1};
`;

export const TableContainer = styled.div`
  font-size: ${applicationTheme.fontSize1};
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const ResultTableRow = styled.tr`
  background: ${(props) =>
    props.playerTheme
      ? props.playerTheme.backgroundColor
      : applicationTheme.color3};
  color: ${(props) => (props.playerTheme ? applicationTheme.color1 : "#fff")};
`;

export const ResultTableData = styled.td`
  border-radius: ${applicationTheme.borderRadius1};
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 15px;
`;

export const ResultTableHead = styled.th`
  border-radius: ${applicationTheme.borderRadius1};
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 15px;
  margin-bottom: 5px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: ${applicationTheme.fontSize1};
  color: ${applicationTheme.color1};
  background: #fff;
  text-align: center;
`;

export const FooterLine = styled.div`
  font-family: "Capriola", sans-serif;
  float: left;
  padding: 10px 15px;
`;

export const QuestionListContainer = styled.div`
  padding: 25px 5%;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 20px 20% 60px 20%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 20px 15% 60px 15%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 10% 60px 10%;
    padding: 15px 10%;
  }
`;

export const QuestionsTr = styled.tr`
  text-align: left;
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  &:nth-child(even) {
    background-color: ${applicationTheme.color5};
  }
  &:nth-child(odd) {
    background-color: lightgray;
  }
  &:hover {
    background: ${applicationTheme.color4};
  }
`;

export const QuestionListElement = styled(NavLink)`
  text-align: left;
  text-decoration: none;
  color: ${applicationTheme.color1};
  &:hover {
    color: #fff;
  }
`;

export const QuestionsTd = styled.td`
  border-radius: ${applicationTheme.borderRadius1};
  padding: 5px 10px;
`;

export const Help = styled.p`
  padding: 2px;
  font-size: ${applicationTheme.fontSize2};
`;

export const InputHelperContainer = styled.div`
  text-align: left;
`;
