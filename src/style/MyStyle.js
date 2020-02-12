import styled from "styled-components";

export const theme = {
  inputTextSize: "12px",
  inputPadding: "8px 10px"
};

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const ContentContainer = styled.div`
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

export const Select = styled.select`
  font-size: ${theme.inputTextSize};
  padding: ${theme.inputPadding};
  width: 100%;
  margin: 8px 0;
`;

export const TextInput = styled.input`
  font-size: ${theme.inputTextSize};
  padding: ${theme.inputPadding};
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:active {
    border-color: #ff3232;
  }
`;

export const H3 = styled.h3`
  text-align: center;
  padding: 20px 20px;
  color: #ff3232;
`;
