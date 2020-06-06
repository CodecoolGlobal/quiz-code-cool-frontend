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

export default function CustomQuizSelect() {
  const history = useHistory();

  const goToNext = (e) => {
    history.push(e.target.value);
  };

  return (
    <ThinnerContentContainer>
      <H3>Custom quiz</H3>

      <InputItem>

      <RadioButton
          id='list'
          type='radio'
          name='answer'
          value={routes.customQuiz.all}
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='list'>List quizzes</RadioButtonLabel>

        <RadioButton
          id='new'
          type='radio'
          name='answer'
          value={routes.customQuiz.new}
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='new'>Create new quiz</RadioButtonLabel>

        <RadioButton
          id='start'
          type='radio'
          name='answer'
          value={routes.customQuiz.start}
          defaultChecked={false}
          onClick={goToNext}
        />
        <RadioButtonLabel htmlFor='start'>Start a quiz</RadioButtonLabel>

      </InputItem>
    </ThinnerContentContainer>
  );
}
