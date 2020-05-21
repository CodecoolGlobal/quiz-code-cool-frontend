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
  purple: "#b300b3",
  gray: "gray",
  borderRadius1: "2px",
  borderRadius2: "5px",
  borderRadius3: "8px",
  borderRadius4: "20px",
  shadow1: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
  shadow2: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
};


export const ContentContainer = styled.div`
  padding: 25px 5% 20px 5%;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 25px 30% 60px 30%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 25px 25% 60px 25%;
  }
  @media screen and (max-width: 600px) {
    margin: 25px 10% 60px 10%;
    padding: 15px 10%;
  }
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

export const Message = styled.p`
  color: ${applicationTheme.color2};
  font-size: ${applicationTheme.fontSize1};
  padding: 5px;
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

export const QuestionListContainer = styled.div`
  padding: 25px 5%;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 25px 15% 60px 15%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 25px 8% 60px 8%;
  }
  @media screen and (max-width: 600px) {
    margin: 25px 5% 60px 5%;
  }
`;

export const Table = styled.table`
  box-shadow: ${applicationTheme.shadow1};
  border-radius: ${applicationTheme.borderRadius1};
`;

export const QuestionTable = styled.table`
  box-shadow: ${applicationTheme.shadow1};
  border-collapse:collapse;
  margin: 10px;
`;

export const FlexContainer = styled.div`
  font-size: ${applicationTheme.fontSize1};
  display: flex;
  justify-content: center;
`;

export const OverflowContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x:auto;
`

export const TableHead = styled.th`
  border-radius: ${applicationTheme.borderRadius1};
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 15px;
  margin-bottom: 5px;
`;

export const QuestionTableHead = styled.th`
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 5px;
  background: ${applicationTheme.gray};
  color: #fff;
`;

export const TableRow = styled.tr`
  background: ${(props) =>
    props.playerTheme
      ? props.playerTheme.backgroundColor
      : applicationTheme.color3};
  color: ${(props) => (props.playerTheme ? applicationTheme.color1 : "#fff")};
`;

export const QuestionsTr = styled.tr`
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
    cursor: pointer;
  }
  &.selected {
    background: ${applicationTheme.color4};
    color: #fff;
  }
`;

export const ResultTableData = styled.td`
  border-radius: ${applicationTheme.borderRadius1};
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 15px;
`;

export const QuestionListTdNavLink = styled(NavLink)`
  display: block;
  text-align: left;
  text-decoration: none;
  color: ${applicationTheme.color1};
  &:hover {
    color: #fff;
  }
`;

export const QuestionsTd = styled.td`
  padding: 8px 10px;
`;

export const Help = styled.p`
  padding: 2px;
  font-size: ${applicationTheme.fontSize3};
`;

export const InputHelperContainer = styled.div`
  text-align: left;
`;
