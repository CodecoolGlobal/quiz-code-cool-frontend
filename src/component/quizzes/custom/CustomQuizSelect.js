import React, { useState } from "react";
import {
  ContentContainer,
  H3,
  Button,
  InputItem,
  RadioButton,
  RadioButtonLabel
} from "style/MyStyle";

export default function CustomQuizSelect(props) {
  const [selected, setSelected] = useState("");

  const setChoice = e => {
    setSelected(e.target.value);
  };

  const goToNext = () => {
    props.history.push(selected);
  };

  return (
    <ContentContainer>
      <H3>Custom quiz</H3>

      <InputItem>
        <RadioButton
          id='new'
          type='radio'
          name='answer'
          value='/custom-quiz/new'
          defaultChecked={false}
          onClick={setChoice}
        />
        <RadioButtonLabel htmlFor='new'>Create new quiz</RadioButtonLabel>

        <RadioButton
          id='start'
          type='radio'
          name='answer'
          value='/custom-quiz/start'
          defaultChecked={false}
          onClick={setChoice}
        />
        <RadioButtonLabel htmlFor='start'>Start a quiz</RadioButtonLabel>
      </InputItem>
      <Button onClick={goToNext}>Next</Button>
    </ContentContainer>
  );
}
