import React, { useContext, useEffect } from "react";
import { CustomQuizContext } from "context/CustomQuizContext";
import { ProgressContext } from "context/ProgressContext";

import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function CustomQuizInput() {
  const { getAllCustomQuizzes, selectedCustomQuiz, customQuizzes } = useContext(
    CustomQuizContext
  );

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const setSelectedCustomQuizId = selectedCustomQuiz[1];

  useEffect(() => {
    getAllCustomQuizzes();
  }, [getAllCustomQuizzes]);

  const handleCustomQuiz = e => {
    setIsReadyToProceed(true);
    setSelectedCustomQuizId(e.target.value);
  };

  return (
    <div>
      <InputItem>
        <InputLabel htmlFor='custom-quiz'>Custom Quiz</InputLabel>
        <Select id='custom-quiz' name='custom-quiz' onChange={handleCustomQuiz}>
          <option disabled defaultValue='' selected>
            -- Select quiz --
          </option>
          {customQuizzes.map(quiz => (
            <option value={quiz.id} key={quiz.id}>
              {quiz.name}
            </option>
          ))}
        </Select>
      </InputItem>
    </div>
  );
}
