import React from "react";
import { useHistory } from "react-router-dom";
import {routes} from "util/routes"
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
          value={routes.question.all}
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='list'>List questions</RadioButtonLabel>

        <RadioButton
          id='new'
          type='radio'
          name='answer'
          value={routes.question.new}
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='new'>Create new question</RadioButtonLabel>
      </InputItem>
      <br/>
    </ThinnerContentContainer>
  );
}
