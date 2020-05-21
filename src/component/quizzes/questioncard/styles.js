import styled from "styled-components";
import { applicationTheme } from "style/js/MyStyle";

export const QuestionMarkImage = styled.img`
  display: block;
  height: 60px;
`;

export const QuestionCardContainer = styled.div`
  background: ${applicationTheme.mainLightOpaque};
  border-radius: ${applicationTheme.borderRadius3};
  margin: 25px 30% 60px 30%;
  box-shadow: ${applicationTheme.shadow1};
  @media screen and (max-width: 992px) {
    margin: 25px 20% 60px 20%;
  }
  @media screen and (max-width: 600px) {
    margin: 25px 10% 60px 10%;
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
  border-radius: 0 0 ${applicationTheme.borderRadius3} ${applicationTheme.borderRadius3};
`;

export const AnswerContainer = styled.div`
  padding: 0 15% 5px 15%;
`;

export const CategoryTitle = styled.h4`
  text-align: center;
  color: ${applicationTheme.gray};
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

export const PlayerName = styled.h2`
  overflow: hidden;
  text-align: center;
`;