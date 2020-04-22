import React, { useContext, useState, useEffect } from "react";
import MultipleAnswers from "component/newquestion/MultipleAnswers";
import TrueFalseAnswers from "component/newquestion/TrueFalseAnswers";
import { TypeContext } from "context/TypeContext";

export default function NewAnswerForm() {
  const [answerComponent, setAnswerComponent] = useState(<div></div>);
  const selectedType = useContext(TypeContext).selectedTypeInput[0];

  useEffect(() => {
    switch (selectedType) {
      case "BOOLEAN":
        setAnswerComponent(<TrueFalseAnswers />);
        break;
      case "MULTIPLE":
        setAnswerComponent(<MultipleAnswers />);
        break;
      default:
        setAnswerComponent(<div></div>);
    }
  }, [selectedType, setAnswerComponent]);

  return <div>{answerComponent}</div>;
}
