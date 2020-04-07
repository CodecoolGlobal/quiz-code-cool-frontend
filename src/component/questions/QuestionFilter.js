import React from "react";

import CategoryInput from "component/inputs/CategoryInput";
import StatusInput from "component/inputs/StatusInput";
import TypeInput from "component/inputs/TypeInput";

import {
    FlexContainer
  } from "style/MyStyle";

export default function QuestionFilter() {
  return (
    <FlexContainer>
      <CategoryInput />
      <TypeInput />
      <StatusInput />
    </FlexContainer>
  );
}
