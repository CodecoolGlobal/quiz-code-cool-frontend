import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const applicationTheme = {
  mainLightOpaque: "rgba(255, 255, 255, 0.8)",
  fontSize1: "12px",
  fontSize2: "11px",
  fontSize3: "10px",
  inputPadding: "8px 10px",
  color1: "#009688",
  color2: "#35a79c",
  color3: "#54b2a9",
  color4: "#65c3ba",
  color5: "#83d0c9",
  orange: "orange",
  gray: "gray",
  borderRadius1: "2px",
  borderRadius2: "5px",
  borderRadius3: "8px",
  borderRadius4: "20px",
  shadow1: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
  shadow2: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
};

export const ThinnerContentContainer = styled.div`
  padding: 25px 5%;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 25px 30% 70px 30%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 25px 20% 70px 20%;
  }
  @media screen and (max-width: 600px) {
    margin: 25px 5% 70px 5%;
    padding: 15px 10%;
  }
`;

export const WiderContentContainer = styled.div`
  padding: 25px 5%;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 25px 15% 70px 15%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 25px 8% 70px 8%;
  }
  @media screen and (max-width: 600px) {
    margin: 25px 0 70px 0;
  }
`;

export const LeftTextAlignContainer = styled.div`
  text-align: left;
`;

export const H2 = styled.h2`
  padding: 0 10px;
  text-align: center;
  color: ${applicationTheme.color3};
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 10px;
  color: ${applicationTheme.color1};
`;

export const H4 = styled.h4`
  margin: 20px 0 5px 0;
  color: ${applicationTheme.color2};
`;

export const Message = styled.p`
  color: ${applicationTheme.color2};
  font-size: ${applicationTheme.fontSize1};
  padding: 5px;
`;

export const AuthHelp = styled.p`
  color: ${applicationTheme.gray};
  padding: 2px;
  font-size: ${applicationTheme.fontSize3};
`;


export const Help = styled.p`
  color: ${applicationTheme.gray};
  margin: 8px 0;
  font-size: ${applicationTheme.fontSize3};
  font-weight: bolder 
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
  margin: 10px;
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
  &:focus {
    outline: none;
  }
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

export const Table = styled.div`
  width: 100%;
  display: table;
  box-shadow: ${applicationTheme.shadow2};
`;

export const OverflowFlexContainer = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: flex-start
`;

export const Thead = styled.div`
  display: table-header-group;
`;

export const TBody = styled.div`
  display: table-row-group;
`;

export const Th = styled.div`
  min-width: 80px;
  font-weight: bold;
  display: table-cell;
  font-size: ${applicationTheme.fontSize1};
  padding: 15px 20px;
  text-align: left;
`;

export const TableRow = styled.div`
  display: table-row;
  background: ${(props) =>
    props.playerTheme
      ? props.playerTheme.backgroundColor
      : "rgba(75, 170, 151, 0.1)"};
  color: ${applicationTheme.color1};
`;

export const TableData = styled.div`
  display: table-cell;
  font-size: ${applicationTheme.fontSize1};
  padding: 15px 20px;
  text-align: left;
`;

export const FormattedNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${applicationTheme.orange};
  }
  &.active {
    font-weight: bold;
    color: ${applicationTheme.color1};
  }
`;

export const LinedTableTh = styled.div`
  font-weight: bold;
  display: table-cell;
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 5px;
  background: ${applicationTheme.gray};
  color: #fff;
`;

export const LinedTableTr = styled.div`
  display: table-row;
  text-align: left;
  color: ${applicationTheme.color1};
  font-size: ${applicationTheme.fontSize1};
  &:nth-child(even) {
    background-color: #fff;
  }
  &:nth-child(odd) {
    background-color: lightgray;
  }
  &:hover {
    background: ${applicationTheme.color4};
    cursor: default;
  }
  &.selected {
    background: ${applicationTheme.color2};
    color: #fff;
  }
`;

export const LinedTableQuestionTd = styled.div`
  vertical-align: middle;
  display: table-cell;
  max-width: 400px;
  min-width: 150px;
  padding: 8px 10px;
`;


export const SquareLinedTableTd = styled.div`
  vertical-align: middle;
  display: table-cell;
  padding: 8px 10px;
`;

export const ShortCenteredLinedTableTd = styled.div`
  vertical-align: middle;
  text-align: center;
  display: table-cell;
  min-width: 80px;
  padding: 8px 10px;
`;
