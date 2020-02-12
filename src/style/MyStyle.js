import styled from "styled-components";

export const theme = {
  inputFontSize: "12px",
  labelFontSize: "12px",
  inputPadding: "8px 10px",
  color1: "#009688",
  color2: "#35a79c",
  color3: "#54b2a9",
  color4: "#65c3ba",
  color5: "#83d0c9"
};

export const Container = styled.div`
  text-align: center;
`;

export const HeaderContainer = styled.div`
  border-radius: 5px;
  margin: 10px 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.div`
  border-radius: 10px;
  margin: 40px 250px;
  padding: 20px 30px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 992px) {
    margin: 20px 15%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 5%;
  }
`;

export const H2 = styled.h3`
  text-align: center;
  padding: 20px 20px;
  color: Black;
`;

export const H3 = styled.h3`
  text-align: center;
  padding: 20px 20px;
  color: Black;
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
  border-color: ${theme.color1};
  background: ${theme.color2};
  color: #fff;
  font-size: ${theme.inputFontSize};
  padding: 5px 5px;
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
  border-radius: 4px;
  box-sizing: border-box;
  &:active {
    border-color: #ff3232;
  }
`;

export const Button = styled.button`
  font-size: ${theme.inputFontSize};
  font-weight: bolder;
  color: ${theme.color1};
  background-color: white;
  border-radius: 20px;
  border: 2px solid ${theme.color2};
  padding: 10px 15px;
  margin: 10px 0 5px 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${theme.color4};
    border-color: ${theme.color4};
  }
`;
