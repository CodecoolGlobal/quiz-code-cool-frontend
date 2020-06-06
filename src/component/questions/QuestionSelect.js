import React from "react";
import { useHistory } from "react-router-dom";
import {
  ThinnerContentContainer,
  H3,
  InputItem,
  RadioButton,
  RadioButtonLabel
} from "style/js/CommonStyles";

export default function QuestionSelect() {
  const history = useHistory();

  const goToNext = (e) => {
    history.push(e.target.value);
  };

  return (
    <ThinnerContentContainer>
      <H3>Questions</H3>

      <InputItem>

      <RadioButton
          id='list'
          type='radio'
          name='answer'
          value='/questions'
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='list'>List questions</RadioButtonLabel>

        <RadioButton
          id='new'
          type='radio'
          name='answer'
          value='/add-question'
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='new'>Create new question</RadioButtonLabel>
      </InputItem>
    </ThinnerContentContainer>
  );
}
