import styled from "styled-components";

export const theme = {
  inputFontSize: "12px",
  labelFontSize: "12px",
  inputPadding: "8px 10px"
};

export const Container = styled.div`
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.div`
  border-radius: 15px;
  margin: 40px 250px;
  padding: 20px 30px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 992px) {
    margin: 20px 15%;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 5%;
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

export const InputLabel = styled.div`
  text-align: left;
  font-size: ${theme.labelFontSize};
  padding: 5px 0px;
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
  font-size: ${theme.inputFontSize};
  background-color: white;
  border-radius: 20px;
  border: 1px solid #4caf50;
  padding: 10px 15px;
  margin: 10px 0 5px 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    border-width: 2px;
  }
`;
