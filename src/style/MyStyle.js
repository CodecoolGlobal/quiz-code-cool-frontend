import styled from "styled-components";
import "./ideas.png";

export const theme = {
  inputBorderRadius: "2px",
  inputFontSize: "12px",
  labelFontSize: "12px",
  inputPadding: "8px 10px",
  color1: "#009688",
  color2: "#35a79c",
  color3: "#54b2a9",
  color4: "#65c3ba",
  color5: "#83d0c9",
  disabled: "gray"
};

export const Container = styled.div`
  text-align: center;
`;

export const HeaderContainer = styled.div`
  justify-content: center;
  display: flex;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin: 15px 20px;
  padding: 8px 30px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const QuestionsImage = styled.img`
  display: block;
  height: 70px;
`;

export const ContentContainer = styled.div`
  background: ${props =>
    props.customBackground
      ? props.customBackground
      : "rgba(255, 255, 255, 0.8)"};

  border-radius: 10px;
  margin: 30px 25%;
  padding: 15px 40px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 992px) {
    margin: 20px 15%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 5%;
  }
`;

export const H1 = styled.h2`
  text-align: center;
`;

export const H2 = styled.h2`
  text-align: center;
  color: ${theme.color3};
`;

export const Title = styled.h2`
  font-family: "Capriola", sans-serif;
  padding: 20px 10px;
  text-align: center;
  color: ${theme.color1};
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 10px;
  padding-top: 10px;
  color: ${theme.color1};
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
  font-size: ${theme.labelFontSize};
  color: ${theme.color1};
  padding: 5px 0px;
  width: 100%;
`;

export const Select = styled.select`
  border: 1px solid ${theme.color1};
  border-radius: ${theme.inputBorderRadius};
  background: ${theme.color4};
  color: #fff;
  font-size: ${theme.inputFontSize};
  padding: 7px 5px;
  width: 100%;
  & option {
    background: #fff;
    color: black;
  }
`;

export const TextInput = styled.input`
  font-size: ${theme.inputFontSize};
  padding: ${theme.inputPadding};
  width: 100%;
  display: inline-block;
  border: 1px solid ${theme.color1};
  border-radius: ${theme.inputBorderRadius};
  box-sizing: border-box;
  &:active {
    border-color: ${theme.color5};
  }
`;

export const Button = styled.button`
  font-size: 16;
  font-weight: bolder;
  color: ${theme.color1};
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid ${theme.color2};
  padding: 10px 15px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${theme.color4};
    border-color: ${theme.color4};
  }
  &:disabled {
    color: ${theme.disabled};
    border-color: ${theme.disabled};
    cursor: default;
  }
`;

export const PlayerHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #fff;
  margin-top: 10px;
  padding: 5px 15px;
  background: rgba(19, 140, 154, 0.3);
`;

export const RadioButtonLabel = styled.label`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  font-size: ${theme.inputFontSize};
  margin-top: 15px;
  display: block;
  text-align: center;
  cursor: pointer;
  background-color: #454545;
  color: white;
  padding: 10px 15px;
  border-radius: 3px;
  &:hover {
    background: ${theme.color3};
  }
`;

export const RadioButton = styled.input`
  display: none;
  &:checked + label {
    background-color: ${theme.color2};
  }
`;

export const TableContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const ResultTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  background: ${theme.color3};
  color: #fff;
  margin: 0 auto;
`;

export const ResultTableRow = styled.tr``;

export const ResultTableData = styled.td`
  border: 2px dotted #fff;

  padding: 5px 15px;
`;

export const ResultTableHead = styled.th`
  border: 2px dotted #fff;
  padding: 10px 25px;

  margin-bottom: 5px;
`;
