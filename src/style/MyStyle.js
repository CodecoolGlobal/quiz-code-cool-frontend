import styled from "styled-components";

export const theme = {
  inputFontSize: "12px",
  labelFontSize: "12px",
  inputPadding: "8px 10px"
};

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.div`
  border-radius: 15px;
  min-width: 80px;
  margin: 5% 20%;
  padding: 20px 30px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 992px) {
    margin: 0 15%;
  }
  @media screen and (max-width: 600px) {
    margin: 0 5%;
  }
`;

export const H3 = styled.h3`
  text-align: center;
  padding: 20px 20px;
  color: #ff3232;
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

export const InputLabel = styled.label`
  font-size: ${theme.labelFontSize};

  padding: 5px;
  width: 100%;
`;

export const Select = styled.select`
  font-size: ${theme.inputFontSize};
  padding: 5px 5px;
  width: 100%;
`;

export const TextInput = styled.input`
  font-size: ${theme.inputFontSize};
  padding: ${theme.inputPadding};
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:active {
    border-color: #ff3232;
  }
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 20px;
  color: black;
  border: 1px solid #4caf50;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    border-width: 2px;
  }
`;
