import styled from "styled-components";
import "./ideas.png";

export const applicationTheme = {
  mainLightOpaque: "rgba(255, 255, 255, 0.8)",
  fontSize1: "12px",
  inputPadding: "8px 10px",
  color1: "#009688",
  color2: "#35a79c",
  color3: "#54b2a9",
  color4: "#65c3ba",
  color5: "#83d0c9",
  disabled: "gray",
  borderRadius1: "2px",
  borderRadius2: "5px",
  borderRadius3: "8px",
  borderRadius4: "20px",
  shadow1: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
  shadow2: "0 1px 2px 0 rgba(0, 0, 0, 0.2)"
};

export const Container = styled.div`
  text-align: center;
`;

export const HeaderContainer = styled.div`
  justify-content: center;
  display: flex;
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius2};
  margin: 15px 20px;
  padding: 8px 30px;
  box-shadow: ${applicationTheme.shadow1};
`;

export const QuestionsImage = styled.img`
  display: block;
  height: 70px;
`;

export const ContentContainer = styled.div`
  background: ${applicationTheme.mainLightOpaque};
  border: ${props =>
    props.borderColor ? "2px solid " + props.borderColor : "none"};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 20px 25% 60px 25%;
  padding: 15px 40px;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 20px 15% 60px 15%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 5% 60px 5%;
  }
`;

export const QuestionContainer = styled.div`
  margin: 20px 0;
  padding: 5px 20px;
  background: ${props =>
    props.questionColor
      ? props.questionColor
      : applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
`;

export const AnswerContainer = styled.div`
  padding: 0 40px 5px 40px;
`;

export const H1 = styled.h2`
  text-align: center;
`;

export const H2 = styled.h2`
  text-align: center;
  color: ${applicationTheme.color3};
`;

export const Title = styled.h2`
  font-family: "Capriola", sans-serif;
  padding: 20px 10px;
  text-align: center;
  color: ${applicationTheme.color1};
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 10px;
  padding-top: 10px;
  color: ${applicationTheme.color1};
`;

export const InputRow = styled.div`
  width: 100%;
`;

export const InputItem = styled.div`
  box-sizing: border-box;
  float: left;
  padding: 10px;
  width: ${props => props.width}%;
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
    color: ${applicationTheme.disabled};
    border-color: ${applicationTheme.disabled};
    cursor: default;
  }
`;

export const PlayerHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  box-shadow: ${applicationTheme.shadow2};
  border-radius: ${applicationTheme.borderRadius2};
  color: #fff;
  margin-top: 10px;
  padding: 5px 15px;
  background: ${props => props.playerTheme.backgroundColor};
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

export const TableContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const ResultTable = styled.table`
  border: 2px solid #fff;
  border-collapse: collapse;
  box-shadow: ${applicationTheme.shadow1};
  padding: 5px;
  margin: 0 auto;
`;

export const ResultTableRow = styled.tr`
  background: ${props =>
    props.playerTheme
      ? props.playerTheme.backgroundColor
      : applicationTheme.color3};
  color: ${props => (props.playerTheme ? applicationTheme.color1 : "#fff")};
`;

export const ResultTableData = styled.td`
  border: 1px solid #fff;
  font-size: ${applicationTheme.fontSize1};
  padding: 10px 15px;
`;

export const ResultTableHead = styled.th`
  border: 1px solid #fff;
  padding: 10px 25px;
  margin-bottom: 5px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: ${applicationTheme.fontSize1};
  color: ${applicationTheme.color1};
  font-family: "Capriola", sans-serif;
  background: #fff;
  text-align: center;
`;
